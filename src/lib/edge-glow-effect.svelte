<script lang="ts">
    import { onDestroy } from "svelte";
    import { getObr, getTheme } from "./obr-host.svelte";
    import { buildEffect, type Theme } from '@owlbear-rodeo/sdk';
    import { PUBLIC_EXT_ID } from "$env/static/public";
    import SKSL from './edge-glow-effect.sksl?raw';
    import parseCssColor from 'parse-css-color';
    import type { Vector3 } from "./types";

    const obr = getObr();
    const theme = getTheme();
    const EFFECT_ID = `${PUBLIC_EXT_ID}/edge-glow-effect`;

    $: { attach(getColor($theme)); }

    function getColor(theme: Theme): Vector3 {
        const parsed = parseCssColor(
            $theme.mode === 'DARK'
                ? $theme.secondary.dark
                : $theme.secondary.light
        );
        if (!parsed) {
            return { x: 0, y: 1, z: 0 };
        }
        return {
            x: parsed.values[0] / 255,
            y: parsed.values[1] / 255,
            z: parsed.values[2] / 255,
        };
    }

    async function attach(color: Vector3) {
        const effect = buildEffect()
            .effectType('VIEWPORT')
            .layer('POST_PROCESS')
            .disableHit(true)
            .locked(true)
            .id(EFFECT_ID)
            .sksl(SKSL)
            .uniforms([
                { name: 'margin', value: 0.125 },
                { name: 'opacity', value: 1.66 },
                { name: 'color', value: color },
                { name: 'speed', value: 0.75 },
            ])
            .build();
        await obr.scene.local.addItems([effect]);
    }

    onDestroy(async () => {
        await obr.scene.local.deleteItems([EFFECT_ID]);
    });
</script>