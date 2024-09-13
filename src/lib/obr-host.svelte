<script lang="ts" context="module">
    import { getContext, onDestroy } from "svelte";
    import type OBR_ from '@owlbear-rodeo/sdk';
    export type OBR = typeof OBR_;
    export const CONTEXT_KEY = 'obr' ;

    export type PlayerMap = Record<string, PlayerInfo>;

    export interface Context {
        obr: OBR;
        destroyed: boolean;
        players: Readable<PlayerMap>;
    }

    export interface PlayerInfo {
        name: string;
        role: 'GM' | 'PLAYER';
        connectionId: string;
        color: string;
    }

    export function getObr(): OBR {
        const inst = getContext<Context>(CONTEXT_KEY).obr;
        if (!inst.isReady) {
            throw new Error(`OBR is not ready!`);
        }
        return inst;
    }

    export function getPlayersStore(): Readable<PlayerMap> {
         return getContext<Context>(CONTEXT_KEY).players;
    }
</script>

<script lang="ts">
    import { onMount, setContext } from "svelte";
    import obr, { type Player } from '@owlbear-rodeo/sdk'
    import { page } from "$app/stores";
    import { readable, type Readable } from "svelte/store";

    let ready = false;
    let setPlayers: (_: PlayerMap) => void;
    const players = readable({} as PlayerMap, set_ => {
        setPlayers = set_;
    });

    const ctx: Context = { obr, destroyed: false, players };
    setContext(CONTEXT_KEY, ctx);
    
    async function setReady() {
        console.info(`OBR ready on ${$page.url.pathname}`);
        updatePlayers([
            ...await obr.party.getPlayers(),
            await (async () => {
                const [
                    name,
                    color,
                    connectionId,
                    role,
                ] = await Promise.all([
                    obr.player.getName(),
                    obr.player.getColor(),
                    obr.player.getConnectionId(),
                    obr.player.getRole(),
                ]);
                return {
                    id: obr.player.id,
                    name, 
                    color,
                    connectionId,
                    role,
                } as Player;
            })(),
        ]);
        obr.player.onChange(player => updatePlayers([player]));
        obr.party.onChange(players => updatePlayers(players));
        ready = true;
    }

    function updatePlayers(players: Player[]): void {
        const players_ = $players;
        for (const player of players) {
            players_[player.id] = {
                name: player.name,
                color: player.color,
                connectionId: player.connectionId,
                role: player.role,
            };
        }
        setPlayers(players_);
    }

    function tryToBootstrap() {
        const rdy = (window as any).__obr_ready as { origin: string; userId: string; ref: string; } | undefined;
        if (!rdy) return;
        const bus = (obr.broadcast as any).messageBus as any;
        bus.handleMessage({
            origin: rdy.origin,
            data: {
                id: 'OBR_READY',
                data: {
                    userId: rdy.userId,
                    ref: rdy.ref,
                },
            },
        });
    }
    
    onMount(() => {
        if (obr.isReady) {
            setReady();
        } else if (obr.isAvailable) {
            obr.onReady(() => setReady());
            tryToBootstrap();
        } else {
            console.warn('Not loaded in Owlbear!');
        }
    });

    onDestroy(() => {
       ctx.destroyed = true;
    });
</script>

<div>
{#if ready}
<slot />
{/if}
</div>