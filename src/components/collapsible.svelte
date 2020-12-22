<script>
    export let heading;
    export let desc;
    export let details;
    export let expand;
    export let show = false;


    import { fade, fly, slide } from 'svelte/transition';
    import { quintInOut, quintOut, linear } from 'svelte/easing';

    function toggleHeading() {

        show = !show;
    }

</script>

<style>
    .collapsible {
        width: 100%;
        border-radius: 5px;
        border-bottom: 1px solid rgba(51, 160, 145, 0.651);
        transition: all 0.3s;
    }

    .show {
        border: 1px solid rgba(51, 160, 145, 0.651);
    }

    .collapsible:hover,
    .collapsible:active,
    .collapsible:focus,
    .show {
        background: rgba(123, 204, 193, 0.185);
    }



    .topic {
        justify-content: space-between;
        cursor: pointer;
        width: 100%;
        margin: 5px 10px;
    }

    .desc {
        margin: 2px 10px;
        text-align: justify;
    }

    .dots {
        font-size: 8px;
        margin: 1px 5px;
        color: teal;
    }

    .details {
        width: 90%;
        flex-flow: row wrap;
        justify-content: space-between;
    }

    .each_detail {
        justify-content: flex-start;
        margin: 5px 2px;
        min-width: 70%;
    }
</style>

<div class="collapsible" class:show>
    <div class="topic" on:click={toggleHeading}>
        <h3 style="font-weight: 600;">{heading}</h3>
        {#if !expand}
        <p>
            {#if show} <i class="far fa-minus-square"></i>
            {:else} <i class="far fa-plus-square"></i>
            {/if}
        </p>
        {/if}
    </div>
    {#if show}
    {#if desc}
    <div class="desc">{desc}</div>
    {/if}
    <div class="details" transition:slide|local="{{ duration: 200,easing:linear}}">
        {#each details as detail}
        <div class="each_detail">
            <i class="fas fa-circle-notch dots"></i>
            <div>
                {detail}
            </div>

        </div>
        {/each}
    </div>
    {/if}
</div>