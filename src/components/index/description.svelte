<script>
    let desc = "Satvik yogshala in collaboration with Yoga Alliance USA is located at the Yoga Capital of the world, Rishikesh. Spirituality is key to your yoga practice. With our clear vision we have uniquely designed our courses and provide you exceptional guidance so you attain your goals. If you are a beginner or an advanced yogi, you will find that you are able to attain the confidence and knowledge to enhance your journey at Satvik yogshala. Our Teacher Training Courses includes in Traditional Hatha yoga, Ashtanga Vinyasa, Meditation, Mantra, Yoga Philosophy, Yoga Anatomy, Yoga physiology and Ayurveda. Our purpose is to promote growth, awareness and transform individuals, which is necessary for a collective change.";
    let heading = "YOGA TEACHER TRAINING RISHIKESH, INDIA";
</script>
<!-- <style>
    .description {
        background-color: var(--bg1);
        padding: 0 0 0 100px;
    }

    div {
        width: 100%;
        display: block;
    }

    h1 {
        margin: 20px 0 auto auto;
    }

    img {

        float: right;
        shape-outside: polygon(50% 0, 100% 0, 100% 100%, 0 100%);
        clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%);
        shape-image-threshold: 0.5;
        margin: 0 0 0 20px;
    }

    p {
        display: block
    }

    .content {
        width: 100%;
        margin: auto;
    }
</style> -->

<!-- 
<div class="description">
    <div class="heading">
        <h1>{heading}</h1>
        <hr class="sexy_bottom_line" />
    </div>
    <div class="content">
        <img src="images/yoga3.jpg" alt="">
        <p>
            {desc}
        </p>
    </div>
</div> -->

<div class="description">

    <div class="image">
        <img src="images/yoga3.jpg" alt="">
    </div>
    <div class="content">
        <div class="heading">
            <h1>{heading}</h1>
            <hr />
        </div>

        <p>
            {desc}
        </p>

    </div>
</div>


<style>
    .description {
        width: 98vw;
        height: 80vh;
        position: relative;
    }

    .image {
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0%;
        right: 0%;
        z-index: -100;
    }

    img {
        height: 426px;
        width: 600px;

        shape-outside: polygon(50% 0, 100% 0, 100% 100%, 0 100%);
        clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%);
    }

    .content {
        width: 70vw;
        position: absolute;
        top: 0%;
        left: 0%;
        height: 100%;
        flex-flow: column wrap;
        padding: 10px 20px;

    }
</style>