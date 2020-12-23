<script>
    import { goto } from '@sapper/app';

    export let image;
    export let description;
    export let title;
    export let link;

    const goToLink = () => {
        goto(`/${link}`);
    }
</script>

<style>
    .card {
        width: 250px;
        flex-flow: column wrap;
        margin: 15px;
        height: 400px;
        position: relative;
        overflow: hidden;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        top: 0%;
        z-index: -10;
    }



    .overlay {
        width: 100%;
        height: 100%;
        color: aliceblue;
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        color: #FFF;
        flex-flow: column wrap;
        justify-content: flex-end;

    }

    .overlay:hover .content,
    .overlay:focus .content {
        transform: translateY(0%);
        transition: all 0.5s;
    }

    .content {
        position: relative;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
        padding: 10px;
        transform: translateY(300px);
        background: rgba(68, 68, 68, 0.329);

        border-top-right-radius: 11px;
        border-top-left-radius: 11px;
        transition: all 1s;

    }


    p {
        margin: 10px;
        font-weight: 200;
    }

    .btn {
        position: absolute;
        bottom: 0;
        margin: 10px auto;
        padding: 5px;
        cursor: pointer;
        border: none;
        border-radius: 10px;
    }


    .gradient-text {
        font-weight: 900;
        text-shadow: none;
        transition: 0.5s;
        background-size: 150% auto;
        /* Fallback: Set a background color. */
        background-color: red;

        /* Create the gradient. */
        background-image: linear-gradient(45deg, #f3ec78, #af4261);

        /* Set the background size and repeat properties. */
        background-repeat: repeat;

        /* Use the text as a mask for the background. */
        /* This will show the gradient as a text color rather than element bg. */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }

    .gradient-text:hover {
        background-position: right center;
        /* change the direction of the change here */
        color: #fff;
        text-decoration: none;

    }

    @media (max-width:430px) {
        .card {
            width: 80%;

            height: 500px;
        }

        .content {
            transform: translateY(380px);
        }
    }


    @supports (backdrop-filter: blur()) or (-webkit-backdrop-filter: blur()) {

        .overlay .content {

            border-top-right-radius: 11px;
            border-top-left-radius: 11px;
            background: rgba(68, 68, 68, 0.329);
            backdrop-filter: blur(2.5px);
            -webkit-backdrop-filter: blur(2.5px);

        }


    }
</style>

<div class="card">
    <img src={image} alt={title}>

    <div class="overlay">
        <div class="content">
            <h1>{title}</h1>
            <p>{description}</p>
            <div class="btn">
                <a href="{link}" class="gradient-text">
                    Know More
                </a>
            </div>
        </div>

    </div>

</div>