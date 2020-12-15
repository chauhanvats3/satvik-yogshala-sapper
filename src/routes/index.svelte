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

	.hero-content {
		position: absolute;
		left: auto;
		right: 5%;
		bottom: auto;
		flex-direction: column;
		width: 40%;
	}

	.hero-content h1 {
		font-size: 2.5rem;
		text-align: center;
		margin: 5px;
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
		height: 100%;
		width: 100%;
		position: absolute;
		top: 100%;
		background: rgba(0, 153, 153, 0.534);
		transition: all 0.2s;
	}

	button:hover .btn-overlay {
		top: 0;
		border-bottom: none;
		border-radius: 5px;
	}

	@media (max-width: 850px) {
		.hero-wrapper {
			margin-top: 50px;
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
	<title>Home - Satvik Yogshala</title>
</svelte:head>
<div class="index">
	<div class="hero-wrapper" bind:this={heroWrapper} style="--hero-height:{heroHeight + 'px'};">
		<div class="hero" bind:this={hero}>
			<img src="images/yoga11.jpg" alt="Someone doing yoga">
			<div class="hero-content">
				<div class="content">
					<h1>
						Learn From the Best Yogis in Rishikesh
					</h1>
				</div>
				<div class="btn-wrapper">
					<button class="btn btn-glass"><a href="contact"
							style="text-decoration: none; margin: 0 3px; z-index: 10;">Apply
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