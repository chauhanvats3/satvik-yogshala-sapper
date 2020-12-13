<script>
    import { onMount } from 'svelte';
    import { fade, fly, slide } from 'svelte/transition';
    import { quintInOut, quintOut, linear } from 'svelte/easing';
    import { tweened } from 'svelte/motion';
    import BlogCard from '../blog_card.svelte';


    var blogPost = {
        date: "11-11-11 at 11:17 AM",
        title: 'YOGA TEACHER TRAINING COURSE (YTTC) IN RISHIKESH, INDIA: A LIFE-CHANGING EXPERIENCE',
        slug: 'yttc-in-rishikesh-a-life-changing-experience',
        image: 'images/yoga15.jpg',
        desc: "I got acquainted with yoga five years ago. I used to practice asana regularly on my own, and I also attended some classes once a week at a local studio. I loved its benefits of staying energized, positive, and calm. However, I sensed that after a while, my practice (on physical, mental, spiritual level) was stagnating as if I had come to a dead-end in a maze.",
    };


    var imageDuration = 5000;
    var pBarDuration = (imageDuration / 120) * 10;
    const pBarWidth = tweened(0, {
        duration: pBarDuration,
        easing: linear
    });

    let curIndex = 0;

    var images = [
        {
            src: "images/yoga6.jpg"
        },
        {
            src: "images/flower.jpg"
        },
        {
            src: "images/food1.jpg"
        },

        {
            src: "images/food2.jpg"
        }
    ];
    var curImg = images[curIndex];

    onMount(() => {
        var numImg = images.length;
        const changeImage = setInterval(() => {

            curIndex = curIndex + 1 < numImg ? curIndex + 1 : 0;
            curImg = images[curIndex];
            pBarWidth.set(-10);
        }, imageDuration);

        const progressBar = setInterval(() => {

            pBarWidth.update(n => n + 10);

        }, pBarDuration);

        return () => {
            clearInterval(changeImage);
            clearInterval(progressBar);

        };
    });


</script>
<style>
    .wrapper {
        margin: 50px 0 20px 0;
    }

    .showcase {
        width: 95vw;
        min-height: 400px;
        justify-content: center;
    }

    .gallery,
    .blog {
        width: 40vw;
        min-height: 350px;
        margin: 0 10px;
    }

    .blog :global(.content *) {
        font-size: small;
    }

    .gallery {
        display: block;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        border-radius: 10px;
        transition: all 0.2s;
    }

    .gallery:hover {
        width: 46.5vw;
        box-shadow: 0px 0px 20px rgb(70, 69, 69);
    }

    .gallery>div img {
        position: absolute;
        top: 0;
        width: 100%;
        border-radius: 10px;
    }

    .progress_bar {
        width: var(--p-bar-width);
        max-width: 100%;
        height: 2px;
        position: absolute;
        top: 0;
        left: 0;
        background: rgb(214, 84, 8);
        z-index: 10;
        border-right: 3px solid black;
    }

    @media (max-width: 695px) {
        .gallery {
            width: 90%;
            min-height: 35vh;

        }

        .blog {
            width: 90%;
        }

        .gallery:hover {
            width: 96%;
            box-shadow: 0px 0px 20px rgb(70, 69, 69);
        }
    }
</style>

<div class="wrapper">

    <div class="showcase">
        <div class="blog">

            <BlogCard title={blogPost.title} desc={blogPost.desc} img={blogPost.image} link="blog" date={blogPost.date}
                height="47vh" wrapperClass="smallCard" />

        </div>
        <div class="gallery">

            <div>
                {#each [images[curIndex]] as photo (curIndex)}
                <a href="about/gallery">
                    <img transition:fade|local="{{ duration: 800,easing:quintInOut}}" src={photo.src} alt="" />
                </a>
                {/each}
                <div class="progress_bar" style="--p-bar-width: {$pBarWidth}%"></div>
            </div>

        </div>
    </div>
</div>