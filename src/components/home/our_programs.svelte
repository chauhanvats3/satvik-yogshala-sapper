<script>
    import Card_vertical from "../card_vertical.svelte";

    export let excludeCard = "200-hours-multistyle";

    var cards = [
        {
            id: "100-hours",
            image: "images/nik_teaching_1.jpg",
            title: "100 Hours YTT in Rishikesh",
            description: "The main purpose of 100-hour yoga teacher training is to create awareness about yoga and help you in finding your path in the right direction.",
            link: "teacher-training/100-hour-ytt"
        },
        {
            id: "200-hours",
            image: "images/nik_asana_1.jpg",
            title: "200 Hours YTT in Rishikesh",
            description: "This comprehensive program will train you in almost every aspect of yoga and will prepare you to become an independent yoga teacher.",
            link: "teacher-training/200-hour-ytt"
        },
        {
            id: "200-hours-multistyle",
            image: "images/nik_chair.jpg",
            title: "200 Hours Multistyle YTT in Rishikesh",
            description: "200-hour multi-style yoga teacher training in Rishikesh will be an amalgam of passive awareness, active involvement, fitness, and wellness.",
            link: "teacher-training/200-hour-multistyle-ytt"
        },
        {
            id: "yoga-retreat",
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
        {#if card.id != excludeCard}
        <Card_vertical image={card.image} title={card.title} description={card.description} link={card.link} />
        {/if}
        {/each}
    </div>
</div>