<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { Email, Vk, WhatsApp, Xing, Facebook, Twitter } from 'svelte-share-buttons-component';
	import Breadcrumb from '../../components/breadcrumb.svelte';

	export let post;
	const url = 'https://satvik-yogshala.netlify.app/blog/' + post.slug;
	const title = post.title;
	const desc = post.desc;
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
			heroWrapper.style.maxHeight = "80vh";
		}, 500);
	});

	const path = [
		{ name: "Blog", href: "blog" },
		{ name: `${post.title}`, href: `blog/${post.slug}` }
	]
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/

	.wrapper {
		flex-flow: column wrap;
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


	.hero>img {
		width: 100%;
	}

	.blog-banner {
		width: 100%;
		justify-content: space-around;
		margin: 10px 0;
	}

	.blog-banner>div {
		margin: 5px 10px;
	}

	.share>:global(a) {
		margin: 5px 5px;
	}

	.info {
		background-color: rgb(84, 95, 91);
		padding: 0 20px 0 10px;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		color: #f9f9f9;
	}

	.heading {
		margin: 10px 0;
		width: 100%;
	}


	.content {
		width: 75%;
	}

	.content :global(p) {
		margin: 10px 10px;
		line-height: 2em;
		font-size: large;
	}

	@media (max-width: 400px) {

		.heading {
			font-size: medium;
		}

		.content :global(p) {
			margin: 5px 5px;
			line-height: 1.8em;
			font-size: medium;
		}
	}
</style>

<svelte:head>
	<title>{post.title} - Satvik Yogshala</title>

</svelte:head>
<div class="wrapper">
	<div class="hero-wrapper" bind:this={heroWrapper} style="--hero-height:{heroHeight + 'px'};">
		<div class="hero" bind:this={hero}>
			<img src="{post.image}" alt="Someone doing yoga">
		</div>
	</div>

	<div class="blog-banner">
		<div class="info">
			Posted On : {post.date}
		</div>
		<Breadcrumb {path} />
		<div class="share">
			<Facebook class="share-button" {url} />
			<Twitter class="share-button" text="{title}" {url} />
			<WhatsApp class="share-button" text="{title} {url}" />
			<Xing class="share-button" {title} {url} />
			<Vk class="share-button" {title} {url} />
			<Email subject="{title}" body="{desc} {url}" />

		</div>
	</div>
	<h1 class="heading">{post.title}</h1>

	<div class="content">
		{@html post.html}
	</div>
</div>