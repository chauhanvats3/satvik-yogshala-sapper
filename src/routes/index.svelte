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


		background: rgb(255, 255, 255);
		background: -moz-linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(253, 254, 254, 0.5214460784313726) 69%, rgba(194, 248, 255, 0.5326505602240896) 78%, rgba(160, 240, 255, 0.6867121848739496) 92%, rgba(104, 222, 246, 0.6222864145658263) 100%);
		background: -webkit-linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(253, 254, 254, 0.5214460784313726) 69%, rgba(194, 248, 255, 0.5326505602240896) 78%, rgba(160, 240, 255, 0.6867121848739496) 92%, rgba(104, 222, 246, 0.6222864145658263) 100%);
		background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(253, 254, 254, 0.5214460784313726) 69%, rgba(194, 248, 255, 0.5326505602240896) 78%, rgba(160, 240, 255, 0.6867121848739496) 92%, rgba(104, 222, 246, 0.6222864145658263) 100%);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff", endColorstr="#68def6", GradientType=1);


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