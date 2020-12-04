<script>
    export let heading;
    export let details;
    export let show = false;


    function toggleHeading() {
        show = !show;
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
    }
</style>

<div class="collapsible">
    <div class="topic" on:click={toggleHeading}>
        <p>{heading}</p>
        <p>
            {#if show} <ion-icon name="remove-sharp"></ion-icon>
            {:else}<ion-icon name="add-sharp"></ion-icon>{/if}
        </p>
    </div>
    {#if show}
    <div class="details" >
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