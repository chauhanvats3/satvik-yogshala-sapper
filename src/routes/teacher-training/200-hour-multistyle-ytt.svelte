<script>
    import CollapsibleGroup from '../../components/collapsibleGroup.svelte';
    import Table from '../../components/table.svelte';
    import Contact_Form from '../../components/contact_form.svelte';
    import Breadcrumb from '../../components/breadcrumb.svelte';
    import Included from '../../components/included.svelte';
    import Excluded from '../../components/excluded.svelte';
    import { onMount } from 'svelte';

    let hero;
    let heroWrapper;
    let heroHeight = 0;
    onMount(() => {
        setTimeout(() => {
            heroHeight = hero.offsetHeight;
            console.log(heroHeight);
            var subHeight = (20 / 100) * heroHeight;
            var heroWrapperHeight = heroHeight - subHeight;
            heroWrapper.style.height = heroWrapperHeight + "px";
            heroWrapper.style.maxHeight = "100vh";
        }, 100);
    });

    const breadcrumbPath = [
        { name: 'Teacher Training', href: '.#teacher-training' },
        { name: '200 Hours Multistyle YTT', href: 'teacher-training/200-hour-multistyle-ytt' }
    ];
    let curriculum = [
        { name: "Asana", details: ["line 1 ", "line 2", "3rd line"] },
        { name: "Pranayama (Science of Breath)", details: ["1", "2"] },
        { name: "Mudras and Bandhas", details: ["3", "4"] },
        { name: "Yoga Philosophy", details: ["5", "6"] },
        { name: "Alignment and Adjustment", details: ["7", "8"] },
        { name: "Yoga Anatomy", details: ["9", "0"] },
        { name: "Mantra Chanting", details: ["11", "22"] },
        { name: "Meditation", details: ["33", "44"] },
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

    let included = ["Accommodation", "Trainer support", "Excursions ( Ganga Aarti, Temple/ Cave visit )", "Yoga material ( Yoga Mat, Notebook, pen, Neti pot)", "Satvik Food Facilities", "Wi-Fi Facilities", "Laundry Service", "Books Material ( Only for Reading )"];
    let excluded = ["Life insurance", "Doctor Consultation", "Airport Pickup & Drop", "Personal Expenses"];
</script>

<style>
    .ytt {
        margin-top: 1px;
        flex-flow: column wrap;
        width: 100%;
    }

    .hero-wrapper {
        height: 89vh;
        width: 100%;
        position: relative;
        overflow: hidden;
    }

    .hero {
        position: absolute;
        top: -10;
        overflow: hidden;
        width: 100%;
    }

    .column_a {
        margin: 10px;
        flex-basis: 70%;
    }

    .column_b {
        border: 1px solid black;
        margin: 10px;
        flex-basis: 25%;
        flex-flow: column;
        justify-content: flex-start;
        align-self: stretch;
    }

    .block {
        margin: 20px auto;
        width: 100%;
    }

    p {
        text-align: justify;
    }

    .group_1 {
        width: 100%;
    }

    .group_2 {
        align-items: stretch;
    }

    .column_c {
        margin: 10px;
        flex-basis: 50%;
    }

    .column_d {
        margin: 10px;
        flex-basis: 40%;
        align-items: flex-start;
    }

    .group_3,
    .group_3>* {
        width: 100%;
    }

    .time_table {
        flex-flow: column wrap;
    }

    .highlights {
        flex-flow: column wrap;
    }

    .highlights_content {
        flex-flow: column wrap;
        align-items: flex-start;
    }

    .dots {
        height: 8px;
        width: 8px;
    }

    .column_e {
        margin: 10px;
        flex-basis: 60%;
        flex-flow: column wrap;
    }

    .column_f {
        margin: 10px;
        flex-basis: 35%;
        flex-flow: column wrap;

    }

    @media (max-width: 700px) {

        .column_b,
        .column_d,
        .column_c,
        .column_e,
        .column_f,
        .column_a,
        .column_c {
            flex-basis: 85%;
        }


    }
</style>
<svelte:head>
    <title>200 Hours Multistyle YTT - Satvik Yogshala</title>
</svelte:head>
<div class="ytt">
    <div class="hero-wrapper" bind:this={heroWrapper} style="--hero-height:{heroHeight + 'px'};">
        <div class="hero" bind:this={hero}>
            <img src="images/yoga12.jpg" alt="Someone doing yoga">
        </div>
    </div>
    <Breadcrumb path={breadcrumbPath} />
    <div class="content">
        <div class="group_1">
            <div class="column_a">
                <div class="block">
                    <div class="heading">
                        <h1>200 HOURS MULTI-STYLE YOGA TEACHER TRAINING IN RISHIKESH, INDIA</h1>
                        <hr />
                    </div>
                    <div class="heading">
                        <h3>ACCELERATION OF YOGIC CAREER IN A SERENE AND NATURAL ENVIRONMENT</h3>
                        <hr />
                    </div>
                    <div class="detail">
                        <p>Yoga from the ancient era is the most recommended path to achieve salubrious health along
                            with the serene state of mind and soul. The art of Yoga renders a sense of relief from the
                            hectic and busy life. Yoga integrates the body, mind, and soul in a more profound way and
                            helps in connecting yourself with spirituality.
                            Due to its tranquil and inartificial environment along with the divine intervention of the
                            pious river Ganga, Yoga in Rishikesh is always a mesmerizing experience for yoga lovers. The
                            land of Rishikesh multi folds the benefits of Yoga to the utmost extent. Rishikesh is the
                            most chosen hotspot for health and wellness by many Yogis, saints, and Rishis.
                            Thus, Yoga Teacher Training in Rishikesh is the most chosen amongst the Yoga freaks from
                            different parts of the world. One can quest for the best Yoga Teacher Training Courses in
                            Rishikesh.</p>
                        <p>
                            28 days residential Yoga course or 200 hours Yoga TTC mainly focuses on understanding and
                            learning the basic concepts of Yoga. It also includes the practicing of the Yoga Asana or
                            Postures. We at Satvik Yogshala focused on maintaining proper discipline in the life of our
                            Yogis, as from the yogic perspective discipline is the foremost path of a Yogi. Our Flow
                            Yoga teacher training course in Rishikesh includes the correction of Yoga postures. As 200
                            hours Yoga Teacher Training program in India is considered to be the gateway of the
                            brightest career field of Yoga, so during this yoga course introduction and understanding of
                            yogic concepts is to be done.
                        </p>
                        <p>
                            Satvik Yogshala renders the students with a friendly learning environment offering 200 hours
                            of Hatha Yoga TTC affiliated by Yoga Alliance, USA. Our team of professionally skilled &
                            certified Yoga Teachers helps you in understanding and practicing all the concepts of Yoga.
                            Apart from authentic Yoga learning, our quality and standard of Yogic food are also one of
                            the major points of attraction for yoga lovers. Regardless of the proficiency in yoga
                            courses, Satvik Yogshala is having something for every level of yoga practitioners. Our
                            course plan includes teachings of Indian traditional, yogic history, and spirituality with
                            an amalgam of modern teaching style.
                        </p>
                    </div>
                </div>
                <div class="block">
                    <div class="heading">
                        <h3>MULTI-STYLE YOGA BY SATVIK YOGSHALA</h3>
                        <hr />
                    </div>
                    <div class="detail">
                        <p>200-hour multi-style yoga teacher training in Rishikesh will be an amalgam of passive
                            awareness, active involvement, fitness, and wellness. It involves a combination of physical
                            exercises along with subtle, spiritual, and divine force. This style of yoga uses blocks,
                            straps, cushions, and pillows to provide physical wellness and deep relaxation. It helps in
                            maintaining symmetry between passive and active energies. The framework provided by blocks,
                            straps, cushions, pillows, etc. helps in complete relaxation and improves yogic skills which
                            help in building confidence in Yoga teaching. This art of yoga ameliorates the flexibility
                            and muscle strength to the utmost extent.

                        </p>
                    </div>
                </div>
                <div class="block">
                    <div class="heading">
                        <h3>THE CURRICULUM OF OUR PROFESSIONAL TEACHER TRAINING PROGRAM IN RISHIKESH</h3>
                        <hr />
                    </div>
                    <div class="detail">
                        <p>Our 200 hours Yoga TTC emphasis on the knowledge of Vinyasa, Hatha, and Ashtanga practice of
                            yoga. The course curriculum of our yoga TTC program involves the correction of yoga asana,
                            Shat Kriyas or Yogic cleaning techniques, Meditation, Pranayama, and Bhakti Yoga. Our
                            certified yoga instructors impart the best possible knowledge of Yoga Asana and Kriyas
                            followed by Mantra Chanting sessions, and spiritual outlook.</p>
                    </div>
                </div>

                <div class="block">

                </div>
            </div>
            <div class="column_b">
                <Contact_Form />
            </div>
        </div>
        <div class="group_2">
            <div class="column_d">
                <div class="block">
                    <div class="heading">
                        <h1>Curriculum</h1>
                        <hr />
                    </div>
                    <CollapsibleGroup dataSet={curriculum} />

                </div>
            </div>
            <div class="column_c">
                <img src="images/yoga13.jpg" alt="">
            </div>
        </div>
        <div class="group_3">
            <div class="highlights">
                <div class="heading">
                    <h1>HIGHLIGHTS OF 200 HOURS YOGA TEACHER TRAINING COURSE</h1>
                    <hr />
                </div>
                <div class="highlights_content">
                    <p>
                        <ion-icon name="radio-button-on" class="dots"></ion-icon>Learning & Understanding the basics of
                        Yoga Asana
                    </p>
                    <p>
                        <ion-icon name="radio-button-on" class="dots"></ion-icon>Studying Yoga Anatomy and Physiology
                        for better alignment of Yogic postures
                    </p>
                    <p>
                        <ion-icon name="radio-button-on" class="dots"></ion-icon>Enhancing class conducting techniques
                        and confidence
                    </p>
                    <p>
                        <ion-icon name="radio-button-on" class="dots"></ion-icon>Strengthening the path of becoming true
                        Yogi
                    </p>
                    <p>
                        <ion-icon name="radio-button-on" class="dots"></ion-icon>Knowledge of Yoga Anatomy and
                        Physiology
                    </p>
                    <p>
                        <ion-icon name="radio-button-on" class="dots"></ion-icon>Performing Meditation, Mantras, and
                        Pranayama in the lap of nature
                    </p>
                </div>
            </div>
        </div>
        <div class="group_3">
            <div class="time_table">
                <div class="heading">
                    <h1>Schedule</h1>
                    <hr />
                </div>

                <Table headers={time_table_headers} data_set={time_table_data_set} />

            </div>
        </div>
        <div class="group_1">
            <div class="column_e">
                <Included dataSet={included} />
            </div>
            <div class="column_f">
                <Excluded dataSet={excluded} />
            </div>
        </div>
    </div>
</div>