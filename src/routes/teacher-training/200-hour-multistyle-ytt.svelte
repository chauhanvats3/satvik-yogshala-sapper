<script>
    import Collapsible from '../../components/collapsible.svelte';
    import Table from '../../components/table.svelte';
    import Contact_Form from '../../components/contact_form.svelte';
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

    .hero>img {
        z-index: -1;
        width: 100%;
        height: 70vh;
    }

    .hero {
        width: 100% !important;
        margin: 0 !important;

    }

    .ytt>div {
        min-height: 50px;
        width: 97vw;
        margin: 10px 5px;
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
    <div class="hero">
        <img src="images_old/courses/200-hours-ytt.jpg" alt="">
    </div>
    <div class="breadcrumb">Home > 100 Hour teacher Training</div>
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
                    {#each curriculum as single}
                        <Collapsible heading={single.name} details={single.details} />
                    {/each}
                </div>
            </div>
            <div class="column_c">
                <img src="images_old/pages/about-2.jpg" alt="">
            </div>
       </div>
       <div class="group_3">
        <div class="highlights">
            <div class="heading">
                <h1>HIGHLIGHTS OF 200 HOURS YOGA TEACHER TRAINING COURSE</h1>
                <hr/>
            </div>
            <div class="highlights_content">
                <p><ion-icon name="radio-button-on" class="dots"></ion-icon>Learning & Understanding the basics of Yoga Asana</p>
                <p><ion-icon name="radio-button-on" class="dots"></ion-icon>Studying Yoga Anatomy and Physiology for better alignment of Yogic postures</p>
                <p><ion-icon name="radio-button-on" class="dots"></ion-icon>Enhancing class conducting techniques and confidence</p>
                <p><ion-icon name="radio-button-on" class="dots"></ion-icon>Strengthening the path of becoming true Yogi</p>
                <p><ion-icon name="radio-button-on" class="dots"></ion-icon>Knowledge of Yoga Anatomy and Physiology</p>
                <p><ion-icon name="radio-button-on" class="dots"></ion-icon>Performing Meditation, Mantras, and Pranayama in the lap of nature</p>
            </div>           
        </div>
    </div>
       <div class="group_3">
           <div class="time_table">
               <div class="heading">
                   <h1>Schedule</h1>
                   <hr/>
               </div>
               
                   <Table headers={time_table_headers} data_set = {time_table_data_set}/>
              
           </div>
       </div>
       <div class="group_1">
        <div class="column_e">
            <div class="heading">
                <h1>Included</h1>
                <hr/>
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