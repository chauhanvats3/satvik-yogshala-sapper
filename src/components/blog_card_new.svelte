<script>
    export let title;
    export let desc;
    export let img;
    export let link;
    export let date;

    import { onMount } from 'svelte'


    link = link + "#body";
</script>

<style>
    .blog_card {
        width: 85%;
        max-height: 600px;
        margin: 20px 5px;
        border-radius: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        position: relative;
        transition: all 0.3s;
    }

    .blog_card:hover {
        width: 90%;

    }

    img {
        border-radius: 10px;
        object-fit: initial;
    }

    .content {
        position: absolute;
        top: 0;
        right: 0;
        width: 450px;
        height: 100%;
        padding: 10px 10px;
        background: rgba(255, 255, 255, 0.418);
        border-radius: 10px;
    }

    h1 {
        font-weight: 700;
        font-size: 1.7em;
    }

    .info {
        background-color: var(--darkyellow);
        padding: 3px 20px;
        clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
        color: var(--darkgray);
        font-weight: 400;
        font-size: 1.4;
    }

    .desc {
        font-size: 1.2em;
        text-align: justify;
    }


    @media (max-width: 850px) {
        h1 {
            font-size: 1.2em;
        }

        .info {
            font-size: 1em;
        }

        .desc {
            font-size: 0.8em;
        }
    }


    @media (max-width: 650px) {
        .content {
            width: 100%;
        }
    }

    @media(max-width: 400px) {
        h1 {
            font-size: 0.8em;
            font-weight: 900;
        }
    }

    @supports (backdrop-filter: blur()) or (-webkit-backdrop-filter: blur()) {

        .content {
            padding: 10px 20px;
            background: rgba(255, 255, 255, 0.24);
            backdrop-filter: blur(2.5px);
            -webkit-backdrop-filter: blur(2.5px);
        }


    }
</style>

<div class="blog_card">
    <a rel="prefetch" href={link}>

        <div class="image">
            <img src="{img}" alt="{title}">
        </div>
        <div class="content">

            <div class="heading">
                <h1>{title}</h1>
            </div>
            <div class="info">Posted On : {date}</div>
            <div class="desc">{desc}</div>
        </div>
    </a>
</div>