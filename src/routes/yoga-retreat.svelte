<script>
    import Table from '../components/table.svelte';
    import Contact_Form from '../components/contact_form.svelte';
    import CollapsibleGroup from '../components/collapsibleGroup.svelte';
    import Breadcrumb from '../components/breadcrumb.svelte';
    import Included from '../components/included.svelte';
    import Hero from '../components/Hero.svelte';
    import Programs from '../components/home/our_programs.svelte';
    import Metadata from '../components/metadata.svelte';
    const metadata = {
        title: "Yoga Retreat - Satvik Yogshala",
        description: "Satvik Yogshala is organizing Yoga Retreat at Rishikesh. Every month we conduct several yoga retreat programs and yoga programs, so we have planned a Yoga Retreat which is under your budget and can be affordable. So pack your bags and start booking your Yoga at Satvik Yogshala in Rishikesh.",
        keywords: "yoga retreat,season yoga retreat,weekly yoga retreat,sunrise retreat,sunset retreat,ayurveda retreat,detox retreat,mindfullness retreat,retreat for begennier,satvik retreat,himalayan retreat,retreat for kids,asana retreat,pranayam retreat,ashtanga retreat,retreat for women,streaching yoga-retreat,hip opening Retreat,hip mobility Retreat,spine yoga-retreat",
        thumb: "https://satvikyogshala.com/logo/logo_with_name.png"
    };

    let breadcrumbPath = [
        { name: 'Yoga Retreat', href: 'yoga-retreat' }
    ];

    let curriculum = [
        { name: "Asana", show: false },
        { name: "Pranayama (Science of Breath)", show: false },
        { name: "Mudras and Bandhas", show: false },
        { name: "Yoga Philosophy", show: false },
        { name: "Alignment and Adjustment", show: false },
        { name: "Yoga Anatomy", show: false },
        { name: "Mantra Chanting", show: false },
        { name: "Meditation", show: false },
    ];

    let time_table_headers = ["Time", "Week 1", "Week 2", "Week 3"];
    let time_table_data_set = [
        ["05:45 AM - 06:00 AM", "Detox Tea", "Detox Tea", "Detox Tea"],
        ["06:00 AM - 07:30 AM", "Hatha Yoga", "Hatha Yoga", "Hatha Yoga"],
        ["07:45 AM - 09:00 AM", "Pranayama", "Pranayama", "Pranayama"],
        ["09:00 AM - 10:00 AM", "Breakfast", "Breakfast", "Breakfast"],
        ["10:15 AM - 11:00 AM", "Mantra / Alignment & Adjustment", "Mantra / Alignment & Adjustment", "Mantra / Alignment & Adjustment"],
        ["11:15 AM - 12:45 PM", "Ayurveda Cooking / Anatomy", "Ayurveda Cooking / Anatomy", "Ayurveda Cooking / Anatomy"]
    ];

    let included = [
        { name: "Accommodation", src: "images/accomodation.jpg" },
        { name: "Trainer support", src: "images/nik_alignment.jpg" },
        { name: "Excursions ( Ganga Aarti, Temple/ Cave visit )", src: "images/ganga_arti.jpg" },
        { name: "Yoga material ( Yoga Mat, Notebook, pen, Neti pot)", src: "images/yoga_mat.jpg" },
        { name: "Satvik Food Facilities", src: "images/indian_food.jpg" },
        { name: "Wi-Fi Facilities", src: "images/wifi.jpg" },
        { name: "Laundry Service", src: "images/laundry.jpg" },
        { name: "Books Material ( Only for Reading )", src: "images/book_stack.jpg" }
    ];
    let excluded = [
        { name: "Life insurance", src: "images/yoga11.jpg" }
        , { name: "Doctor Consultation", src: "images/yoga12.jpg" }
        , { name: "Airport Pickup & Drop", src: "images/yoga13.jpg" }
        , { name: "Personal Expenses", src: "images/yoga14.jpg" }
    ];


</script>

<style>
    p {
        margin: 10px;
    }

    .ytt {
        margin-top: 1px;
        flex-flow: column wrap;
        width: 100%;
    }


    .block {
        flex-flow: column wrap;
        width: 85%;
        margin: 20px 10px;
    }

    .detail {
        width: 80%;
        line-height: 2em;
        word-spacing: 0.2em;
        text-align: justify;
    }

    .curriculum {
        width: 60%;
    }

    .time_table {
        width: 100%;
    }

    @media (max-width: 650px) {
        .curriculum {
            width: 100%;
            font-size: small;
        }
    }
