<script>
    let desc = "Satvik yogshala in collaboration with Yoga Alliance USA is located at the Yoga Capital of the world, Rishikesh. Spirituality is key to your yoga practice. With our clear vision we have uniquely designed our courses and provide you exceptional guidance so you attain your goals. If you are a beginner or an advanced yogi, you will find that you are able to attain the confidence and knowledge to enhance your journey at Satvik yogshala. Our Teacher Training Courses includes in Traditional Hatha yoga, Ashtanga Vinyasa, Meditation, Mantra, Yoga Philosophy, Yoga Anatomy, Yoga physiology and Ayurveda. Our purpose is to promote growth, awareness and transform individuals, which is necessary for a collective change.";
    let heading = "YOGA TEACHER TRAINING RISHIKESH, INDIA";
    export let classGiven;
</script>
<style>
    div {
        width: 70vw;
        margin: 40px 20px;
        display: block;
    }

    h1 {
        margin: 20px 0 auto auto;
    }

    img {
        border-radius: 50%;
        height: 250px;
        width: 250px;
        float: right;
        shape-outside: circle(50%);
        shape-image-threshold: 0.5;
        margin: 10px 25px;
    }

    p {
        display: block
    }

    .description {}
</style>


<div class="wrapper {classGiven}">
    <h1>{heading}</h1>
    <hr class="sexy_bottom_line" />
    <img src="images/food.jpg" alt="">
    <p>
        {desc}
    </p>
</div>