<script>
    export let heading;
    export let details;
    let isHeadingOpened = false;


    function toggleHeading() {
        isHeadingOpened = !isHeadingOpened;
    }

</script>

<style>
    .collapsible {
        width: 100%;
    }

    .topic {
        justify-content: space-between;
        cursor: pointer;
        width: 100%;
    }

    .details {
        width: 100%;
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
    }
</style>

<div class="collapsible">
    <div class="topic" on:click={toggleHeading}>
        <p>{heading}</p>
        <p>
            {#if isHeadingOpened} <ion-icon name="add-sharp"></ion-icon>
            {:else}<ion-icon name="remove-sharp"></ion-icon>{/if}
        </p>
    </div>
    {#if isHeadingOpened}
    <div class="details" >
        {#each details as detail}
        <div class="each_detail">
          
            <div>
                <ion-icon name="radio-button-on" class="dots"></ion-icon>
            </div>
            <div>
                {detail}
            </div>
         
        </div>
        {/each}
    </div>
    {/if}
</div>