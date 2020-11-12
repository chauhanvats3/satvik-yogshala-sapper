<script>
    import Card_vertical from "../card_vertical.svelte";

</script>

<style>
    .programs {
        width: 95vw;
        justify-content: space-evenly;
        flex-flow: column wrap;
    }

    .heading {
        display: block;
    }
</style>

<div class="wrapper programs">
    <div class="heading">
        <h1>Our Programs</h1>
        <hr class="sexy_bottom_line" />
    </div>

    <div>
        <Card_vertical image="images/food.jpg" title="Title No 1" desc="asdadq3wdasd q3eq dqawd2 q3dq" />
        <Card_vertical image="images/food.jpg" title="Title No 2" desc="asdadq3wdasd q3eq dqawd2 q3dq" />
        <Card_vertical image="images/food.jpg" title="Title No 3" desc="asdadq3wdasd q3eq dqawd2 q3dq" />
    </div>
</div>