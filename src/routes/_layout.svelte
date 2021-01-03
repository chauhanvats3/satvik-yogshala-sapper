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
	}
</style>

<svelte:head>
	<script src="https://kit.fontawesome.com/578eab09d0.js" crossorigin="anonymous" async></script>
	<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
		rel="stylesheet">
</svelte:head>


<Header {segment} />
<PageLoadingBar {preloading} color1="#202020" color2="#ffd100" />
{#if !$preloading}
<main transition:fade>
	<slot></slot>
</main>
{/if}
<Footer />