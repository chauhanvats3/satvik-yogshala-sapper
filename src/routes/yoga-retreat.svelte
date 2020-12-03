<script>
    import CollapsibleGroup from '../components/collapsibleGroup.svelte';
    import Table from '../components/table.svelte';
    import Contact_Form from '../components/contact_form.svelte';

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
        ["11", "12", "13", "14"],
        ["21", "22", "23", "24"],
        ["31", "32", "33", "34"],
        ["41", "42", "43", "44"]
    ];

    let included = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let excluded = ["11", "22", "33", "44"];
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

    .breadcrumb {
        justify-content: flex-start;
        padding: 20px;
        font-size: 15px;
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
        flex-flow: column wrap;
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
        border: 1px solid black;
        margin: 10px;
        flex-basis: 35%;
        flex-flow: column wrap;

    }

    .included,
    .excluded {
        width: 100%;

    }

    .included>p {
        width: 40%;
    }

    .excluded>p {
        width: 100%;
    }
</style>
<div class="ytt">
    <div class="hero-wrapper">
        <div class="hero">
            <img src="images/yoga17.jpg" alt="Someone doing yoga">
        </div>
    </div>
    <div class="breadcrumb">Home > 100 Hour teacher Training</div>
    <div class="content">
        <div class="group_1">
            <div class="column_a">
                <div class="block">
                    <div class="heading">
                        <h1>YOGA RETREAT IN RISHIKESH, INDIA</h1>
                        <hr />
                    </div>
                    <div class="heading">
                        <h3>RELAX, REFRESH AND REJUVENATE YOURSELF WITH “YOGA RETREAT”</h3>
                        <hr />
                    </div>
                    <div class="detail">
                        <p>Satvik Yogshala is organizing Yoga Retreat at Rishikesh. Every month we conduct several yoga
                            retreat programs and yoga programs, so we have planned a Yoga Retreat which is under your
                            budget and can be affordable. So pack your bags and start booking your Yoga at Satvik
                            Yogshala in Rishikesh.
                        </p>
                    </div>
                </div>
                <div class="block">
                    <div class="heading">
                        <h3>EXPERIENCE LOCAL COLOR, CULTURE, AND FOOD IN RISHIKESH, INDIA</h3>
                        <hr />
                    </div>
                    <div class="detail">
                        <p>
                            “The World Capital of Yoga” for which people come from all over the world. If you want to
                            enjoy
                            your vacation with Yoga Retreat and release your everyday stress then this would be the
                            better
                            option and if the place is Rishikesh is the best option I think, there is no better option
                            than
                            this. The purpose is that you spend some quality time for self from daily busy and hectic
                            schedule and relax, refresh and rejuvenate yourself with “Yoga Retreat”
                        </p>
                        <p>
                            Rishikesh a divine city where you will get fascinating beauty and adventure together.
                            Spiritual
                            city on the bank of the river Ganga which is full of divine temples and beaches make it the
                            favorite destination for yoga and meditation seeker because it is highly valued for its
                            pleasing
                            environment. Positive energy and vibration are in the air, keep you all the time refreshed
                            not
                            only mentally but also physically and the soothing sound of temple bell brings peace within
                            you
                            and will also get the chance to experience the tactile sensations of the mantras resonance
                            within your body when you hear chanting of Sanskrit Mantra from the nearby temples and the
                            peaceful sound of holy river Ganga. Vegetarian fresh and organic meals and nice and
                            comfortable
                            accommodation are included in this Yoga Retreat, beside this, we will also provide you the
                            activities like rafting, trekking, and local sightseeing with a complementary Ayurveda
                            massage.
                            Satvik Yogshala is a well-organized and managed registered Yoga Alliance USA, with efficient
                            Yoga Teachers who teach you about (8 limbs path) Ashtanga & bhakti yoga that give deep
                            insight
                            knowledge into your practice and meditation. More than this, they teach every aspect of yoga
                            with an utmost proficiency that it increase conscious thoughts to soul level. Yoga Retreat
                            is
                            designed with the nice scheduled routine that invites discipline into your life and keeps
                            you
                            more relaxed.
                        </p>
                        <p>
                            Relaxation and Rejuvenating will lead you to the spiritual discovery that will open wide
                            your
                            mind to a new way of yoga retreat for 14 days. So take the advantage of Yoga Retreat in
                            Satvik
                            Yogshala in Rishikesh and enjoy yogic kriyas, asanas, meditation, and pranayama.
                        </p>
                    </div>
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
                <img src="images_old/pages/about-2.jpg" alt="">
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
                <div class="heading">
                    <h1>Included</h1>
                    <hr />
                </div>
                <div class="included">
                    {#each included as incl}
                    <p>{incl}</p>
                {/each}          
            </div>
        </div>
        <div class="column_f">
            <div class="heading">
                <h1>Excluded</h1>
                <hr/>
            </div>
            <div class="excluded">
                {#each excluded as excl}
                <p>{excl}</p>
            {/each}  
            </div>
        </div>
    </div>
    </div>
</div>