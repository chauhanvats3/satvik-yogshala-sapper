<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
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

        }, 3000);
        return () => clearInterval(changeImage);
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
        border: 1px solid black;
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
        margin-left: auto;
        margin-right: auto;
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
                         <a href="about/gallery"><img transition:fade="{{duration:1000}}" src={photo.src} alt=""/></a>
                    {/each}
                </div>
        </div>
    </div>
</div>