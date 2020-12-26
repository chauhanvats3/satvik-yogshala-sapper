<script>
    import Card_vertical from "../card_vertical.svelte";


    var cards = [
        {
            image: "images/nik_teaching_1.jpg",
            title: "100 Hours YTT in Rishikesh",
            description: "The main purpose of 100-hour yoga teacher training is to create awareness about yoga and help you in finding your path in the right direction.",
            link: "teacher-training/100-hour-ytt"
        },
        {
            image: "images/nik_asana_1.jpg",
            title: "200 Hours YTT in Rishikesh",
            description: "This comprehensive program will train you in almost every aspect of yoga and will prepare you to become an independent yoga teacher.",
            link: "teacher-training/200-hour-ytt"
        },
        {
            image: "images/nik_garden.jpg",
            title: "Yoga Retreat in Rishikesh",
            description: "Spend some quality time for self, from the daily busy and hectic schedule and relax, refresh and rejuvenate yourself with “Yoga Retreat”",
            link: "yoga-retreat"
        }
    ];
</script>

<style>
    .programs {
        width: 100%;
        justify-content: space-evenly;
        flex-flow: column wrap;
        margin: 50px 0px 20px 0px;
    }

    .heading {
        display: block;
    }

    .programs>div:nth-child(2) {
        width: 100%;
    }
</style>

<div class="wrapper programs">
    <div class="heading">
        <h1 class="indie-flower">Our Programs</h1>
        <hr class="sexy_bottom_line" />
    </div>

    <div>
        {#each cards as card}
        <Card_vertical image={card.image} title={card.title} description={card.description} link={card.link} />
        {/each}
    </div>
</div>