<script>
    export let headers;
    export let data_set;
</script>

<style>
    .table_wrapper {
        width: 100%;
        position: relative;
        height: 500px;
        overflow: auto;
    }

    .table {
        flex-flow: column wrap;
        position: absolute;
        top: 0;
        width: fit-content;
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
        border-radius: 5px;
        color: white;
        font-weight: bold;
    }

    .row>.td {
        border-bottom: 1px solid rgb(48, 48, 48);
    }

    .row:last-child>.td {
        border-bottom: none;
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