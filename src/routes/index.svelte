<script>
	import Description from '../components/index/description.svelte';
	import Programs from '../components/index/our_programs.svelte';
	import Facilities from '../components/index/facilities.svelte';
	import Showcase from '../components/index/showcase.svelte';
	import Teachers from '../components/teachers.svelte';
</script>

<style>
	.hero {
		max-height: 84.3vh;
		overflow: hidden;


		background: #606c8896;
		/* fallback for old browsers */
		background: -webkit-linear-gradient(to bottom, #3f4c6b96, #606c8896);
		/* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to bottom, #3f4c6b96, #606c8896);


	}

	.index,
	.hero {
		width: 100%;
	}

	.hero>img {
		z-index: -1;
		min-width: 100%;
	}
</style>

<svelte:head>
	<title>Satvik Yogshala - Home</title>
</svelte:head>
<div class="index">
	<div class="hero">
		<img src="images/yoga2.jpg" alt="">
	</div>
	<Description />
	<Programs />
	<Facilities />
	<Showcase />
	<Teachers />
</div>