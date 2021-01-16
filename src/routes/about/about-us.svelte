<script>
    import Breadcrumb from '../../components/breadcrumb.svelte';
    import Programs from '../../components/home/our_programs.svelte';
    import Metadata from '../../components/metadata.svelte';
    const metadata = {
        title: "About Us - Satvik Yogshala",
        description: "Satvik Yogshala is the best beginner friendly yoga school in Rishikesh where we keep students minimum so we can teach them all thoroughly",
        keywords: "yoga,rishikesh,beginner,ttc,teacher,ashtanga",
        thumb: "https://satvikyogshala.com/logo/logo_with_name.png"
    };
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
<Metadata {metadata} />

<div class="about" id="hero">
    ABOUT US

    <Breadcrumb {path} />


    <Programs />
</div>