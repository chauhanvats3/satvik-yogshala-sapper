<script>
    import Card_vertical from "../card_vertical.svelte";


    var cards = [
        {
            image: "images/yoga1.jpg",
            title: "100 Hours YTT in Rishikesh",
            description: "The main purpose of 100-hour yoga teacher training is to create awareness about yoga and help you in finding your path in the right direction."
        },
        {
            image: "images/yoga5.jpg",
            title: "200 Hours YTT in Rishikesh",
            description: "The main purpose of 100-hour yoga teacher training is to create awareness about yoga and help you in finding your path in the right direction."
        },
        {
            image: "images/yoga1.jpg",
            title: "Yoga Retreat in Rishikesh",
            description: "The main purpose of 100-hour yoga teacher training is to create awareness about yoga and help you in finding your path in the right direction."
        }
    ];
</script>

<style>
    .programs {
        width: 100%;
        justify-content: space-evenly;
        flex-flow: column wrap;
        padding: 30px 0;
    }

    .heading {
        display: block;
    }
</style>

<div class="wrapper programs">
    <div class="heading">
        <h1>Our Programs</h1>
        <hr class="sexy_bottom_line" />
    </div>

    <div>
        {#each cards as card}
            <Card_vertical image={card.image} title={card.title} description={card.description} />
        {/each}
    </div>
</div>