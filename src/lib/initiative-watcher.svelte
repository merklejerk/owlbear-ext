<script lang="ts">
    import { onMount } from "svelte";
    import { getObr } from "./obr-host.svelte";
    import {
        type Item,
        buildEffect,
        buildShape,
        type Shape,
        MathM,
        Math2,
    } from "@owlbear-rodeo/sdk";
    import { PUBLIC_EXT_ID } from "$env/static/public";
    import type { TrackerMetadata } from "./types";
    import SKSL from './active-indicator.sksl?raw';

    const TRACKER_METADATA_ID = 'rodeo.owlbear.initiative-tracker/metadata';
    const INDICATOR_ID = `${PUBLIC_EXT_ID}/initiative-active`;
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

    function isShape(it: Item): it is Shape {
        return it.type === 'SHAPE';
    }
   
    async function attachActiveIndicatorTo(target: Item) {
        const bounds = await obr.scene.items.getItemBounds([target.id]);
        const w = bounds.width * 1.33;
        const h = bounds.height * 1.66;
        await obr.scene.local.updateItems([INDICATOR_ID],
            ([indicator]) => {
                if (!isShape(indicator)) return;
                // if (indicator.attachedTo === target.id) return;
                const targetM = MathM.fromItem(target);
                const invTargetM = MathM.inverse(targetM);
                const d = MathM.decompose(invTargetM);
                console.log(d, MathM.decompose(targetM), target.position, bounds.center);
                const b = Math2.rotate({ x: bounds.width, y: bounds.height }, { x: 0, y: 0 }, target.rotation);
                indicator.scale = {
                    x: bounds.width,
                    y: bounds.height,
                };
                indicator.position = bounds.min;
                indicator.rotation = 0;
                indicator.attachedTo = target.id;
            },
        );
        console.log(await obr.scene.local.getItemAttachments([target.id]));
    }
   
    async function createIndicator() {
        const indicator = buildShape()
            .id(INDICATOR_ID)
            .layer('ATTACHMENT')
            .width(1)
            .height(1)
            .strokeColor('transparent')
            .fillColor('green')
            // .fillOpacity(0.5) 
            .disableHit(true)
            .locked(true)
            // .visible(false)
            .disableAttachmentBehavior(['COPY', 'DELETE', 'ROTATION', 'SCALE', 'POSITION'])
            .build();
        const backEffect = buildEffect()
            .id(`${INDICATOR_ID}/back`)
            .disableHit(true)
            .locked(true)
            .effectType('ATTACHMENT')
            .sksl(SKSL)
            .width(0)
            .height(0)
            .layer('DRAWING')
            .attachedTo(indicator.id)
            // .disableAttachmentBehavior([])
            .build();
        const frontEffect = buildEffect()
            .id(`${INDICATOR_ID}/front`)
            .disableHit(true)
            .locked(true)
            .effectType('ATTACHMENT')
            .sksl(SKSL)
            .width(1)
            .height(1)
            // .blendMode('SR')
            // .position(backEffect.position)
            .layer('ATTACHMENT')
            .attachedTo(indicator.id)
            // .scale({x: 0, y: 0})
            // .disableAttachmentBehavior(['SCALE'])
            .build();
        await obr.scene.local.addItems([indicator]);
        await obr.scene.local.addItems([frontEffect]);
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