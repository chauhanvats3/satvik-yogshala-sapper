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
        { name: '200 Hours YTT', href: 'teacher-training/200-hour-ytt' }
    ];

    let curriculum = [
        { name: "Asana", details: ["line 1 ", "line 2", "3rd line"], show: false },
        { name: "Pranayama (Science of Breath)", details: ["1", "2"], show: false },
        { name: "Mudras and Bandhas", details: ["3", "4"], show: false },
        { name: "Yoga Philosophy", details: ["5", "6"], show: false },
        { name: "Alignment and Adjustment", details: ["7", "8"], show: false },
        { name: "Yoga Anatomy", details: ["9", "0"], show: false },
        { name: "Mantra Chanting", details: ["11", "22"], show: false },
        { name: "Meditation", details: ["33", "44"], show: false },
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
        { name: "Accommodation", src: "images/yoga1.jpg" },
        { name: "Trainer support", src: "images/yoga2.jpg" },
        { name: "Excursions ( Ganga Aarti, Temple/ Cave visit )", src: "images/yoga3.jpg" },
        { name: "Yoga material ( Yoga Mat, Notebook, pen, Neti pot)", src: "images/yoga4.jpg" },
        { name: "Satvik Food Facilities", src: "images/yoga5.jpg" },
        { name: "Wi-Fi Facilities", src: "images/yoga6.jpg" },
        { name: "Laundry Service", src: "images/yoga7.jpg" },
        { name: "Books Material ( Only for Reading )", src: "images/yoga8.jpg" }
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
    <title>200 Hours YTT - Satvik Yogshala</title>
</svelte:head>
<div class="ytt">
    <Hero img="images/yoga14.jpg" />
    <Breadcrumb path={breadcrumbPath} />
    <div class="content">
        <div class="block">
            <div class="heading">
                <h1>200 Hours Yoga Teacher Training in Rishikesh, India </h1>
                <hr />
            </div>
            <div class="detail">
                <p>Take your first step towards a magical journey of becoming an inspiring and professional Yoga Teacher
                    with the program of 200 Hours Yoga Teacher Training Course in Rishikesh offered by Satvik Yogshala.
                    More than helping you in becoming a registered yoga teacher (RYT – 200), the yoga course of 200
                    Hours will also be quite very crucial in building self-confidence. We aim to train you to become a
                    fabulous yoga teacher with utmost knowledge and perfection. The comprehensive program of 200 Hours
                    Yoga TTC will train you in almost every aspect of yoga and will prepare you to become an independent
                    yoga teacher. In this 200 hours during Yoga TTC, anybody can learn reliable yoga to become a
                    confident Yoga teacher. Asana, Bandha, Mudra, Chakra, Mantra, and Pranayama; the well-crafted
                    curriculum focuses on all aspects of yoga. Apart from this, it will help you understand the yogic
                    lifestyle with health and nutrition. The program of 200 Hours Yoga TTC at Satvik Yogshala is
                    internationally certified by Yoga Alliance USA and let you teach yoga throughout the world. Anatomy
                    and Physiology of Yogic Practices, Yoga Philosophy and Yogic Lifestyle is the main part of Yoga
                    which you will practice physically and spiritually in this yoga course Teaching and Practice
                    Methodology in Satvik Yogshala is very different from all other schools because while we design the
                    curriculum we keep every type of student in mind. Satvika Yogshala teaches you each and everything
                    from the basics to advance. 200 Hours yoga TTC in Rishikesh at Satvika Yogshala guides you in every
                    aspect of Yoga. During the course we make you expand mastery of the teaching principles and
                    self-practice, and after its completion, you will feel adequately prepared to give instruction to a
                    common class. We have experienced, skilled yoga teachers in our school who will give you more
                    knowledge in less time. After successfully completing the Yoga Teacher Training program, you will be
                    provided with a valid certificate so that you can start your own yoga school to teach students all
                    over the world and our most courteous teachers will help you to achieve your goal.
                </p>
            </div>
        </div>
        <div class="block">
            <div class="heading">
                <h3>THE PURPOSE OF 200 HOURS YOGA TEACHER TRAINING COURSE.
                </h3>
                <hr />
            </div>
            <div class="detail">
                <p>The main purpose of this courses in Satvik Yogshala is to develop a self-practice; spiritually and
                    physically in our students and make them skilled and confident Yoga teachers. Yoga is more spiritual
                    than physical.As soon as you succeed in your spiritual and physical practice, you are ready to learn
                    a much difficult part in a very easy way. This course offers a full study of the eight limbs of yoga
                    based on yoga sutras.

                </p>
            </div>
        </div>
        <div class="block">
            <div class="heading">
                <h3>LEARN 200 HOUR YOGA TTC IN 25 DAYS!
                </h3>
                <hr />
            </div>
            <div class="detail">
                <p>Do not be surprised at all, of course, in a month you will become a skilled and self-confident Yoga
                    Teacher because you will be engaged for at least eight hours in the learning process and that too in
                    a very calm and comfortable way. Every student comes to learn Yoga with the same motive that is to
                    serve. Through the teaching of yoga in 28 days with different people from different countries,
                    different culture; live, learn and grow together and become part of the same energy.

                </p>
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