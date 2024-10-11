<script lang="ts">
    import { PUBLIC_DEV_MODE, PUBLIC_EXT_ID } from "$env/static/public";
    import { getObr, getPlayersStore } from "$lib/obr-host.svelte";
    import RollFormula from "$lib/roll-formula.svelte";
    import { cloneRoll, getRollResult, isCriticalRoll, ParseRollError, parseRollSpec, reroll, type Roll } from "$lib/rolls";
    import SimpleInitiativeGraph from "$lib/simple-initiative-graph.svelte";
    import { isRollMsg, type AnnounceMsgData, type RollMsgData } from "$lib/types";
    import type { Item } from "@owlbear-rodeo/sdk";
    import { onMount } from "svelte";

    interface RollHistoryItem {
        playerId: string;
        rolls: Roll[];
        when: number;
        rollId: string;
    }

    interface RollAction {
        rolls: Roll[];
    }

    interface AnnounceAction {
        message: string;
    }

    type InputAction = RollAction | AnnounceAction;

    const INPUT_HISTORY_SIZE = 16;
    const obr = getObr();
    const players = getPlayersStore();
    let rollHistory = [] as RollHistoryItem[];
    let historyElement: HTMLElement;
    let inputHistory: string[] = [''];
    let rawInput = '';
    let clientWidth = 0;
    let isInitiativeGraphEmpty = true;

    function isRollAction(action: InputAction): action is RollAction {
        return !!(action as any).rolls;
    }

    function isAnnounceAction(action: InputAction): action is AnnounceAction {
        return typeof (action as any).message === 'string';
    }

    function validateInput(input: string): boolean {
        try {
            if (parseInput(input)) {
                return true;
            }
        } catch {}
        return false;
    }

    function addToInputHistory(input: string) {
        if (!input) return;
        const idx = inputHistory.indexOf(input);
        if (idx === -1) {
            inputHistory.push(input);
            inputHistory.splice(1, Math.max(0, inputHistory.length - INPUT_HISTORY_SIZE));
        } else {
            inputHistory.push(...inputHistory.splice(idx, 1));
        }
    }

    function rotateInputHistory(offset: number): string {
        let currIdx = inputHistory.lastIndexOf(rawInput ?? '');
        if (currIdx === -1) {
            currIdx = 0;
            inputHistory[currIdx] = rawInput ?? '';
        }
        let newIdx = (currIdx + offset) % inputHistory.length;
        if (newIdx < 0) {
            newIdx = inputHistory.length + newIdx;
        }
        return rawInput = inputHistory[newIdx];
    }

    function parseInput(input: string): InputAction | null {
        if ((input).startsWith('!')) {
            if (input.length === 1) return null;
            return { message: input.substring(1) };
        }
        const rolls = parseRollSpec(input).map(r => reroll(r));
        if (!rolls.length) return null;
        return { rolls };
    }

    function submitInput() {
        try {
            const action = parseInput(rawInput || 'd20');
            if (!action) return;
            if (isAnnounceAction(action)) {
                obr.broadcast.sendMessage(
                    PUBLIC_EXT_ID,
                    {
                        topic: 'announce',
                        msg: action.message,
                        playerId: obr.player.id,
                    } satisfies AnnounceMsgData,
                    { destination: 'ALL' },
                );
            } else if (isRollAction(action)) {
               doRolls(action.rolls);
            }
        } catch (e) {
            if (e instanceof ParseRollError) {
                obr.notification.show(e.message, 'ERROR');
                return;
            }
            return;
        }
        addToInputHistory(rawInput);
        rawInput = '';
        scrollToEnd();
    }

    function doRolls(rolls: Roll[]) {
        obr.broadcast.sendMessage(
            PUBLIC_EXT_ID,
            {
                topic: 'roll',
                rolls: rolls,
                rollId: crypto.randomUUID(),
                playerId: obr.player.id,
                when: Date.now(),
            } satisfies RollMsgData,
            { destination: 'ALL' },
        );
    }

    async function runCritTest() {
        obr.broadcast.sendMessage(
            PUBLIC_EXT_ID,
            {
                topic: 'roll',
                rolls: [ { sides: 20, results: [20] } ],
                rollId: crypto.randomUUID(),
                playerId: obr.player.id,
                when: Date.now(),

            } satisfies RollMsgData,
            { destination: 'ALL' },
        );
    }

    function inputKeyDownHandler(e: KeyboardEvent) {
        if (e.key === 'ArrowUp') {
            rotateInputHistory(-1);
            e.preventDefault();
        } else if (e.key === 'ArrowDown') {
            rotateInputHistory(1);
            e.preventDefault();
        } else if (e.key === 'Escape') {
            rawInput = '';
            e.preventDefault();
        }
    }

    async function rerollHistoryItem(item: RollHistoryItem) {
        doRolls(item.rolls.map(r => reroll(cloneRoll(r))));
        setTimeout(scrollToEnd, 100);
    }

    function scrollToEnd() {
        historyElement.scrollTop = historyElement.scrollHeight;
    }

    onMount(() => {
        obr.broadcast.onMessage(PUBLIC_EXT_ID, async msg => {
            if (!isRollMsg(msg) || !historyElement) return;
            rollHistory.push({
                playerId: msg.data.playerId,
                rolls: msg.data.rolls,
                rollId: msg.data.rollId,
                when: msg.data.when,
            });
            rollHistory = rollHistory.slice(-100);
            const autoScroll = Math.ceil(historyElement.scrollTop) >=
                Math.floor(historyElement.scrollHeight - historyElement.clientHeight) - 16;
            if (autoScroll) {
                setTimeout(scrollToEnd, 10);
            }
        });
    });


    $: {
        if (clientWidth && clientWidth !== window.window.innerWidth) {
            obr.action.setWidth(clientWidth);
        }
    }
