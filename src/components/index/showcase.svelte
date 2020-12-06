<script>
    import { onMount } from 'svelte';
    import { fade, fly, slide } from 'svelte/transition';
    import { quintInOut, quintOut, linear } from 'svelte/easing';
    import { tweened } from 'svelte/motion';


    var imageDuration = 5000;
    var pBarDuration = (imageDuration / 120) * 10;
    const pBarWidth = tweened(0, {
        duration: pBarDuration,
        easing: linear
    });
    /*     let pBarWidth = 0;
     */
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
    .showcase {
        width: 95vw;
        min-height: 400px;
        justify-content: center;
    }

    .gallery,
    .blog {
        width: 45vw;
        min-height: 350px;
        margin: 0 10px;
    }



    .gallery {
        display: block;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        border-radius: 10px;
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
        bottom: 0;
        left: 0;
        background: rgb(106, 209, 216);
        z-index: 10;
        border-right: 3px solid black;
    }

    @media (max-width: 695px) {
        .gallery {
            width: 100%;
        }
    }
</style>

<div class="wrapper">
    <div class="heading">
        <h1>Showcase</h1>
        <hr class="sexy_bottom_line" />
    </div>
    <div class="showcase">
        <div class="blog">
            BLOG
        </div>
        <div class="gallery">
            <div>
                {#each [images[curIndex]] as photo (curIndex)}
                         <a href="about/gallery">
                            <img 
                            transition:fade|local="{{ duration: 800,easing:quintInOut}}"
                            src={photo.src} alt=""/>
                        </a>
                    {/each}
                </div>
                <div class="progress_bar" style="--p-bar-width: {$pBarWidth}%"></div>
        </div>
    </div>
</div>