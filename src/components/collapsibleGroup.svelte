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
</style>

<div class="collapsible-group">
    {#each dataSet as single}
           <div class="eachCurriculum" on:click={() => {closeOthers(`${single.name}`);}}>
                <Collapsible heading={single.name} details={single.details} bind:show={single.show}/>
            </div>
        {/each}
</div>