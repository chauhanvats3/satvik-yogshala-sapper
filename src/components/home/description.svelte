<script>
    let desc = "Satvik Yogshala, in collaboration with Yoga Alliance USA, is located at the Yoga Capital of the world, Rishikesh. Spirituality is key to your yoga practice. With our clear vision, we have uniquely designed our courses to provide you with exceptional guidance so you can attain your goals. Whether you are a beginner or an advanced yogi, you will find yourself able to attain the confidence and knowledge necessary to enhance your journey here at Satvik Yogshala. Our Teacher Training Courses include modalities from Traditional Hatha Yoga, Ashtanga Vinyasa, Meditation, Mantra, Yoga Philosophy, Yoga Anatomy, Yoga Physiology and Ayurveda. Our purpose is to promote growth, awareness and transform individuals, which will be necessary to achieve transformation at a collective level.";
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
        shape-outside: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
        -webkit-clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
        clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
        shape-margin: 10px;
        width: 50%;

    }

    img {
        shape-outside: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
        -webkit-clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
        clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
        object-fit: cover;
    }

    p {
        display: block;
        overflow-wrap: break-word;
        width: 80%;
        margin: 5% auto;

    }

    @media (max-width: 695px) {
        .image {
            width: 100%;
            shape-outside: none;
            -webkit-clip-path: none;
            clip-path: none;
        }

        img {
            margin-bottom: 20px;
            shape-outside: none;
            -webkit-clip-path: none;
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
        <div class="image"> <img src="images/nik_bhujang.jpg" alt=""></div>
        <p>{desc}</p>

    </div>
</div>