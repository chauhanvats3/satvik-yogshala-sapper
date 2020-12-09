<script>
	import Description from '../components/home/description.svelte';
	import Programs from '../components/home/our_programs.svelte';
	import Facilities from '../components/home/facilities.svelte';
	import Showcase from '../components/home/showcase.svelte';
	import Teachers from '../components/home/teachers.svelte';
	import { onMount } from 'svelte';

	let hero;
	let heroWrapper;
	let heroHeight = 0;
	onMount(() => {
		setTimeout(() => {
			heroHeight = hero.offsetHeight;
			console.log(heroHeight);
			var subHeight = (20 / 100) * heroHeight;
			var heroWrapperHeight = heroHeight - subHeight;
			heroWrapper.style.height = heroWrapperHeight + "px";
			heroWrapper.style.maxHeight = "100vh";
		}, 500);
	});
</script>

<style>
	.index {
		width: 100%;
	}

	.hero-wrapper {
		width: 100%;
		position: relative;
		overflow: hidden;
		margin-bottom: 20px;
	}

	.hero {
		position: absolute;
		top: -20%;
		overflow: hidden;
		width: 100%;
	}

	@media (max-width: 750px) {
		.hero-wrapper {
			margin-top: 50px;
		}
	}
</style>

<svelte:head>
	<title>Home - Satvik Yogshala</title>
</svelte:head>
<div class="index">
	<div class="hero-wrapper" bind:this={heroWrapper} style="--hero-height:{heroHeight + 'px'};">
		<div class="hero" bind:this={hero}>
			<img src="images/yoga11.jpg" alt="Someone doing yoga">
		</div>
	</div>
	<Description />
	<Programs />
	<Facilities />
	<Showcase />
	<Teachers />
</div>