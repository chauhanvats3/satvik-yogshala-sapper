<script>
    export let dataSet;
</script>

<style>
    .wrapper {
        flex-flow: column nowrap;
    }

    .content {
        width: 100%;

    }

    .included {
        width: 50%;
        justify-content: flex-start;
    }

    .included>* {
        margin: 5px;
    }

    p {
        width: 80%;
        justify-content: flex-start;
    }

    ion-icon {
        color: green;
    }

    @media (max-width: 700px) {
        .included>* {
            margin: 1px;
        }

        .included {
            width: 100%;
            margin: 5px;
        }
    }
</style>

<div class="wrapper">
    <div class="heading">
        <h1 class="indie-flower">Included</h1>
        <hr />
    </div>
    <div class="content">
        {#each dataSet as incl}
        <div class="included">
            <ion-icon name="checkmark-outline"></ion-icon> 
            <p>{incl}</p>
        </div>
        {/each}
   </div>          

</div>