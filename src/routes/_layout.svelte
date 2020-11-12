<script>
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte'

	export let segment;
</script>

<style>
	main {
		width: 100%;
		margin-top: 115px;
	}
</style>

<Header {segment} />

<main>
	<slot></slot>
</main>

<Footer />