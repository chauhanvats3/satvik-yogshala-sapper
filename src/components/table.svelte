<script>
    export let headers;
    export let data_set;
</script>

<style>
    .table_wrapper {
        width: 100%;
        position: relative;
        height: 380px;
        overflow: auto;
    }

    .table {
        width: 100%;
        flex-flow: column wrap;
        position: absolute;
        top: 0;
        left: 0;
    }

    .table>div {
        flex-wrap: nowrap;
    }

    .td {
        margin: 5px 0px;
        text-align: center;
        padding: 5px;
        width: 300px;
    }

    .header {
        background-color: rgba(71, 68, 68, 0.747);
        padding: 5px;
        color: white;
        font-weight: bold;
    }

    .row>.td {
        border-bottom: 1px solid rgb(48, 48, 48);
    }

    .row:last-child>.td {
        border-bottom: none;
    }

    @media (max-width: 700px) {
        .td {
            width: 150px;
            font-size: small;
            height: 70px;
        }

        .table_wrapper {
            height: 450px;
        }
    }
</style>

<div class="table_wrapper">
    <div class="table">
        <div class="header">
            {#each headers as header}
                <div class="td">{header}</div>
            {/each}
        </div>
        {#each data_set as data_arr,i}
            <div class="row">
                {#each data_arr as data}
                    <div class="td">
                        {data}
                    </div>            
                {/each}
            </div>
        {/each}
    </div>
</div>