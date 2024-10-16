<script lang="ts">
    import { onMount } from "svelte";
    import { getObr } from "./obr-host.svelte";
    import { PUBLIC_EXT_ID } from "$env/static/public";
    import { buildEffect } from "@owlbear-rodeo/sdk";
    import RIPPLE_SKSL from './ripple-effect.sksl?raw';
    import { isEffectMessage } from "./types";

    const VIEWPORT_EFFECT_BASE_ID = `${PUBLIC_EXT_ID}/viewport-effect`;
    const obr = getObr();
    const activeEffects = {} as Record<string, boolean>;
    export const getEffectStatus = (name: string) => {
        return !!activeEffects[name];
    }

    async function hideViewportEffect(name: string) {
        activeEffects[name] = false;
        const id = `${VIEWPORT_EFFECT_BASE_ID}/${name}`;
        await obr.scene.local.deleteItems([id]);
    }

    async function showViewportEffect(name: string) {
        const id = `${VIEWPORT_EFFECT_BASE_ID}/${name}`;
        const builder = buildEffect()
            .id(id)
            .layer('POST_PROCESS')
            .disableHit(true)
            .effectType('VIEWPORT')
            .locked(true) ;
        if (name === 'ripple') {
            builder
                .sksl(RIPPLE_SKSL)
                .uniforms([
                    { name: 'speed', value: 1.5 },
                    { name: 'amplitude', value: 0.0175 },
                    { name: 'spacing', value: 5 },
                ])
        } else {
            return;
        }
        activeEffects[name] = true;
        await obr.scene.local.addItems([builder.build()]);
    }


    onMount(() => {
        obr.broadcast.onMessage(PUBLIC_EXT_ID, msg => {
            if (!isEffectMessage(msg)) return;
            const { data } = msg;
            if (data.on) {
                showViewportEffect(data.effect);
            } else {
                hideViewportEffect(data.effect);
            }
        });
    });
</script>

