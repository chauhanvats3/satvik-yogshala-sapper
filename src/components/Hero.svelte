<script>
    import { onMount } from 'svelte';

    export let img;
    export let top = "0%";

    let hero;
    let heroWrapper;
    let heroHeight = 0;

    function setHeroHeight() {

        setTimeout(() => {
            heroHeight = hero.offsetHeight;
            if (heroHeight == 0) {
                setTimeout(setHeroHeight(), 1000);
            }
            else {
                var subHeight = (20 / 100) * heroHeight;
                var heroWrapperHeight = heroHeight - subHeight;
                heroWrapper.style.height = heroWrapperHeight + "px";
                heroWrapper.style.maxHeight = "100vh";
                hero.style.setProperty("top", top);
            }
        }, 500);
    }
    onMount(() => {
        setHeroHeight();
    });
</script>

<style>
    .hero-wrapper {
        height: 89vh;
        width: 100%;
        position: relative;
        overflow: hidden;
    }

    .hero {
        position: absolute;
        overflow: hidden;
        width: 100%;
    }

    img {
        width: 100%;
    }

    @media (max-width: 850px) {

        .hero-wrapper {
            margin-top: 50px;
        }
    }
</style>

<div class="hero-wrapper" bind:this={heroWrapper} style="--hero-height:{heroHeight + 'px'};">
    <div class="hero" bind:this={hero}>
        <img src={img} alt="Someone doing yoga">
    </div>
</div>