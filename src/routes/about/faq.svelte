<script>
    import Breadcrumb from '../../components/breadcrumb.svelte';
    import Programs from '../../components/home/our_programs.svelte';
    import Metadata from '../../components/metadata.svelte';
    const metadata = {
        title: "FAQs - Satvik Yogshala",
        description: "Satvik Yogshala is the best beginner friendly yoga school in Rishikesh where we keep students minimum so we can teach them all thoroughly",
        keywords: "yoga,rishikesh,beginner,ttc,teacher,ashtanga",
        thumb: "https://satvikyogshala.com/logo/logo_with_name.png"
    };
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
<Metadata {metadata} />

<div class="faq" id="hero">
    Frequently Asked Questions
    <Breadcrumb {path} />


    <Programs />
</div>