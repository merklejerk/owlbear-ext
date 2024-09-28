<script lang="ts">
    export let value: string | number;
    export let animated = true;
    export let idx = 0;
</script>

<style lang="scss">
    .component {
        --idx: 0;
        --speed: 0.5s;

        position: relative;
        
        .shadow {
            opacity: 0;
            // margin: 0.15ex 0.3ex;
        }

        .effect {
            // display: inline-block;
            // text-align: center;
            // vertical-align: middle;
            // padding: 0 0 0.5ex 0.125ex;
            overflow: visible;
            position: absolute;
            inset: 0;
            transform-origin: center;
            // border-radius: 0.15em;
            // border: 1px solid var(--theme-text-color);
            // background: color-mix(in hsl, var(--theme-text-color), transparent 75%);
        }
        
        .effect.animated {
            opacity: 0;
            animation: var(--speed) forwards 1 ease-out calc(var(--idx) * var(--speed)) appear;

            @keyframes appear {
                0% {
                    transform: translate(0, 1em) rotate(1080deg);
                    opacity: 0;
                }
                100% {
                    transform: translate(0, 0) rotate(0);
                    opacity: 1;
                }
            }
        }
    }

</style>

<span class="component" style={`--idx: ${idx}`}><!--
    --><span class="shadow">{value}</span><!--
    --><span class="effect" class:animated={animated}>{value}</span><!--
--></span>