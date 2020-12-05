<script>
    import Table from '../../components/table.svelte';
    import Contact_Form from '../../components/contact_form.svelte';
    import CollapsibleGroup from '../../components/collapsibleGroup.svelte';
    import Breadcrumb from '../../components/breadcrumb.svelte';
    import Included from '../../components/included.svelte';
    import Excluded from '../../components/excluded.svelte';

    let breadcrumbPath = [
        { name: 'Teacher Training', href: '.' },
        { name: '100 Hours YTT', href: 'teacher-training/100-hour-ytt' }
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
        top: 00;
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
        display: block;
    }

    p {
        text-align: justify;
    }

    .group_1 {
        width: 100%;
    }

    .group_2 {
        align-items: stretch;
        width: 100%;
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
</style>
<svelte:head>
    <title>100 Hours YTT - Satvik Yogshala</title>
</svelte:head>
<div class="ytt">
    <div class="hero-wrapper">
        <div class="hero">
            <img src="images/yoga8.jpg" alt="Someone doing yoga">
        </div>
    </div>
    <Breadcrumb path={breadcrumbPath} />
    <div class="content">
        <div class="group_1">
            <div class="column_a">
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
                <img src="images/yoga4.jpg" alt="">
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