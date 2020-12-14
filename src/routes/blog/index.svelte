<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import BlogCard from '../../components/blog_card_new.svelte';
	import Breadcrumb from '../../components/breadcrumb.svelte';
	export let posts;
	const path = [
		{ name: "Blog", href: "blog" }
	]
</script>

<style>
	.wrapper {
		width: 100%;
		margin-top: 80px;
		flex-flow: column wrap;
	}
</style>

<svelte:head>
	<title>Blog - Satvik Yogshala</title>
</svelte:head>
<div class="wrapper">
	<Breadcrumb {path} />
	<h1 class="indie-flower">Blog by Preetam</h1>

	{#each posts as post}
	<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
	<!-- 			<li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>

 -->
	<BlogCard title={post.title} date={post.date} desc={post.desc} img={post.image} link="blog/{post.slug}" />
	{/each}
</div>