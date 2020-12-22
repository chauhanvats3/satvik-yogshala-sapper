<script>
    import Hero from '../../components/Hero.svelte';
    import Table from '../../components/table.svelte';
    import Contact_Form from '../../components/contact_form.svelte';
    import CollapsibleGroup from '../../components/collapsibleGroup.svelte';
    import Breadcrumb from '../../components/breadcrumb.svelte';
    import Included from '../../components/included.svelte';
    import { onMount } from 'svelte';


    let breadcrumbPath = [
        { name: 'Teacher Training', href: '.' },
        { name: '100 Hours YTT', href: 'teacher-training/100-hour-ytt' }
    ];

    let curriculum = [
        {
            name: "Asana", details: [
                "Sun Sulation",
                "Moon Saluation",
                "Standing Pose",
                "Sitting Pose",
                "Balancing Pose",
                "Forward bending Pose",
                "Backward bending  Pose",
                "Pose benefits and causes",
                "Relaxation Pose"
            ], show: false
        },
        {
            name: "Pranayama (Science of Breath)", details: ["Nadishodhana Pranayama",
                "Sheetali pranayama",
                "Sheetkari Pranayama",
                "Bramari Pranayama",
                "Ujjayi Pranayama",
                "Bhastrika Pranayama",
                "Kapalbhati Pranayama",
                "Surya Bheda pranayama"],
            show: false
        }, {
            name: "Yoga Philosophy", details: [
                "Indroduction of yoga",
                "What is chitta ( vrittis)",
                "What is chakra?",
                "What is kundalini?",
                "Traditional Hatha Yoga",
                "Ashtanga yoga",
                "Story’s of Yogis",
                "Karma practical yoga"], show: false
        },
        {
            name: "Shatkarma (Cleansing Technique)", details: [
                "Introduction of Shatkarma",
                "Jal Neti",
                "Rubber Neti",
                "Trataka (Eye Cleaning)",
                "Kapalbhati",
                "Vamandhauti"], show: false
        },
        {
            name: "Yoga Anatomy", details: [
                "Types of Bones",
                "Spine and its importance",
                "Joints Movement",
                "Skeletal System",
                "Digestive System"], show: false
        },
        {
            name: "Mantra Chanting", details: [
                "What is mantra and benefits of chanting mantra",
                "Guru mantra (mantra for guru)",
                "Gayatri mantra (universal prayer)",
                "Hare rama, Hare Krishna (Maha mantra)",
                "Shanti mantra (mantra of peace)"],
            show: false
        },
        {
            name: "Meditation", details: [
                "Principal of Meditation & Concentration",
                "Chakra meditation",
                "Breathing awareness meditation",
                "Gaze meditation",
                "Inner Visualization",
                "Yoga Nidra"], show: false
        },
    ];

    let time_table_headers = ["Time", "Week 1", "Week 2", "Week 3"];
    let time_table_data_set = [
        ["05:45 AM - 06:00 AM", "Detox Tea", "Detox Tea", "Detox Tea"],
        ["06:00 AM - 07:30 AM", "Hatha Yoga", "Hatha Yoga", "Hatha Yoga"],
        ["07:45 AM - 09:00 AM", "Pranayama", "Pranayama", "Pranayama"],
        ["09:00 AM - 10:00 AM", "Breakfast", "Breakfast", "Breakfast"],
        ["10:15 AM - 11:00 AM", "Mantra Chanting", "Mantra Chanting", "Mantra Chanting"],
        ["11:15 AM - 12:45 PM", "Ayurveda Cooking / Anatomy", "Ayurveda Cooking / Anatomy", "Ayurveda Cooking / Anatomy"]
    ];

    let included = [
        { name: "Accommodation", src: "images/yoga1.jpg" },
        { name: "Trainer support", src: "images/yoga2.jpg" },
        { name: "Excursions ( Ganga Aarti, Temple/ Cave visit )", src: "images/yoga3.jpg" },
        { name: "Yoga material ( Yoga Mat, Notebook, pen, Neti pot)", src: "images/yoga4.jpg" },
        { name: "Satvik Food Facilities", src: "images/yoga5.jpg" },
        { name: "Wi-Fi Facilities", src: "images/yoga6.jpg" },
        { name: "Laundry Service", src: "images/yoga7.jpg" },
        { name: "Books Material ( Only for Reading )", src: "images/yoga8.jpg" }
    ];
    let excluded = [
        { name: "Life insurance", src: "images/yoga11.jpg" }
        , { name: "Doctor Consultation", src: "images/yoga12.jpg" }
        , { name: "Airport Pickup & Drop", src: "images/yoga13.jpg" }
        , { name: "Personal Expenses", src: "images/yoga14.jpg" }
    ];


