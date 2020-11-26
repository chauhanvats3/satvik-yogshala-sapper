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
    <div class="breadcrumb">Home > 200 Hour teacher Training</div>
    <div class="content">
        <div class="group_1">
            <div class="column_a">
                <div class="block">
                    <div class="heading">
                        <h1>200 Hours Yoga Teacher Training in Rishikesh, India</h1>
                        <hr />
                    </div>
                    <div class="detail">
                        <p>Take your first step towards a magical journey of becoming an inspiring and professional Yoga
                            Teacher
                            with the program of 200 Hours Yoga Teacher Training Course in Rishikesh offered by Satvik
                            Yogshala.
                            More than helping you in becoming a registered yoga teacher (RYT – 200), the yoga course of
                            200
                            Hours will also be quite very crucial in building self-confidence. We aim to train you to
                            become
                            a
                            fabulous yoga teacher with utmost knowledge and perfection. The comprehensive program of 200
                            Hours
                            Yoga TTC will train you in almost every aspect of yoga and will prepare you to become an
                            independent
                            yoga teacher.
                            In this 200 hours during Yoga TTC, anybody can learn reliable yoga to become a confident
                            Yoga
                            teacher. Asana, Bandha, Mudra, Chakra, Mantra, and Pranayama; the well-crafted curriculum
                            focuses on
                            all aspects of yoga. Apart from this, it will help you understand the yogic lifestyle with
                            health
                            and nutrition.
                            The program of 200 Hours Yoga TTC at Satvik Yogshala is internationally certified by Yoga
                            Alliance
                            USA and let you teach yoga throughout the world. Anatomy and Physiology of Yogic Practices,
                            Yoga
                            Philosophy and Yogic Lifestyle is the main part of Yoga which you will practice physically
                            and
                            spiritually in this yoga course
                            Teaching and Practice Methodology in Satvik Yogshala is very different from all other
                            schools
                            because while we design the curriculum we keep every type of student in mind. Satvika
                            Yogshala
                            teaches you each and everything from the basics to advance. 200 Hours yoga TTC in Rishikesh
                            at
                            Satvika Yogshala guides you in every aspect of Yoga. During the course we make you expand
                            mastery of
                            the teaching principles and self-practice, and after its completion, you will feel
                            adequately
                            prepared to give instruction to a common class.
                            We have experienced, skilled yoga teachers in our school who will give you more knowledge in
                            less
                            time. After successfully completing the Yoga Teacher Training program, you will be provided
                            with
                            a
                            valid certificate so that you can start your own yoga school to teach students all over the
                            world
                            and our most courteous teachers will help you to achieve your goal.</p>
                    </div>
                </div>
                <div class="block">
                    <div class="heading">
                        <h3>THE PURPOSE OF 200 HOURS YOGA TEACHER TRAINING COURSE.</h3>
                        <hr />
                    </div>
                    <div class="detail">
                        <p>The main purpose of this courses in Satvik Yogshala is to develop a self-practice;
                            spiritually
                            and
                            physically in our students and make them skilled and confident Yoga teachers. Yoga is more
                            spiritual
                            than physical.As soon as you succeed in your spiritual and physical practice, you are ready
                            to
                            learn
                            a much difficult part in a very easy way. This course offers a full study of the eight limbs
                            of
                            yoga
                            based on yoga sutras.</p>
                    </div>
                </div>
                <div class="block">
                    <div class="heading">
                        <h3>LEARN 200 HOUR YOGA TTC IN 25 DAYS!</h3>
                        <hr />
                    </div>
                    <div class="detail">
                        <p>Do not be surprised at all, of course, in a month you will become a skilled and
                            self-confident
                            Yoga
                            Teacher because you will be engaged for at least eight hours in the learning process and
                            that
                            too in
                            a very calm and comfortable way. Every student comes to learn Yoga with the same motive that
                            is
                            to
                            serve. Through the teaching of yoga in 28 days with different people from different
                            countries,
                            different culture; live, learn and grow together and become part of the same energy.</p>
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