<script lang="ts" context="module">
    import { getContext, onDestroy } from "svelte";
    import type OBR_ from '@owlbear-rodeo/sdk';
    export type OBR = typeof OBR_;
    export const CONTEXT_KEY = 'obr' ;

    export type ThemeMode = 'DARK' | 'LIGHT';
    export type PlayerMap = Record<string, PlayerInfo>;

    export interface Context {
        obr: OBR;
        destroyed: boolean;
        players: Readable<PlayerMap>;
        theme: Readable<ThemeMode>;
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

    export function getTheme(): Readable<ThemeMode> {
         return getContext<Context>(CONTEXT_KEY).theme;
    }
</script>

<script lang="ts">
    import { onMount, setContext } from "svelte";
    import obr, { type Player, type Theme } from '@owlbear-rodeo/sdk'
    import { page } from "$app/stores";
    import { writable, type Readable } from "svelte/store";

    let styleVars = {};
    let ready = false;
    const themeMode = writable<ThemeMode>('DARK');
    const players = writable<PlayerMap>({});

    const ctx: Context = { obr, destroyed: false, players, theme: themeMode };
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
        updateTheme(await obr.theme.getTheme());
        obr.theme.onChange(updateTheme);
        obr.player.onChange(player => updatePlayers([player]));
        obr.party.onChange(players => updatePlayers(players));
        ready = true;
    }

    function updateTheme(theme: Theme): void {
        styleVars = {
            '--theme-text-color': theme.text.primary,
            '--theme-text2-color': theme.text.secondary,
            '--theme-primary-color': theme.primary.main,
            '--theme-secondary-color': theme.secondary.main,
            '--theme-mode': theme.mode,
        };
        $themeMode = theme.mode;
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
        $players = players_;
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


<style lang="scss">
    .root {
        --theme-text-color: initial;
        --theme-text2-color: initial;
        --theme-primary-color: cornflowerblue;
        --theme-secondary-color: conrflowerblue;
        --theme-mode: 'DARK';
        display: contents;
        color: var(--theme-text-color, initial);
        font-family: sans-serif;
    }
</style>

<div class="root" style={Object.entries(styleVars).map(([k,v]) => `${k}: ${v}`).join(';')}>
{#if ready}
<slot />
{/if}
</div>