</script>

<style>
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
<svelte:head>
    <title>100 Hours YTT - Satvik Yogshala</title>
</svelte:head>
<div class="ytt">
    <Hero img="images/yoga8.jpg" />
    <Breadcrumb path={breadcrumbPath} />
    <div class="content">
        <div class="block">
            <div class="heading">
                <h1>100 Hours Yoga Teacher Training in Rishikesh, India</h1>
                <hr />
            </div>
            <div class="detail">
                <p>Yoga Teacher Training Course In Rishikesh, India. Satvik Yogshala is a Registered Yoga
                    School
                    with Yoga Alliance USA offers 100 Hours Traditional Hatha, Ashtanga Yoga. This course is
                    convenient for students who have the intention of gaining the knowledge of yoga but
                    don’t
                    have much time to do so. The primary purpose of 100-hour yoga teacher training is to
                    create
                    awareness about yoga and help you in finding your path in the right direction.This
                    100-hour
                    Yoga program is structured for those looking for short-term courses as the course is of
                    just
                    14 days. After completing 100 Hours Yoga TTC, students can enroll in a 200 Hours Yoga
                    Teacher Training Course. This course is exemplary for people having limited time and
                    mainly
                    focused on deepening your knowledge in yoga philosophy and practice of asana, which
                    includes
                    the study and practice of Asanas, Hatha Yoga, Kriyas, Pranayama, Meditation, Mudras &
                    Bandhas, Yoga Anatomy & Philosophy, and Alignment and Adjustment Workshop.</p>
            </div>
        </div>
        <div class="block">
            <div class="heading">
                <h3>COURSE FOR ALL LEVELS OF YOGA PRACTITIONER'S!</h3>
                <hr />
            </div>
            <div class="detail">
                <p>100 Hour Yoga Teacher Training courses are open for all levels of people, including
                    beginner
                    to people having the necessary knowledge. Regardless of your level of practice, the
                    curriculum will teach you the fundamental principles of yoga and will help you develop a
                    strong foundation upon which your learning and practice depend.
                    After completing 100 Hours Yoga TTC, you will be certified with a certificate which will
                    prove about your successful yogic journey of 100 hour yoga TTC but after the completion
                    of
                    this 100 Hour Yoga TTC course, you are not eligible to teach yoga, but if you already
                    decided to become a great Yoga teacher to train worldwide then, certainly you have to
                    enroll
                    in our 200 Hour Yoga Teacher Training Course that would be a second staging post towards
                    your Yoga journey.100 Hour Yoga Teacher Training Course generally runs throughout the
                    year.
                    Most importantly, the applicant comes with an open mind and eagerness to learn and
                    should
                    completely able to devote themselves to the course of at least 8 hours daily in which
                    attendance of 100 % is mandatory.
                    During the course, all the accommodation is provided by the Satvik Yogshala and is
                    included
                    in your course fee. Keep in mind, Non- Vegetarian food and Alcohol are not allowed in
                    Satvik
                    Yogshala, and we only provide pure Vegetarian food and also not allow anyone to bring
                    (non-vegetarian food) from outside.
                </p>
            </div>
        </div>
        <div class="block">
            <div class="heading">
                <h3>YOGA ISN’T JUST A FITNESS FAD.</h3>
                <hr />
            </div>
            <div class="detail">
                <p>"Whether it’s a sweaty hot yoga session or a relaxing, restorative class, everyday people
                    are
                    donning their Lululemon and dropping in to see what all the fuss is about. So maybe yoga
                    has
                    become a bit of a craze, but the ancient tradition of yoga is more than a fitness trend
                    alone."</p>
            </div>
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

        <div class="contact-form">
            <Contact_Form classToGive="half" />
        </div>


    </div>
</div>