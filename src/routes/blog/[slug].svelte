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
	export let post;
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
	}

	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
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
			{post.date}
		</div>
		<div class="share">
			<div class="sharethis-inline-share-buttons"></div>
		</div>
	</div>
	<h1>{post.title}</h1>

	<div class="content">
		{@html post.html}
	</div>
</div>