<script>
    export let title;
    export let desc;
    export let img;
    export let link;
    export let date;
    export let height = "400px";

    import { onMount } from 'svelte'
    let wrapper;


    onMount(() => {
        setTimeout(() => {
            wrapper.style.height = height;
        }, 1000)
    });

</script>

<style>
    a {
        text-decoration: none;
        width: 100%;
    }

    .wrapper {
        flex-direction: row;
        width: 80%;
        margin: 30px 0;
        border-radius: 20px;
        border: 2px solid rgb(0, 174, 255);
        padding: 10px;
        transition: all 0.2s;
    }

    .wrapper:hover {
        height: 415px;
        width: 90%;
        box-shadow: 0px 0px 20px rgba(104, 186, 211, 0.815);
    }

    .image {
        width: 60%;
        height: 100%;
        overflow: hidden;
        border-radius: 20px;
        position: relative;
    }

    img {
        width: 100%;
        border-radius: 10px;
        position: absolute;
        top: -20%;
    }

    .content {
        width: 40%;
        height: 100%;
        flex-flow: column nowrap;
        justify-content: flex-start;
        overflow: hidden;
        padding: 10px;
    }

    .heading {
        justify-self: flex-start;
        margin: 10px 0px;
        width: 100%;
    }

    .info {
        background-color: rgb(108, 175, 172);
        padding: 3px 20px;
        clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
        color: white;
    }

    .desc {
        margin: 10px 0px;
        width: 100%;
        text-align: justify;

    }

    @media (max-width: 740px) {
        .wrapper {
            height: 500px;
            width: 95%;
        }

        .wrapper:hover {
            height: 510px;
            width: 92%;
        }

        .image {
            width: 100%;
            height: 60%;
        }

        .content {
            width: 100%;
            height: 40%;
        }

        h1 {
            font-size: small;
        }

        .info {
            font-size: small;
        }
    }
</style>

<a rel="prefetch" href={link}>

    <div class="wrapper" bind:this={wrapper}>

        <div class="image">
            <img src="{img}" alt="{title}">
        </div>
        <div class="content">

            <div class="heading">
                <h1>{title}</h1>
            </div>
            <div class="info">Date : {date}</div>
            <div class="desc">{desc}</div>
        </div>

    </div>
</a>