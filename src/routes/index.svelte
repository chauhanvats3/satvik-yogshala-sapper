<script>
	import Description from '../components/index/description.svelte';
	import Programs from '../components/index/our_programs.svelte';
	import Facilities from '../components/index/facilities.svelte';
	import Showcase from '../components/index/showcase.svelte';
	import Teachers from '../components/index/teachers.svelte';
</script>

<style>
	.hero {
		max-height: 84.3vh;
		overflow: hidden;



	}

	.index,
	.hero {
		width: 100%;
	}

	.hero>img {
		z-index: -1;
		min-width: 100%;
		object-fit: cover;
	}
</style>

<svelte:head>
	<title>Satvik Yogshala - Home</title>
</svelte:head>
<div class="index">
	<div class="hero">
		<img src="images/yoga4.jpg" alt="Someone doing yoga">
	</div>
	<Description />
	<Programs />
	<Facilities />
	<Showcase />
	<Teachers />
</div>