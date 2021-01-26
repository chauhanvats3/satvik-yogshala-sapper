<script>
	import Metadata from '../components/metadata.svelte';
	import Description from '../components/home/description.svelte';
	import Programs from '../components/home/our_programs.svelte';
	import Facilities from '../components/home/facilities.svelte';
	import Showcase from '../components/home/showcase.svelte';
	import Teachers from '../components/home/teachers.svelte';
	import { onMount } from 'svelte';

	const metadata = {
		title: "Home - Satvik Yogshala",
		description: "Satvik Yogshala, in collaboration with Yoga Alliance USA, is located at the Yoga Capital of the world, Rishikesh. Spirituality is key to your yoga practice. With our clear vision, we have uniquely designed our courses to provide you with exceptional guidance so you can attain your goals.",
		keywords: "yoga teacher training india, yoga teacher training, yoga teacher training in india, yoga school in india, satvik yogashala, yoga teaching training india, yoga alliance teacher training india, yoga teachers training india, best yoga school in india, india yoga training, best yoga teacher training india, yoga teacher training course in india, yoga school in rishikesh, yoga training in india, yoga certification india, yoga courses india, best yoga training in rishikesh",
		thumb: "https://satvikyogshala.com/logo/logo_with_name.png"
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
		border-bottom: 2px solid #ffd000;
	}

	.btn-overlay {
		height: 150%;
		width: 100%;
		position: absolute;
		top: 0;
		background: #ffd0009c;
		transition: all 0.2s;
	}

	button:hover .btn-overlay {
		top: 100%;
		border-bottom: none;
		border-radius: 5px;
	}

	@media (max-width: 850px) {
		.hero-wrapper {
			margin-top: 57px;
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

<Metadata {metadata} />

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