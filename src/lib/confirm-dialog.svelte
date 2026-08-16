<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { fade, scale } from "svelte/transition";

    export let open = false;
    export let title: string | null = null;
    export let message: string;
    export let confirmLabel = "Confirm";
    export let cancelLabel = "Cancel";
    export let danger = false;

    const dispatch = createEventDispatcher<{
        confirm: void;
        cancel: void;
    }>();

    function handleConfirm() {
        open = false;
        dispatch("confirm");
    }

    function handleCancel() {
        open = false;
        dispatch("cancel");
    }

    function handleKeydown(e: KeyboardEvent) {
        if (!open) return;
        if (e.key === "Escape") {
            e.preventDefault();
            e.stopPropagation();
            handleCancel();
        } else if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            handleConfirm();
        }
    }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if open}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div
        class="dialog-backdrop"
        transition:fade={{ duration: 150 }}
        on:click|self={handleCancel}
        role="dialog"
        aria-modal="true"
        aria-label={title || message}
    >
        <div class="dialog-card" transition:scale={{ start: 0.92, duration: 150 }}>
            {#if title}
                <div class="dialog-title">{title}</div>
            {/if}
            <div class="dialog-message">{message}</div>
            <div class="dialog-actions">
                <button
                    type="button"
                    class="btn-cancel"
                    on:click={handleCancel}
                >
                    {cancelLabel}
                </button>
                <button
                    type="button"
                    class="btn-confirm"
                    class:danger
                    on:click={handleConfirm}
                >
                    {confirmLabel}
                </button>
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
    .dialog-backdrop {
        position: fixed;
        inset: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5em;
        background-color: rgba(0, 0, 0, 0.65);
        backdrop-filter: blur(3px);
    }

    .dialog-card {
        background: var(--theme-bg, #222);
        color: var(--theme-text-color, #eee);
        border: 1px solid color-mix(in hsl, var(--theme-text-color, #fff), transparent 82%);
        border-radius: 0.75em;
        padding: 1.25em;
        max-width: 320px;
        width: 100%;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
        display: flex;
        flex-direction: column;
        gap: 0.85em;

        .dialog-title {
            font-size: 1.1em;
            font-weight: 700;
            line-height: 1.2;
            color: var(--theme-text-color, #fff);
        }

        .dialog-message {
            font-size: 0.95em;
            line-height: 1.4;
            color: color-mix(in hsl, var(--theme-text-color, #fff), transparent 25%);
        }

        .dialog-actions {
            display: flex;
            justify-content: flex-end;
            gap: 0.75em;
            margin-top: 0.4em;

            button {
                padding: 0.45em 1.0em;
                border-radius: 0.5em;
                font-size: 0.9em;
                font-weight: 600;
                cursor: pointer;
                border: none;
                transition: transform 0.1s ease, filter 0.15s ease, background-color 0.15s ease;

                &:hover {
                    filter: brightness(1.15);
                }

                &:active {
                    transform: scale(0.96);
                }
            }

            .btn-cancel {
                background: color-mix(in hsl, var(--theme-text-color, #fff), transparent 88%);
                color: var(--theme-text-color, #eee);

                &:hover {
                    background: color-mix(in hsl, var(--theme-text-color, #fff), transparent 80%);
                }
            }

            .btn-confirm {
                background: var(--theme-primary-color, #3f51b5);
                color: #fff;

                &.danger {
                    background: #d32f2f;
                    color: #fff;
                }
            }
        }
    }
</style>
