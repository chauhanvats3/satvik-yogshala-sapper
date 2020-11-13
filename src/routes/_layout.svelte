<script>
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte'
	import { fade } from "svelte/transition"
	import { stores } from "@sapper/app"
	import PageLoadingBar from "sapper-page-loading-bar/PageLoadingBar.svelte"
	const { preloading } = stores()
	export let segment;
</script>

<style>
	main {
		width: 100%;
		margin-top: 115px;
	}
</style>



<Header {segment} />
<PageLoadingBar {preloading} />
{#if !$preloading}
<main transition:fade>
	<slot></slot>
</main>
{/if}
<Footer />