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

    i {
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

        .content-wrapper {
            justify-content: flex-start;
        }

        .content {
            width: 100%;
        }
    }
</style>

<div class="wrapper">
    <div class="heading">
        <h1 class="indie-flower">Excluded</h1>
        <hr />
    </div>
    <div class="content-wrapper">
        <div class="blankspace"></div>
        <div class="content">
            {#each dataSet as excl}
            <div class="excluded">
                <i class="far fa-times-circle"></i>                <p>{excl}</p>
           </div>
           {/each} 
       </div>
   </div>

</div>