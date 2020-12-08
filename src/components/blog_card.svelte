<script>
    export let title;
    export let desc;
    export let img;
    export let link;
    export let date;
</script>

<style>
    a {
        text-decoration: none;
        width: 100%;
    }

    .wrapper {
        flex-direction: row;
        width: 90%;
        height: 400px;
        margin: 30px 0;
        border-radius: 20px;
        border: 2px solid rgb(0, 174, 255);
        padding: 10px;
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
        top: -50%;
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

    .desc {
        margin: 10px 0px;
        width: 100%;
        text-align: justify;

    }
</style>


<div class="wrapper">

    <div class="image">
        <img src="{img}" alt="{title}">
    </div>
    <div class="content">
        <a rel="prefetch" href={link}>

            <div class="heading">
                <h1>{title}</h1>
            </div>
            <div class="info">{date}</div>
            <div class="desc">{desc}</div>
        </a>
    </div>

</div>