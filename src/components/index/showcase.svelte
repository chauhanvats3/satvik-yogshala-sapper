<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';


    var imageDuration = 5000;
    var pBarDuration = imageDuration / 100;
    const pBarWidth = tweened(0, {
        duration: pBarDuration,
        easing: cubicOut
    });
    /*     let pBarWidth = 0;
     */
    let curIndex = 0;

    var images = [
        {
            src: "images/flower.jpg"
        },
        {
            src: "images/food1.jpg"
        },
        {
            src: "images/team/pritam-singh-rawat.jpg"
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
            pBarWidth.set(0);
        }, imageDuration);

        const progressBar = setInterval(() => {

            pBarWidth.update(n => n + 1);

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

    .showcase>div {
        width: 45vw;
        min-height: 350px;
        margin: 0 10px;
    }



    .gallery {
        display: block;
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }

    .gallery>div img {
        position: absolute;
        top: 0;
        width: 100%;
    }

    .progress_bar {
        width: var(--p-bar-width);
        height: 5px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgb(31, 172, 182);
        z-index: 10;
        border-top: 1px solid black;
        border-right: 1px solid black;
        border-radius: 2px;
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
                         <a href="about/gallery"><img transition:fade|local src={photo.src} alt=""/></a>
                    {/each}
                </div>
                <div class="progress_bar" style="--p-bar-width: {$pBarWidth}%"></div>
        </div>
    </div>
</div>