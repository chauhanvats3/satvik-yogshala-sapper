<script>
    const facilities = {
        food: {
            image: "images/food2.jpg",
            desc: "Satvik Yogshala provides light and healthy vegetarian foods. Fresh & delicious quality food."
        },
        spa: {
            image: "images/spa.jpg",
            desc: "Satvik Yogshala offers you the best Spa for Ayurvedic treatments and massages."
        },
        travel: {
            image: "images/travel1.jpg",
            desc: "We organize an excursion for leisure, education, or physical purposes twice in a month."
        },
        accomodation: {
            image: "images/travel2.jpg",
            desc: "Clean Accommodation at Peaceful Location, luxurious & comfortable rooms."
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
        width: 75vw;
        height: 400px;
        overflow: hidden;
        position: relative;
        border-radius: 20px;
    }

    img {
        height: 100%;
        width: 100%;

        object-fit: cover;
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
        flex-flow: column nowrap;
        justify-content: flex-start;
        background: #606c8862;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #3f4c6b62, #606c8862);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #3f4c6b62, #606c8862);
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }


    .options {
        width: 100%;
    }

    .options>div {
        margin: 5px 25px;
        cursor: pointer;
    }


    .description {
        width: 100%;
        flex: 1 1 80%;
    }

    .para_overlay {
        width: 100%;
        background: #606c8862;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #3f4c6b91, #606c8891);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #3f4c6b91, #606c8891);
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        padding: 5px 10px;
    }

    .description p {
        width: 100%;
    }
</style>

<div class="facilities">
    <div class="heading">
        <h1>Facilities</h1>
        <hr class="sexy_bottom_line" />
    </div>
    <div class="card_horizontal">
        <img src={curImage} alt="">
        <div class="overlay">
            <div class="options">
                <div on:click={()=>changeFacility("food")} >Food</div>
                <div on:click={()=>changeFacility("accomodation")}>Accomodation</div>
                <div on:click={()=>changeFacility("spa")}>Spa</div>
                <div on:click={()=>changeFacility("travel")}>Travel</div>
            </div>
            <div class="description">
                <div class="para_overlay">
                    <p>{curDesc}</p>
                </div>
            </div>

        </div>
    </div>
    <!--     <hr class="sexy_bottom_line" style="width: 70%; margin: 0;" />
 -->

</div>