<script>
	import Description from '../components/index/description.svelte';
	import Programs from '../components/index/our_programs.svelte';
	import Facilities from '../components/index/facilities.svelte';
	import Showcase from '../components/index/showcase.svelte';
	import Teachers from '../components/index/teachers.svelte';
</script>

<style>
	.index {
		width: 100%;
	}

	.hero-wrapper {
		height: 89vh;
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	.hero {
		position: absolute;
		top: -10;
		overflow: hidden;
		width: 100%;
	}
</style>

<svelte:head>
	<title>Satvik Yogshala - Home</title>
</svelte:head>
<div class="index">
	<div class="hero-wrapper">
		<div class="hero">
			<img src="images/yoga11.jpg" alt="Someone doing yoga">
		</div>
	</div>
	<Description />
	<Programs />
	<Facilities />
	<Showcase />
	<Teachers />
</div>