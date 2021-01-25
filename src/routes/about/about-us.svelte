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

    const aboutContent = `<p>Satvik Yogshala, located on the bank of the Holy Ganges, is a Yoga Alliance certified yoga school which focuses on promoting personal and spiritual transformation through the ancient teachings of yoga. We run both 100 and 200-Hour Yoga Teacher Trainings with the option of doing the 200 Hour course within the Hatha style or within both Hatha and Ashtanga styles (200-Hour Multi-Style), in addition to yoga retreats.</p>
<p>
    
    A ‘Satvik’ lifestyle is one which is pure, simple and which facilitates personal and spiritual growth. Here at Satvik Yogshala, we have thoughtfully devised a ‘Satvik’ programme which will give you the skills, knowledge and confidence you need to be a successful yoga teacher. Our programme includes training in Traditional Hatha Yoga, Ashtanga Vinyasa Yoga, Meditation, Mantra, Yoga Philosophy, Yoga Anatomy, Yoga Physiology and Ayurveda. 

</p>  

<p>
    In addition, all our foods are home-cooked and prepared following Ayurvedic principles designed to facilitate your growth, and we also include training of these in our course. For example, you will learn which spices and foods are likely to facilitate your yogic journey and which ones are likely to hinder it. This information is vital, yet few yoga schools consider it! 

</p>   


<p>
    Our teachers are traditional North-Indian teachers who have themselves learnt from North-Indian and Himalayan teachers, and who now teach this knowledge with love and compassion for their students who are just as passionate about yoga and spiritual development as they are. 
     
</p>

<p>
    Our mission is to guide our students to come into harmony with themselves and with Source, and we do this through providing practical and spiritual yogic knowledge,  and through supporting you in your development and growth from a place of deep love and understanding. 

</p>    


<p>If we want to change the world, we have to start with ourselves. Yoga provides us with that sanctuary where we can come into contact with Source and heal ourselves, so we can ultimately not only heal ourselves, but the world around us. We would love for you to join us in your journey towards personal and spiritual transformation! You can book a place in our courses here:</p>
`
</script>

<style>
    .about {
        margin-top: 160px;
        flex-direction: column;
    }

    .content {
        max-width: 50vw;
    }

    :global(.about>.content>p) {
        width: 100%;
        margin: 10px 5px;
        text-align: justify;
        line-height: 2em;
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

    <div class="content">{@html aboutContent}</div>
    <Programs />
</div>