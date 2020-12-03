<script>
    import Collapsible from '../components/collapsible.svelte';
    export let dataSet;

    let closeOthers = (name) => {
        dataSet.forEach((eachCurriculum) => {
            if (eachCurriculum.name !== "name") {
                eachCurriculum.show = false;
            }
        });
    }
</script>

<style>
    .collapsible-group {
        display: block;
        width: 100%;
    }

    .each-curriculum {
        margin: 5px 0;
    }
</style>

<div class="collapsible-group">
    {#each dataSet as single}
           <div class="each-curriculum" on:click={() => {closeOthers(`${single.name}`);}}>
                <Collapsible heading={single.name} details={single.details} bind:show={single.show}/>
            </div>
        {/each}
</div>