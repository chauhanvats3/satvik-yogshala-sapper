<script>
    import Breadcrumb from '../../components/breadcrumb.svelte';
    var path = [
        { name: "About", href: "." },
        { name: "About Us", href: "about/about-us" }
    ]
</script>

<style>
    .about {
        margin-top: 90px;
        flex-direction: column;
    }

    @media(max-width: 850px) {
        .about {
            margin-top: 50px;
        }
    }
</style>
<svelte:head>
    <title>About Satvik Yogshala</title>
</svelte:head>
<div class="about" id="hero">
    ABOUT US

    <Breadcrumb {path} />
</div>