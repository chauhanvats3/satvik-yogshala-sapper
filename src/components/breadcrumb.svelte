<script>
    export let path;
    let pathWhole = [{ name: 'Home', href: '.' }, ...path]
    var totalNodes = pathWhole.length - 1;
</script>

<style>
    .breadcrumb {
        margin: 10px;
    }

    a {
        margin: 0 5px;
    }
</style>

<div class="breadcrumb">
    <p>
        {#each pathWhole as node,i}
            <a href="{node.href}">{node.name}</a>{#if i<totalNodes} / {/if}
        {/each}
    </p>
</div>