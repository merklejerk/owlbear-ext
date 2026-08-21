<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import type { RollBreakdown } from '$lib/rolls';
    import { DEFAULT_THEME, type DiceTheme } from './dice-texture';

    export let breakdown: RollBreakdown;
    export let projectedPositions: Array<{ x: number; y: number }> = [];
    export let theme: DiceTheme = DEFAULT_THEME;
    export let width: number = 1200;
    export let height: number = 800;

    let animFrame: number | null = null;
    let isCombined = false;

    $: centerX = (width > 0 ? width : 1200) / 2;
    $: centerY = (height > 0 ? height : 800) / 2;

    $: hasModifier = breakdown && breakdown.modifier !== 0;
    $: isMultiDice = breakdown && breakdown.dice.length > 1;

    $: isSingleDie = (breakdown?.dice.length || 0) <= 1;
    $: if (isSingleDie) {
        isCombined = true;
    }

    interface AnimatedDie {
        x: number;
        y: number;
        scale: number;
        opacity: number;
    }

    let animatedDice: AnimatedDie[] = [];

    onMount(() => {
        if (isSingleDie) {
            isCombined = true;
            return;
        }

        const startTime = performance.now();
        const hoverDuration = 0.60;  // 600ms hovering insect-like over the dice
        const flightDuration = 0.85; // 850ms sinuous flight to center
        const combineTime = hoverDuration + flightDuration;

        const animate = (now: number) => {
            const elapsed = (now - startTime) / 1000;
            const diceCount = breakdown?.dice.length || 0;

            if (elapsed >= combineTime && !isCombined) {
                isCombined = true;
            }

            const currentW = width > 0 ? width : 1200;
            const currentH = height > 0 ? height : 800;
            const cX = currentW / 2;
            const cY = currentH / 2;

            const nextPositions: AnimatedDie[] = [];

            for (let i = 0; i < diceCount; i++) {
                const die = breakdown.dice[i];
                const isDropped = die?.dropped;
                const base = projectedPositions[i] || { x: cX, y: cY };
                // Golden ratio phase offset per die so each has a unique, distinct flight trajectory
                const phi = i * 2.39996 + (die?.result || 1) * 1.618;

                let x = base.x;
                let y = base.y;
                let scale = 1.0;
                let opacity = 1.0;

                // Organic harmonic levitation vector (continuous across hover and flight)
                const hoverX = Math.sin(elapsed * 7.2 + phi) * 8.5 + Math.cos(elapsed * 13.1 + phi * 1.6) * 3.5;
                const hoverY = Math.cos(elapsed * 6.4 + phi) * 7.5 + Math.sin(elapsed * 15.3 + phi * 1.4) * 3.0;

                if (elapsed < hoverDuration) {
                    // Phase 1: Pop in & hover like a dragonfly / insect
                    const popT = Math.min(1.0, elapsed / 0.22);
                    scale = popT < 0.7 ? (popT / 0.7) * 1.25 : 1.25 - ((popT - 0.7) / 0.3) * 0.25;
                    const baseOpacity = isDropped ? 0.40 : 1.0;
                    opacity = Math.min(1.0, elapsed / 0.12) * baseOpacity;

                    x = base.x + hoverX;
                    y = base.y + hoverY;
                } else if (elapsed < combineTime) {
                    if (isDropped) {
                        // Dropped dice (in advantage / disadvantage) fade away in place above their 3D die
                        const p = Math.min(1.0, (elapsed - hoverDuration) / flightDuration);
                        x = base.x + hoverX;
                        y = base.y + hoverY;
                        opacity = Math.max(0.0, 0.40 * (1.0 - p * 1.8));
                        scale = Math.max(0.6, 1.0 - p * 0.4);
                    } else {
                        // Kept dice take the sinuous path gliding towards center
                        const p = Math.min(1.0, (elapsed - hoverDuration) / flightDuration);

                        // Smootherstep (zero 1st and 2nd derivatives at endpoints for silky takeoff and landing)
                        const u = p * p * p * (p * (p * 6 - 15) + 10);

                        const startX = base.x;
                        const startY = base.y;
                        const endX = cX;
                        const endY = cY;

                        const bx = startX + (endX - startX) * u;
                        const by = startY + (endY - startY) * u;

                        const vx = endX - startX;
                        const vy = endY - startY;
                        const dist = Math.hypot(vx, vy);

                        // Perpendicular normal vector
                        const nx = dist > 0.001 ? -vy / dist : 0;
                        const ny = dist > 0.001 ? vx / dist : 0;

                        // Sinuous wave envelope: arches outward and returns to zero at arrival
                        const envelope = Math.sin(p * Math.PI);
                        const wave = Math.sin(p * Math.PI * 3.0 + phi) * Math.min(75, Math.max(25, dist * 0.38)) * envelope;

                        // Flutter jitter
                        const flutterX = Math.cos(elapsed * 24 + phi) * 4.0 * envelope;
                        const flutterY = Math.sin(elapsed * 28 + phi) * 4.0 * envelope;

                        // Seamlessly decay hover wobble using (1 - u) so there is zero coordinate jump at t = hoverDuration
                        const wobbleDecay = 1.0 - u;

                        x = bx + hoverX * wobbleDecay + nx * wave + flutterX;
                        y = by + hoverY * wobbleDecay + ny * wave + flutterY;
                        scale = 1.0 + envelope * 0.22;
                        opacity = 1.0;
                    }
                } else {
                    // Phase 3: Merged into center
                    if (isDropped) {
                        opacity = 0;
                    } else {
                        x = cX;
                        y = cY;
                        const dt = elapsed - combineTime;
                        opacity = Math.max(0.0, 1.0 - dt / 0.15);
                        scale = Math.max(0.5, 1.0 - dt * 2.5);
                    }
                }

                nextPositions.push({ x, y, scale, opacity });
            }

            animatedDice = nextPositions;

            if (elapsed < combineTime + 0.35) {
                animFrame = requestAnimationFrame(animate);
            }
        };

        animFrame = requestAnimationFrame(animate);

        return () => {
            if (animFrame) {
                cancelAnimationFrame(animFrame);
            }
        };
    });

    onDestroy(() => {
        if (animFrame) {
            cancelAnimationFrame(animFrame);
        }
    });
