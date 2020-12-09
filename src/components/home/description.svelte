<script>
    let desc = "Satvik yogshala in collaboration with Yoga Alliance USA is located at the Yoga Capital of the world, Rishikesh. Spirituality is key to your yoga practice. With our clear vision we have uniquely designed our courses and provide you exceptional guidance so you attain your goals. If you are a beginner or an advanced yogi, you will find that you are able to attain the confidence and knowledge to enhance your journey at Satvik yogshala. Our Teacher Training Courses includes in Traditional Hatha yoga, Ashtanga Vinyasa, Meditation, Mantra, Yoga Philosophy, Yoga Anatomy, Yoga physiology and Ayurveda. Our purpose is to promote growth, awareness and transform individuals, which is necessary for a collective change.";
    let heading = "YOGA TEACHER TRAINING RISHIKESH, INDIA";
</script>


<style>
    .description {
        flex-flow: column wrap;
        margin: 50px 0px 20px 0px;
    }

    .content {
        display: block;

    }

    .image {
        float: right;
        shape-outside: polygon(50% 0, 100% 0, 100% 100%, 0 100%);
        clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%);
        shape-margin: 10px;
        width: 50%;

    }

    img {
        shape-outside: polygon(50% 0, 100% 0, 100% 100%, 0 100%);
        clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%);
        object-fit: cover;
    }

    p {
        display: block;
        margin: 5% 30px;
        overflow-wrap: break-word;


    }

    @media (max-width: 695px) {
        .image {
            width: 100%;
            shape-outside: none;
            clip-path: none;
        }

        img {
            margin-bottom: 20px;
            shape-outside: none;
            clip-path: none;
        }
    }
</style>

<div class="description">
    <div class="heading">
        <h1>{heading}</h1>
        <hr />
    </div>
    <div class="content">
        <div class="image"> <img src="images/yoga3.jpg" alt=""></div>
        <p>{desc}</p>

    </div>
</div>