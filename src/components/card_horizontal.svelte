<script>
    export let image;
    export let desc;
    export let title
</script>

<style>
    .card_horizontal {
        margin: 20px;
        max-width: 95vw;
        padding: 20px;
        border: 2px solid rgb(248, 174, 174);
        border-radius: 20px;
        flex-direction: column;

    }


    img {
        border-radius: 20px;
    }


    .content {
        flex-direction: row;
        max-width: 75%;
    }
</style>

<div class="card_horizontal">
    <img src={image} alt="">
    <div class="content">
        <div class="heading">
            <h3>{title}</h3>
            <hr />
        </div>
        <p>{@html desc}</p>
    </div>
</div>