</script>

<style lang="scss">
    .gather-overlay {
        position: absolute;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
        user-select: none;
        z-index: 10;
    }

    .die-numeral {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 5.2rem;
        font-weight: 900;
        color: #ffffff;
        background: transparent;
        border: none;
        box-shadow: none;
        pointer-events: none;
        white-space: nowrap;
        transform: translate(-50%, -50%);
        text-shadow:
            0 4px 8px rgba(0, 0, 0, 0.95),
            0 0 28px rgba(255, 215, 0, 0.8),
            0 0 56px rgba(255, 215, 0, 0.45);

        &.crit {
            color: #ffd700;
            text-shadow:
                0 4px 8px rgba(0, 0, 0, 0.95),
                0 0 35px #ffd700,
                0 0 70px rgba(255, 215, 0, 0.95);
        }

        &.fumble {
            color: #ef4444;
            text-shadow:
                0 4px 8px rgba(0, 0, 0, 0.95),
                0 0 35px #ef4444,
                0 0 60px rgba(239, 68, 68, 0.9);
        }

        &.dropped {
            color: #94a3b8;
            text-decoration: line-through;
            text-decoration-color: rgba(239, 68, 68, 0.85);
            text-decoration-thickness: 6px;
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
            filter: grayscale(0.85);
        }
    }

    .combined-result-container {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        animation: combine-pop 320ms cubic-bezier(0.18, 1.25, 0.4, 1) forwards;
    }

    @keyframes combine-pop {
        0% {
            transform: translate(-50%, -50%) scale(0.65);
            opacity: 0;
        }
        75% {
            transform: translate(-50%, -50%) scale(1.06);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }

    .equation-card {
        background: rgba(0, 0, 0, 0.45);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: none;
        border-radius: 36px;
        padding: 1.2rem 2.8rem;
        box-shadow: 0 24px 64px rgba(0, 0, 0, 0.85), 0 0 32px rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        gap: 1.2rem;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: #ffffff;
        white-space: nowrap;

        &.crit {
            box-shadow: 0 0 50px rgba(255, 215, 0, 0.5), 0 24px 64px rgba(0, 0, 0, 0.85);
            animation: crit-pulse 1.2s ease-in-out infinite alternate;
        }

        &.fumble {
            box-shadow: 0 0 45px rgba(239, 68, 68, 0.45), 0 24px 64px rgba(0, 0, 0, 0.85);
        }
    }

    @keyframes crit-pulse {
        0% {
            box-shadow: 0 0 35px rgba(255, 215, 0, 0.4), 0 24px 64px rgba(0, 0, 0, 0.85);
        }
        100% {
            box-shadow: 0 0 65px rgba(255, 215, 0, 0.85), 0 24px 64px rgba(0, 0, 0, 0.85);
        }
    }

    .dice-part {
        font-size: 4.2rem;
        font-weight: 800;
        color: #f1f5f9;
        letter-spacing: -0.02em;
    }

    .operator {
        font-size: 3.8rem;
        font-weight: 700;
        color: #cbd5e1;
        padding: 0 0.2rem;
    }

    .modifier-part {
        font-size: 4.2rem;
        font-weight: 800;
        color: #f1f5f9;
    }

    .equals {
        font-size: 4.2rem;
        font-weight: 800;
        color: #cbd5e1;
        padding: 0 0.25rem;
    }

    .grand-total {
        font-size: 5.4rem;
        font-weight: 900;
        color: #ffd700;
        text-shadow: 0 0 28px rgba(255, 215, 0, 0.75), 0 4px 8px rgba(0, 0, 0, 0.85);
        padding-left: 0.2rem;

        &.fumble {
            color: #ef4444;
            text-shadow: 0 0 28px rgba(239, 68, 68, 0.75), 0 4px 8px rgba(0, 0, 0, 0.85);
        }

        &.solo {
            font-size: 6.0rem;
        }
    }

    .crit-banner {
        font-size: 1.4rem;
        font-weight: 900;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: #ffd700;
        text-shadow: 0 0 16px rgba(255, 215, 0, 0.85);
        margin-bottom: 0.5rem;
    }

    .fumble-banner {
        font-size: 1.4rem;
        font-weight: 900;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: #ef4444;
        text-shadow: 0 0 16px rgba(239, 68, 68, 0.85);
        margin-bottom: 0.5rem;
    }

    .advantage-banner {
        font-size: 1.4rem;
        font-weight: 900;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: #38bdf8;
        text-shadow: 0 0 16px rgba(56, 189, 248, 0.8);
        margin-bottom: 0.5rem;
    }

    .disadvantage-banner {
        font-size: 1.4rem;
        font-weight: 900;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: #fb923c;
        text-shadow: 0 0 16px rgba(251, 146, 60, 0.8);
        margin-bottom: 0.5rem;
    }
</style>

<div
    class="gather-overlay"
    style={`--theme-glow: ${theme?.accentColor || '#ffd700'};`}
>
    <!-- Transparent Floating Numerals with Sinuous Flight (multi-dice only) -->
    {#if !isSingleDie && breakdown && animatedDice.length > 0}
        {#each breakdown.dice as die, i}
            {@const anim = animatedDice[i]}
            {#if anim && anim.opacity > 0.01}
                {@const isCrit = die.sides === 20 && die.result === 20 && !die.dropped}
                {@const isFumble = die.sides === 20 && die.result === 1 && !die.dropped}
                <div
                    class="die-numeral"
                    class:crit={isCrit}
                    class:fumble={isFumble}
                    class:dropped={die.dropped}
                    style={`
                        left: ${anim.x}px;
                        top: ${anim.y}px;
                        opacity: ${anim.opacity};
                        transform: translate(-50%, -50%) scale(${anim.scale});
                    `}
                >
                    {die.result}
                </div>
            {/if}
        {/each}
    {/if}

    <!-- Combined Central Result Reveal with Blurred Transparent Black Backdrop -->
    {#if isCombined && breakdown}
        <div class="combined-result-container">
            {#if breakdown.isCritical}
                <div class="crit-banner">Critical Hit</div>
            {:else if breakdown.isFumble}
                <div class="fumble-banner">Critical Miss</div>
            {:else if breakdown.kind === 'ADVANTAGE'}
                <div class="advantage-banner">Advantage</div>
            {:else if breakdown.kind === 'DISADVANTAGE'}
                <div class="disadvantage-banner">Disadvantage</div>
            {/if}

            <div
                class="equation-card"
                class:crit={breakdown.isCritical}
                class:fumble={breakdown.isFumble}
            >
                {#if hasModifier}
                    <!-- Case: Dice Subtotal + Modifier = Total (e.g. 10 + 2 = 12 or 14 + 3 = 17) -->
                    <span class="dice-part">{breakdown.diceSubtotal}</span>
                    <span class="operator">{breakdown.modifier >= 0 ? '+' : '−'}</span>
                    <span class="modifier-part">{Math.abs(breakdown.modifier)}</span>
                    <span class="equals">=</span>
                    <span class="grand-total" class:fumble={breakdown.isFumble}>{breakdown.total}</span>
                {:else if breakdown.kind === 'NORMAL' && isMultiDice}
                    <!-- Case: Multi-dice sum (e.g. 3 + 3 + 4 = 10) -->
                    {#if breakdown.dice.length <= 4}
                        <span class="dice-part">{breakdown.dice.filter(d => !d.dropped).map(d => d.result).join(' + ')}</span>
                        <span class="equals">=</span>
                    {/if}
                    <span class="grand-total" class:fumble={breakdown.isFumble}>{breakdown.total}</span>
                {:else}
                    <!-- Case: Advantage/Disadvantage without modifier, or solo kept die -->
                    <span class="grand-total solo" class:fumble={breakdown.isFumble}>{breakdown.total}</span>
                {/if}
            </div>
        </div>
    {/if}
</div>
