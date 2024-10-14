<script lang="ts">
    import { onMount } from "svelte";
    import { getObr } from "./obr-host.svelte";
    import {
        type Item,
        buildEffect,
        buildShape,
        Math2,
    } from "@owlbear-rodeo/sdk";
    import { PUBLIC_EXT_ID } from "$env/static/public";
    import type { TrackerMetadata } from "./types";
    import SKSL from './active-indicator.sksl?raw';

    const TRACKER_METADATA_ID = 'rodeo.owlbear.initiative-tracker/metadata';
    const INDICATOR_ID = `${PUBLIC_EXT_ID}/initiative-active`;
    const SHADER_UNIFORMS = {
        color1: { x: 0.33, y: 1, z: 0.33 },
        color2: { x: 0.5, y: 0.85, z: 0.66 },
        ground: 0.75,
        speed: 0.75,
    };
    const EFFECT_SIZE = { x: 1.5, y: 1.33 };
    const obr = getObr();

    function processSceneItems(items: Item[]) {
        const trackedItems = items.filter(item => item.metadata[TRACKER_METADATA_ID]);
        for (const it of trackedItems) {
            const { metadata: { [TRACKER_METADATA_ID]: metadata } } = it;
            if ((metadata as TrackerMetadata).active) {
                attachActiveIndicatorTo(it);
                return;
            }
        }
        removeActiveIndicator();
    }

    async function removeActiveIndicator() {
        return obr.scene.local.updateItems([INDICATOR_ID],
            ([it]) => {
                it.attachedTo = undefined;
            },
        );
    }
   
    async function attachActiveIndicatorTo(target: Item) {
        const bounds = await obr.scene.items.getItemBounds([target.id]);
        const size = { x: bounds.width, y: bounds.height };
        await obr.scene.local.updateItems([INDICATOR_ID],
            ([indicator]) => {
                indicator.scale = {
                    x: bounds.width,
                    y: bounds.height,
                };
                indicator.position = Math2.subtract(
                    bounds.center,
                    Math2.multiply(Math2.multiply(EFFECT_SIZE, 0.5), size),
                );
                indicator.rotation = 0;
                indicator.attachedTo = target.id;
            },
        );
    }
   
    async function createIndicator() {
        const indicator = buildShape()
            .id(INDICATOR_ID)
            .layer('ATTACHMENT')
            .disableHit(true)
            .locked(true)
            .strokeColor('transparent')
            .fillColor('transparent')
            .width(1)
            .height(1)
            .disableAttachmentBehavior(['COPY', 'DELETE', 'ROTATION', 'SCALE'])
            .build();
        const uniforms = Object.entries(SHADER_UNIFORMS).map(([k, v]) => ({
            name: k, value: v,
        }));
        const backEffect = buildEffect()
            .id(`${INDICATOR_ID}/back`)
            .effectType('STANDALONE')
            .sksl(SKSL)
            .disableHit(true)
            .locked(true)
            .width(EFFECT_SIZE.x)
            .height(EFFECT_SIZE.y)
            .layer('MOUNT')
            .zIndex(-1) 
            .attachedTo(indicator.id)
            .uniforms([
                ...uniforms,
                { name: 'isFront', value: -1 },
                { name: 'opacity', value: 0.66 },
            ])
            .build();
        const frontEffect = buildEffect()
            .id(`${INDICATOR_ID}/front`)
            .effectType('STANDALONE')
            .sksl(SKSL)
            .disableHit(true)
            .locked(true)
            .width(EFFECT_SIZE.x)
            .height(EFFECT_SIZE.y)
            .layer('ATTACHMENT')
            .zIndex(1000)
            .attachedTo(indicator.id)
            .uniforms([
                ...uniforms,
                { name: 'isFront', value: 1 },
                { name: 'opacity', value: 1 },
            ])
            .build();
        await obr.scene.local.addItems([indicator, backEffect, frontEffect]);
    }

    onMount(() => {
        const setupScene = async () => {
            await createIndicator();
            obr.scene.items.getItems().then(processSceneItems);
            obr.scene.items.onChange(processSceneItems);
        };
        obr.scene.onReadyChange(rdy => { if (rdy) setupScene(); });
        obr.scene.isReady().then(rdy => { if (rdy) setupScene(); })
    });
</script>

<div class="component"></div>