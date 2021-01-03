<script>

    import { onMount } from 'svelte';
    import { fade, fly, slide } from 'svelte/transition';
    import { quintInOut, quintOut, linear } from 'svelte/easing';
    import { tweened } from 'svelte/motion';

    const date = new Date();
    const year = date.getFullYear();



    var imageDuration = 5000;
    var pBarDuration = (imageDuration / 120) * 10;
    const pBarWidth = tweened(0, {
        duration: pBarDuration,
        easing: linear
    });

    let curIndex = 0;

    var images = [

        { src: "images/nik_aeroplane.jpg" },
        { src: "images/ganga_arti.jpg" },
        { src: "images/nik_with_students.jpg" },
        { src: "images/nik_garden.jpg" }
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
    footer {
        width: 100vw !important;
        flex-flow: column wrap;
        background-color: #849fdb5b;
        padding-top: 10vh;
        -webkit-clip-path: polygon(0 10vh, 100% 0%, 100% 100%, 0 100%);
        clip-path: polygon(0 10vh, 100% 0%, 100% 100%, 0 100%);
    }

    footer>div {
        align-items: stretch;
        width: 95%;
    }

    .category {
        flex-flow: column wrap;
        flex: 1 1 auto;
        justify-content: flex-start;
        margin: 20px 5px;
    }

    .heading {
        font-weight: bold;
    }

    .content {
        flex-flow: column wrap;
        align-items: flex-start;
        margin-left: 10px;
    }

    .content>p,
    .content>div {
        margin: 5px 0;
    }



    .gallery {
        min-width: 30%;
        min-height: 100px;
        display: block;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        border-radius: 10px;
        transition: all 0.5s;
    }

    .gallery:hover,
    .gallery:active,
    .gallery:focus {
        box-shadow: 0 0 20px 1px rgba(78, 78, 78, 0.616);
    }

    .gallery>div img {
        position: absolute;
        top: -10%;
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
        background: rgba(8, 138, 214, 0.603);
        z-index: 10;
        border-right: 3px solid black;
    }

    .faq div {
        margin-bottom: 18px;
    }

    .link {
        margin: 0 5px;
    }


    footer>div {
        margin: 10px;
    }

    .banner {
        width: 98vw;
        flex-grow: 1;
    }

    .banner>div {
        font-size: .80em;
        margin: 0 15px;
    }

    .social>a {
        text-decoration: none;
    }

    .fab {
        cursor: pointer;
        font-size: 32px;
        margin: 5px 10px;
    }

    .fa-youtube:hover {
        color: #FF0000;
    }

    .fa-twitter:hover {
        color: #00ACEE;
    }

    .fa-facebook-f:hover {
        color: #3b5998;
    }

    .fa-linkedin-in:hover {
        color: #0e76a8;
    }

    .fa-instagram:hover {
        color: #cc2366;

    }

    @media(max-width: 912px) {
        .gallery {
            min-width: 40%;
            height: 300px;
        }
    }

    @media(max-width: 545px) {
        .gallery {
            min-width: 60%;
            height: 190px;
        }
    }
</style>
<footer>
    <div class="categories">
        <div class="category">
            <div class="heading">Yoga Teachers Training</div>
            <div class="content">
                <p><a href="yoga-retreat#hero">Yoga Retreat</a></p>
                <p><a href="teacher-training/100-hour-ytt#hero">100 Hours YTT</a></p>
                <p><a href="teacher-training/200-hour-ytt#hero">200 Hours YTT</a></p>
                <p><a href="teacher-training/200-hour-multistyle-ytt#hero">200 Hours Multistyle YTT</a></p>
            </div>
        </div>
        <div class="category faq">
            <div class="heading"><a href="about/faq#hero">FAQ</a></div>
            <div class="heading"><a href="about/gallery#hero">GALLERY</a></div>
            <div class="heading"><a href="blog#hero">BLOG</a></div>
        </div>
        <div class="category">
            <div class="heading">Contact Us</div>
            <div class="content">
                <div style="flex-flow: column wrap;">
                    <p><a href="tel:+918126726747" target="_blank" rel="noopener">+91-8126726747</a></p>
                    <a href="mailto:satvikyogshala@gmail.com" target="_blank" rel="noopener">
                        <p>satvikyogshala@gmail.com</p>
                    </a>
                </div>
                <div style="flex-flow: column;">
                    <p style="font-weight: bold;">Address:</p>
                    <a href="https://g.page/satvikyogshala?share" target="_blank" rel="noopener">
                        <p>Badrinath Road, NH-58, <br />Tapovan, Rishikesh, India</p>
                    </a>
                </div>

            </div>
        </div>

        <div class="category gallery">

            <div>
                {#each [images[curIndex]] as photo (curIndex)}
                <a href="about/gallery#hero">
                    <img transition:fade|local="{{ duration: 800,easing:quintInOut}}" src={photo.src} alt="" />
                </a>
                {/each}
                <div class="progress_bar" style="--p-bar-width: {$pBarWidth}%"></div>
            </div>
        </div>
    </div>
    <div class="social">

        <a rel="noopener" href="https://twitter.com/satvikyogshala" target="_blank">
            <p class="invisible">Twitter</p> <i class="fab fa-twitter"></i>
        </a>
        <a rel="noopener" href="https://www.facebook.com/satvikyogshala/" target="_blank">
            <p class="invisible">Facebook</p> <i class="fab fa-facebook-f">
            </i>
        </a>
        <a rel="noopener" href="https://www.instagram.com/satvikyogshala/" target="_blank">
            <p class="invisible">Instagram</p> <i class="fab fa-instagram"></i>
        </a>
        <a rel="noopener" href=".">
            <p class="invisible">YouTube</p> <i class="fab fa-youtube"></i>
        </a>
        <a rel="noopener" href="." target="_blank">
            <p class="invisible">LinkedIn</p> <i class="fab fa-linkedin-in"> </i>
        </a>
    </div>
    <div class="banner">
        <div>Copyright © {year} <a href=".#hero" class="link"> Satvik Yogshala. </a>
            <a rel="noopener" href="https://youtu.be/ub82Xb1C8os" class="link" target="_blank">
                All Rights Reserved
            </a>
        </div>

        <div>Terms and Conditions</div>
        <div>Privacy Policy</div>
        <div><a class="link" href="https://github.com/chauhanvats3" target="_blank" rel="noopener">Made By Vatsal</a>
        </div>
    </div>
</footer>