</script>

<style lang="scss">
    @use "../../../lib/global.scss";

    .component {
        position: fixed;
        inset: 0;
        display: flex;
        overflow: hidden;

        .grid {
            padding: 1ex;
            display: grid;
            grid-template:  'test-controls test-controls' auto
                            'rolls-header initiative-header' auto
                            'roll-history initiative' 1fr
                            'roll-input initiative' auto / 40ex fit-content(100%);
        }

        .test-controls {
            grid-area: test-controls;
        }

        .header {
            text-align: center;
            font-weight: bold;
            opacity: 0.75;
            color: var(--theme-secondary-color);
            margin-bottom: 0.25em;
        }

        .rolls-header {
            grid-area: rolls-header;
        }

        .roll-history {
            overflow: hidden auto;
            margin: 0.5em 0;
            user-select: none;
            grid-area: roll-history;
    
            > .item {
                position: relative;
                animation: 0.2s cubic-bezier(.43,.89,.86,1.22) 1 appear;

                @keyframes appear {
                    0% {
                        opacity: 0;
                        transform: translate(-32ex, 0);
                    }
                    100% {
                        opacity: 100%;
                        transform: translate(0, 0);
                    }
                }

                &:not(:last-child) {
                    margin-bottom: 0.15em;
                }

                > .content {
                    display: block;
                    margin-left: 2ex;
                    text-indent: -2ex;

                    > .prefix {
                        > .name {
                            font-weight: bold;
                        }
                    }
        
                    > .timestamp {
                        display: none;
                    }

                    > .formulas {
                        text-indent: 0;
                        > .formula:not(:last-child)::after {
                            content: ', ';
                        }
                    }

                    > .results {
                        > .result {
                            font-weight: bold;
                            opacity: 0;
                            animation: 0.5s forwards 1 ease-out 0.5s result-appear;

                            @keyframes result-appear {
                                0% {
                                    opacity: 0;
                                }
                                100% {
                                    opacity: 1;
                                }
                            }
                        }

                        > .result:not(:last-child)::after {
                            content: ', ';
                        }
                    }
                }

                > .interaction {
                    position: absolute;
                    inset: 0;
                    display: none;
                    align-items: start;
                    justify-content: end;
                    padding: 0 1ex 0 0;
                    color: var(--theme-text-color);
                    font-weight: bold;
                    text-decoration: underline;
                } 
            }

            > .item.critical {
                > :not(.prefix, .timestamp) {
                    color: orangered;
                }
            }

            > .item:not(:last-child) {
                margin-bottom: 0.25em;
            }

            > .item:hover {
                > .content {
                    transform: translate(0.15em, 0);
                    transform-origin: center;
                }

                > .interaction {
                    display: flex;
                    background: linear-gradient(
                        90deg,
                        color-mix(in hsl, var(--theme-bg), transparent 100%) 0%,
                        color-mix(in hsl, var(--theme-bg), transparent 50%) 80%,
                        var(--theme-bg) 100%,
                    );
                } 
            }
        }

        .roll-input {
            display: flex;
            gap: 1.5ex;
            align-items: center;
            overflow: hidden;
            grid-area: roll-input;

            > input[type="text"] {
                flex: 1 0;
            }

            .submit-container.validated {
                position: relative;
                z-index: 1;
                transform-origin: 47% 50%;
                animation: 0.85s linear infinite spin;
            }

            input[type="submit"] {
                background: var(--theme-primary-color);
                mask-image: url('/dice.svg');
                border: 0;
                mask-repeat: no-repeat;
                position: relative;
                width: 2.25em;
                height: 2.25em;
                cursor: pointer;
    
                &:hover {
                    transform: scale(1.1);
                }
            }
    
            input[type="text"] {
                border-radius: 0.75ex;
                padding: 1ex;
                border: 1px solid var(--theme-primary-color);
                background: transparent;
                color: var(--theme-text-color);
    
                &:focus {
                    border-color: invert(var(--theme-primary-color));
                    outline: none;
                }
    
                &::placeholder {
                    color: color-mix(in hsl, var(--theme-text-color), transparent 40%);
                    opacity: 1;
                    font-style: italic;
                }
            }
        }

        .initiative-header {
            grid-area: initiative-header;
        }

        .initiative {
            grid-area: initiative;
            display: flex;
            flex-direction: row;
            align-items: center;

            .separator {
                background-color: color-mix(in hsl, var(--theme-text-color), transparent 85%);
                width: 0.33rex;
                height: 50%;
                border-radius: 100%;
                margin: 1.5rex;
            }

            .graph {
                height: 100%;
                width: 24ex;
                overflow: hidden;
            }
        }

        .grid.no-initiative {
            .initiative-header, .initiative {
                display: none;
            }
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .component:not(.dev) {
        .test-controls {
            display: none;
        }
    }
</style>

<div class="component" class:dev={!!PUBLIC_DEV_MODE}>
    <div class="grid" bind:offsetWidth={clientWidth} class:no-initiative={isInitiativeGraphEmpty}>
        <div class="test-controls">
            <button on:click={() => runCritTest()}>crit!</button>
        </div>
        <div class="rolls-header header">Rolls</div>
        <div class="roll-history" bind:this={historyElement}>
            {#each rollHistory as item (item.rollId)}
            <div class="item" class:critical={item.rolls.some(r => isCriticalRoll(r))}>
                <span class="content">
                    <span class="timestamp">
                        {new Date(item.when).toLocaleTimeString()}
                    </span>
                    <span class="prefix">
                        <span class="name">{$players[item.playerId]?.name ?? '?'}</span>:
                    </span>
                    <span class="formulas">
                        {#each item.rolls as roll, j (j)}
                        <span class="formula">
                            <RollFormula {roll} />
                        </span>
                        {/each}
                    </span>
                    <span class="results">
                        =
                        {#each item.rolls as roll, j (j)}
                        <span class="result">{getRollResult(roll)}</span>
                        {/each}
                    </span>
                </span>
                <a
                    class="interaction"
                    href="#"
                    on:click|preventDefault={() => rerollHistoryItem(item)}>
                    Reroll
                </a>
            </div>
            {/each}
        </div>
        <form class="roll-input" action="#" on:submit|preventDefault={() => submitInput()}>
            <input
                tabindex="0"
                type="text"
                bind:value={rawInput}
                placeholder="d20 (🢁 or 🢃 for history)"
                on:keydown={inputKeyDownHandler} />
            <div class="submit-container" class:validated={validateInput(rawInput)}>
                <input tabindex="0" type="submit" title="Roll!" value="" />
            </div>
        </form>
        <div class="initiative-header header">Turns</div>
        <div class="initiative">
            <div class="separator" />
            <div class="graph">
                <SimpleInitiativeGraph bind:empty={isInitiativeGraphEmpty} />
            </div>
        </div>
    </div>
</div>