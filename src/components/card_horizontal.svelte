<script>
    export let image;
    export let desc;
    export let title;
    export let id;
</script>

<style>
    .card_horizontal {
        margin: 20px;
        max-width: 75vw;
        padding: 20px;
        border: 2px solid var(--darkyellow);
        border-radius: 20px;
        flex-direction: column;

    }


    img {
        border-radius: 20px;
    }


    .content {
        flex-direction: row;
        max-width: 90%;
    }

    @media (max-width: 700px) {
        .content {
            max-width: 100%;
        }
    }
</style>

<div class="card_horizontal" id={id}>
    <img src={image} alt="">
    <div class="content">
        <div class="heading">
            <h3>{title}</h3>
            <hr />
        </div>
        <p>{@html desc}</p>
    </div>
</div>