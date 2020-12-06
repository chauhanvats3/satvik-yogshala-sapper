<script>
    export let dataSet;
</script>

<style>
    .wrapper {
        flex-flow: column nowrap;
        justify-content: flex-end;
    }

    .blankspace {
        width: 20%;
        height: 100%;
    }

    .content {
        width: 60%;
    }

    .excluded {
        width: 100%;
        justify-content: flex-start;
    }

    .excluded>* {
        margin: 5px;
    }

    p {
        justify-content: flex-start;
    }

    ion-icon {
        color: red;
    }

    @media (max-width: 700px) {
        .blankspace {
            width: 0px;
            height: 0px;
        }

        .excluded>* {
            margin: 1px;
        }

        .excluded {
            width: 100%;
            margin: 5px;
        }
    }
</style>

<div class="wrapper">
    <div class="heading">
        <h1>Excluded</h1>
        <hr />
    </div>
    <div class="content-wrapper">
        <div class="blankspace"></div>
        <div class="content">
            {#each dataSet as excl}
            <div class="excluded">
                <ion-icon name="close-outline"></ion-icon>
                <p>{excl}</p>
           </div>
           {/each} 
       </div>
   </div>

</div>