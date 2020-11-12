<script>
    export let headers;
    export let data_set;
</script>

<style>
    .table {
        width: 100%;
        flex-flow: column wrap;
    }

    .td {
        width: 20vw;
    }
</style>

<div class="table">
    <div class="header">
        {#each headers as header}
            <div class="td">{header}</div>
        {/each}
    </div>
    {#each data_set as data_arr,i}
        <div>
            {#each data_arr as data}
                <div class="td">
                    {data}
                </div>            
            {/each}
        </div>
    {/each}
</div>