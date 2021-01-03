<script>
    import Breadcrumb from '../../components/breadcrumb.svelte';
    var path = [
        { name: "About", href: "." },
        { name: "FAQs", href: "about/faq" }
    ]
</script>

<style>
    .faq {
        margin-top: 90px;
        flex-direction: column;
    }

    @media(max-width: 850px) {
        .faq {
            margin-top: 50px;
        }
    }
</style>
<svelte:head>
    <title>Frequently Asked Questions - Satvik Yogshala</title>
</svelte:head>
<div class="faq" id="hero">
    Frequently Asked Questions
    <Breadcrumb {path} />

</div>