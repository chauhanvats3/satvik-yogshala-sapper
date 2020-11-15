<script>
    const facilities = {
        food: {
            image: "images/food2.jpg",
            desc: "We Provide Food, Nobody Else Does that. Aren't we Awesome?"
        },
        spa: {
            image: "images/spa.jpg",
            desc: "We don't provide Spa, sadly."
        },
        travel: {
            image: "images/travel1.jpg",
            desc: "Morning and Evening Walks are included."
        }
    }

    var curImage = facilities.food.image;
    var curDesc = facilities.food.desc;

    const changeFacility = (changeTo) => {
        curImage = facilities[changeTo].image;
        curDesc = facilities[changeTo].desc;
    }
</script>

<style>
    .facilities {
        flex-flow: column wrap;
        width: 100%;
    }

    .card_horizontal {
        width: 95vw;
    }

    img {
        width: 300px;
        height: 300px;
        margin: 20px;
        border-radius: 20px;
        object-fit: cover;
    }

    .options {
        width: 100%;
    }

    .options>div {
        margin: 5px 25px;
        cursor: pointer;
    }


    .card_horizontal>p {
        width: 40%;
    }
</style>

<div class="wrapper facilities">
    <div class="heading">
        <h1>Facilities</h1>
        <hr class="sexy_bottom_line" />
    </div>
    <div class="card_horizontal">
        <img src={curImage} alt="">
        <p>{curDesc}</p>
    </div>
    <hr class="sexy_bottom_line" style="width: 70%; margin: 0;" />
    <div class="options">
        <div on:click={()=>changeFacility("food")}>Food</div>
        <div on:click={()=>changeFacility("spa")}>Spa</div>
        <div on:click={()=>changeFacility("travel")}>Travel</div>
    </div>
</div>