</style>
<Metadata {metadata} />

<div class="ytt">
    <Hero img="images/nik_garden.jpg" top="-20%" />
    <Breadcrumb path={breadcrumbPath} />
    <div class="content">
        <div class="block">
            <div class="heading">
                <h1>YOGA RETREAT IN RISHIKESH, INDIA
                </h1>
                <hr />
            </div>
            <div class="heading">
                <h3>RELAX, REFRESH AND REJUVENATE YOURSELF WITH “YOGA RETREAT”
                </h3>
            </div>
            <div class="detail">
                <p>Satvik Yogshala is organizing Yoga Retreat at Rishikesh. Every month we conduct several yoga
                    retreat
                    programs and yoga programs, so we have planned a Yoga Retreat which is under your budget and can
                    be
                    affordable. So pack your bags and start booking your Yoga at Satvik Yogshala in Rishikesh.

                </p>
            </div>
        </div>
        <div class="block">
            <div class="heading">
                <h3>EXPERIENCE LOCAL COLOR, CULTURE, AND FOOD IN RISHIKESH, INDIA
                </h3>
                <hr />
            </div>
            <div class="detail">
                <p>“The World Capital of Yoga” for which people come from all over the world. If you want to enjoy
                    your
                    vacation with Yoga Retreat and release your everyday stress then this would be the better option
                    and
                    if the place is Rishikesh is the best option I think, there is no better option than this. The
                    purpose is that you spend some quality time for self from daily busy and hectic schedule and
                    relax,
                    refresh and rejuvenate yourself with “Yoga Retreat”</p>

                <p>Rishikesh a divine city where you will get fascinating beauty and adventure together. Spiritual
                    city
                    on the bank of the river Ganga which is full of divine temples and beaches make it the favorite
                    destination for yoga and meditation seeker because it is highly valued for its pleasing
                    environment.
                    Positive energy and vibration are in the air, keep you all the time refreshed not only mentally
                    but
                    also physically and the soothing sound of temple bell brings peace within you and will also get
                    the
                    chance to experience the tactile sensations of the mantras resonance within your body when you
                    hear
                    chanting of Sanskrit Mantra from the nearby temples and the peaceful sound of holy river Ganga.
                    Vegetarian fresh and organic meals and nice and comfortable accommodation are included in this
                    Yoga
                    Retreat, beside this, we will also provide you the activities like rafting, trekking, and local
                    sightseeing with a complementary Ayurveda massage. Satvik Yogshala is a well-organized and
                    managed
                    registered Yoga Alliance USA, with efficient Yoga Teachers who teach you about (8 limbs path)
                    Ashtanga & bhakti yoga that give deep insight knowledge into your practice and meditation. More
                    than
                    this, they teach every aspect of yoga with an utmost proficiency that it increase conscious
                    thoughts
                    to soul level. Yoga Retreat is designed with the nice scheduled routine that invites discipline
                    into
                    your life and keeps you more relaxed.</p>

                <p>Relaxation and Rejuvenating will lead you to the spiritual discovery that will open wide your
                    mind to
                    a new way of yoga retreat for 14 days. So take the advantage of Yoga Retreat in Satvik Yogshala
                    in
                    Rishikesh and enjoy yogic kriyas, asanas, meditation, and pranayama.</p>
            </div>
        </div>
        <div class="block curriculum">
            <div class="heading">
                <h1 class="indie-flower">Curriculum</h1>
                <hr />
            </div>
            <CollapsibleGroup dataSet={curriculum} expand=false />
        </div>
        <div class="block">
            <div class="time_table">
                <div class="heading">
                    <h1 class="indie-flower">Schedule</h1>
                    <hr />
                </div>

                <Table headers={time_table_headers} data_set={time_table_data_set} />

            </div>
        </div>
        <div class="block">
            <h1 class="indie-flower">Included</h1>
            <Included dataSet={included} />
        </div>

        <Programs excludeCard="yoga-retreat" />

        <div class="contact-form">
            <Contact_Form classToGive="half" />
        </div>
    </div>
</div>