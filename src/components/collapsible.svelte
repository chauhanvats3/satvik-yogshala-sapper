<script>
    export let heading;
    export let details;
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
    }

    .collapsible:hover,
    .collapsible:active,
    .collapsible:focus,
    .show {
        background: rgba(123, 204, 193, 0.274);
    }

    .topic {
        justify-content: space-between;
        cursor: pointer;
        width: 100%;
        margin: 5px 10px;
    }



    .details {
        width: 90%;
        flex-flow: column wrap;
    }

    .each_detail {
        width: 100%;
        justify-content: flex-start;
    }

    .dots {
        height: 8px;
        width: 8px;
    }

    ion-icon {
        z-index: -100;
        margin: 0 5px;
        color: rgb(66, 66, 66);
    }
</style>

<div class="collapsible" class:show>
    <div class="topic" on:click={toggleHeading}>
        <p>{heading}</p>
        <p>
            {#if show} <ion-icon name="remove-sharp"></ion-icon>
            {:else}<ion-icon name="add-sharp"></ion-icon>{/if}
        </p>
    </div>
    {#if show}
    <div class="details" transition:slide|local="{{ duration: 150,easing:linear}}">
        {#each details as detail}
        <div class="each_detail">
          
           
                <ion-icon name="radio-button-on" class="dots"></ion-icon>
            
            <div>
                {detail} 
            </div>
         
        </div>
        {/each}
    </div>
    {/if}
</div>