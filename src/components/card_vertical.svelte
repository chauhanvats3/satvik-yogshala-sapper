<script>
    export let image;
    export let desc;
    export let title
</script>

<style>
    div {
        flex-flow: column wrap;
        width: 250px;
        margin: 10px;
        border: 1px solid black;
        /*         padding: 1px 1px;
 */
        border-radius: 20px 20px 0 0;
    }

    img {
        border-radius: 20px 20px 0 0;
    }

    p {
        margin: 10px;
        text-align: center;
    }

    h3 {
        margin: 10px 0 0 0;
    }
</style>

<div>
    <img src={image} alt="">
    <h3>{title}</h3>
    <p>{desc}</p>
</div>