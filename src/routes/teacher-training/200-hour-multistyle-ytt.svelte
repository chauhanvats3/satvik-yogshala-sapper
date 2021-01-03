<script>
    import Hero from '../../components/Hero.svelte';
    import Table from '../../components/table.svelte';
    import Contact_Form from '../../components/contact_form.svelte';
    import CollapsibleGroup from '../../components/collapsibleGroup.svelte';
    import Breadcrumb from '../../components/breadcrumb.svelte';
    import Included from '../../components/included.svelte';
    import Programs from '../../components/home/our_programs.svelte';


    let breadcrumbPath = [
        { name: 'Teacher Training', href: '.' },
        { name: '200 Hours Multistyle YTT', href: 'teacher-training/200-hour-multistyle-ytt' }
    ];

    let highlights = [
        "Learning & Understanding the basics of Yoga Asana", "Studying Yoga Anatomy and Physiology for better alignment of Yogic postures", "Enhancing class conducting techniques and confidence", "    Strengthening the path of becoming true Yogi", "    Knowledge of Yoga Anatomy and Physiology", "    Performing Meditation, Mantras, and Pranayama in the lap of nature"]

    let curriculum = [
        {
            name: "Hatha Yoga",
            details: [
                "Joint Movement",
                "Sun Sulation",
                "Moon Saluation",
                "Standing Pose",
                "Sitting Pose",
                "Spinal twisting Pose",
                "Advanced Pose",
                "Balancing Pose",
                "Forward bending Pose",
                "Backward bending  Pose",
                "Pose benefits and causes",
                "Relaxation Pose"],
            show: false
        },
        {
            name: "Ashtanga Yoga",
            desc: "Asthanga yoga has become a famous yoga technique where we learn how we can move in different Asana.This is a dynamic yoga series where you learn all the benefits and causes.During the asthanga series of your 200 Hour Yoga Teacher Training,you will learn:",
            details: [
                "Primary series & Pose",
                "Sanskrit names of poses",
                "Standing Pose",
                "Primary Pose",
                "Intermediate Pose",
                "Correction Alignment",
                "Body Gestures(Mudras&Bandhas)"
            ],
            show: false
        },
        {
            name: "Pranyama",
            desc: "During the Pranayama classes of your 200 Hour Teacher Training,you will be learned this Breath-Control:-",
            details: [
                "Introduction of Pranayama",
                "Benefits of Pranayama",
                "Brahmari pranayama",
                "Movement of Prana",
                "Practical",
                "Ujjai pranayama",
                "Sheetali pranayama",
                "Nadi shodhana",
                "Kapalbhati pranayama",
                "Bhastrika pranayama",
                "Surya Bheda pranayama",
                "5 Retention",
                "Natural Breath"],
            show: false
        },
        {
            name: "Yoga Philosophy",
            details: [
                "Indroduction of yoga",
                "Satvik lifestyle",
                "Three Dosha",
                "Five basic element",
                "Pantanjali Yoga sutra",
                "Eight Limbs of Yoga",
                "What is chitta ( vrittis)",
                "What is chakra?",
                "What is kundalini?",
                "Yoga therapy?",
                "What is Raja Yoga?",
                "Story’s of Yogis",
                "Karma practical & theory"],
            show: false
        },
        {
            name: "Meditation",
            details: [
                "Principles of Meditation & Concentration",
                "Bhajan/Kirtan",
                "Chakra meditation",
                "Breathing awareness meditation",
                "Gaze meditation",
                "Inner Visualization",
                "Yoga Nidra"],
            show: false
        },
        {
            name: "Shatkarma (Cleansing Technique)",
            details: [
                "Introduction of Shatkarma",
                "Jal Neti",
                "Rubber Neti",
                "Trataka[Eye Cleaning]",
                "Kapalbhati",
                "Vamandhauti"],
            show: false
        },
        {
            name: "Mantra Chanting",
            details: [
                "What is mantra and benefits of chanting mantra",
                "Om mantra",
                "MahaMrityunjaya Mantra",
                "Guru mantra (mantra for guru)",
                "Gayatri mantra (universal prayer)",
                "Hare rama, Hare Krishna (Maha mantra)",
                "Shanti mantra (mantra of peace)"],
            show: false
        },
        {
            name: "Yoga Anatomy",
            details: [
                "Spine and its importance",
                "Respiratory System",
                "Joints movement",
                "Skeletal System",
                "Digestive System",
                "About Dhosha"],
            show: false
        },
        {
            name: "Alignment & Adjustment",
            details: [
                "Hip opening",
                "Back bending",
                "Forward bending",
                "Twisting",
                "Standing"],
            show: false
        }
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
        , { name: "Doctor Consultation", src: "images/yoga15.jpg" }
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

    .highlights {
        margin: 10px 0;
        flex-flow: column nowrap;
    }

    .highlights li {
        width: 100%;
        margin: 5px 0;
        text-align: left;
        justify-content: flex-start;
    }

    .fa-circle-notch {
        margin: 0 5px;
        font-size: 10px;
        color: blueviolet;
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
<svelte:head>
    <title>200 Hours Multistyle YTT - Satvik Yogshala</title>
</svelte:head>
<div class="ytt">
    <Hero img="images/nik_asana_1.jpg" top="-20%" />
    <Breadcrumb path={breadcrumbPath} />
    <div class="content">
        <div class="block">
            <div class="heading">
                <h1>200 HOURS MULTI-STYLE YOGA TEACHER TRAINING IN RISHIKESH, INDIA
                </h1>
            </div>
            <div class="heading">
                <h3>ACCELERATION OF YOGIC CAREER IN A SERENE AND NATURAL ENVIRONMENT
                </h3>
            </div>
            <div class="detail">
                <p>Yoga from the ancient era is the most recommended path to achieve salubrious health along with the
                    serene state of mind and soul. The art of Yoga renders a sense of relief from the hectic and busy
                    life.
                    Yoga integrates the body, mind, and soul in a more profound way and helps in connecting yourself
                    with
                    spirituality. Due to its tranquil and inartificial environment along with the divine intervention of
                    the
                    pious river Ganga, Yoga in Rishikesh is always a mesmerizing experience for yoga lovers. The land of
                    Rishikesh multi folds the benefits of Yoga to the utmost extent. Rishikesh is the most chosen
                    hotspot
                    for health and wellness by many Yogis, saints, and Rishis. Thus, Yoga Teacher Training in Rishikesh
                    is
                    the most chosen amongst the Yoga freaks from different parts of the world. One can quest for the
                    best
                    Yoga Teacher Training Courses in Rishikesh.</p>

                <p> days residential Yoga course or 200 hours Yoga TTC mainly focuses on understanding and learning the
                    basic concepts of Yoga. It also includes the practicing of the Yoga Asana or Postures. We at Satvik
                    Yogshala focused on maintaining proper discipline in the life of our Yogis, as from the yogic
                    perspective discipline is the foremost path of a Yogi. Our Flow Yoga teacher training course in
                    Rishikesh includes the correction of Yoga postures. As 200 hours Yoga Teacher Training program in
                    India
                    is considered to be the gateway of the brightest career field of Yoga, so during this yoga course
                    introduction and understanding of yogic concepts is to be done.</p>

                <p> Satvik Yogshala renders the students with a friendly learning environment offering 200 hours of
                    Hatha
                    Yoga TTC affiliated by Yoga Alliance, USA. Our team of professionally skilled & certified Yoga
                    Teachers
                    helps you in understanding and practicing all the concepts of Yoga. Apart from authentic Yoga
                    learning,
                    our quality and standard of Yogic food are also one of the major points of attraction for yoga
                    lovers.
                    Regardless of the proficiency in yoga courses, Satvik Yogshala is having something for every level
                    of
                    yoga practitioners. Our course plan includes teachings of Indian traditional, yogic history, and
                    spirituality with an amalgam of modern teaching style.</p>
            </div>
        </div>
        <div class="block">
            <div class="heading">
                <h3>MULTI-STYLE YOGA BY SATVIK YOGSHALA
                </h3>
                <hr />
            </div>
            <div class="detail">
                <p>200-hour multi-style yoga teacher training in Rishikesh will be an amalgam of passive awareness,
                    active involvement, fitness, and wellness. It involves a combination of physical exercises along
                    with subtle, spiritual, and divine force. This style of yoga uses blocks, straps, cushions, and
                    pillows to provide physical wellness and deep relaxation. It helps in maintaining symmetry between
                    passive and active energies. The framework provided by blocks, straps, cushions, pillows, etc. helps
                    in complete relaxation and improves yogic skills which help in building confidence in Yoga teaching.
                    This art of yoga ameliorates the flexibility and muscle strength to the utmost extent.
                </p>
            </div>
        </div>
        <div class="block">
            <div class="heading">
                <h3>THE CURRICULUM OF OUR PROFESSIONAL TEACHER TRAINING PROGRAM IN RISHIKESH
                </h3>
                <hr />
            </div>
            <div class="detail">
                <p>Our 200 hours Yoga TTC emphasis on the knowledge of Vinyasa, Hatha, and Ashtanga practice of yoga.
                    The course curriculum of our yoga TTC program involves the correction of yoga asana, Shat Kriyas or
                    Yogic cleaning techniques, Meditation, Pranayama, and Bhakti Yoga. Our certified yoga instructors
                    impart the best possible knowledge of Yoga Asana and Kriyas followed by Mantra Chanting sessions,
                    and spiritual outlook.

                </p>
            </div>
        </div>

        <div class="block ">
            <h3>HIGHLIGHTS OF 200 HOURS YOGA TEACHER TRAINING COURSE</h3>
            <ul class="highlights">


                {#each highlights as highlight}
                <li><i class="fas fa-circle-notch" aria-hidden="true"></i> {highlight}</li>
                {/each}
            </ul>
        </div>
        <div class="block curriculum">
            <div class="heading">
                <h1 class="indie-flower">Curriculum</h1>
                <hr />
            </div>
            <CollapsibleGroup dataSet={curriculum} />
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

        <div class="block">
            <Programs excludeCard="200-hours-multistyle" />
        </div>

        <div class="contact-form">
            <Contact_Form classToGive="half" />
        </div>
    </div>
</div>