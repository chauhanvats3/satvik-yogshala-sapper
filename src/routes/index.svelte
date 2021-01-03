<script>
	import Description from '../components/home/description.svelte';
	import Programs from '../components/home/our_programs.svelte';
	import Facilities from '../components/home/facilities.svelte';
	import Showcase from '../components/home/showcase.svelte';
	import Teachers from '../components/home/teachers.svelte';
	import { onMount } from 'svelte';

	const metadata = {
		title: "Home - Satvik Yogshala",
		description: "Satvik Yogshala is the best beginner friendly yoga school in Rishikesh where we keep students minimum so we can teach them all thoroughly",
		keywords: "yoga.rishikesh,beginner,ttc,teacher,ashtanga",
		thumb: ""
	};

	let hero;
	let heroWrapper;
	let heroHeight = 0;

	function setHeroHeight() {

		setTimeout(() => {
			heroHeight = hero.offsetHeight;
			console.log(heroHeight);
			if (heroHeight == 0) {
				setTimeout(setHeroHeight(), 1000);
			}
			else {
				var subHeight = (20 / 100) * heroHeight;
				var heroWrapperHeight = heroHeight - subHeight;
				heroWrapper.style.height = heroWrapperHeight + "px";
				heroWrapper.style.maxHeight = "100vh";
			}
		}, 500);
	}

	onMount(() => {
		setHeroHeight();
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
		top: auto;
		overflow: hidden;
		width: 100%;
	}

	img {
		width: 100%;
	}

	.hero-content {

		flex-direction: column;
		width: 100%;
		position: absolute;
		top: 60%;
	}

	.content {
		width: 100%;
	}

	.hero-content h1 {
		width: 100%;
		font-size: 2.5rem;
		text-align: center;
		margin: 5px;
		color: rgba(0, 0, 0, 0.74);
		background: rgba(255, 255, 255, 0.342);
		text-shadow: 0 0 1px rgba(0, 0, 0, 0.432);
	}

	.btn-wrapper {
		height: 6vh;
	}

	.btn-glass {
		background: rgba(255, 255, 255, 0.26);
	}

	button {
		height: 100%;
		position: relative;
		overflow: hidden;
		border-radius: 5px;
		border: none;
		border-bottom: 2px solid rgb(0, 153, 153);
	}

	.btn-overlay {
		height: 150%;
		width: 100%;
		position: absolute;
		top: 0;
		background: rgba(0, 153, 153, 0.534);
		transition: all 0.2s;
	}

	button:hover .btn-overlay {
		top: 100%;
		border-bottom: none;
		border-radius: 5px;
	}

	@media (max-width: 850px) {
		.hero-wrapper {
			margin-top: 70px;
		}
	}

	@media(max-width: 500px) {
		.hero-content h1 {
			font-size: 1rem;
			text-align: center;
			margin: 5px;
		}

		.btn-wrapper {
			height: 4vh;
		}

		.btn>a {
			font-size: small;
		}
	}

	@supports (backdrop-filter: blur()) or (-webkit-backdrop-filter: blur()) {

		.btn-glass {
			background: rgba(255, 255, 255, 0.13);
			backdrop-filter: blur(2.5px);
			-webkit-backdrop-filter: blur(2.5px);

		}


	}
</style>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name="description" content="{metadata.description}" />
	<meta name="keywords" content="{metadata.keywords}" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://satvikyogshala.com/">
	<meta property="og:title" content="{metadata.title}">
	<meta property="og:description" content="{metadata.description}">
	{#if metadata.thumb}
	<meta property="og:image" content="{metadata.thumb}">
	{/if}

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://satvikyogshala.com/">
	<meta property="twitter:title" content="{metadata.title}">
	<meta property="twitter:description" content="{metadata.description}">
	{#if metadata.thumb}
	<meta property="twitter:image" content="{metadata.thumb}">
	{/if}
</svelte:head>

<div class="index">
	<div id="hero" class="hero-wrapper" bind:this={heroWrapper} style="--hero-height:{heroHeight + 'px'};">
		<div class="hero" bind:this={hero}>
			<img src="images/nik_teaching_1.jpg" alt="Someone doing yoga">
			<div class="hero-content">
				<div class="content">
					<h1>
						Learn From the Best Yogis in Rishikesh
					</h1>
				</div>
				<div class="btn-wrapper">
					<button class="btn btn-glass"><a href="contact"
							style="text-decoration: none; margin: 0 3px; z-index: 10;">Enquire
							Now</a>

						<div class="btn-overlay">

						</div>
					</button>

				</div>
			</div>
		</div>
	</div>
	<Description />
	<Programs />
	<Facilities />
	<Showcase />
	<Teachers />
</div>