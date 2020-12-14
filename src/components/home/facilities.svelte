<script>
    import { fade, fly, slide } from 'svelte/transition';
    import { quintInOut } from 'svelte/easing';

    const facilities = [
        {
            id: "food",
            image: "images/food2.jpg",
            desc: "Satvik Yogshala provides light and healthy vegetarian foods. Fresh & delicious quality food."
        }, {
            id: "spa",
            image: "images/spa.jpg",
            desc: "Satvik Yogshala offers you the best Spa for Ayurvedic treatments and massages."
        }, {
            id: "travel",
            image: "images/travel1.jpg",
            desc: "We organize an excursion for leisure, education, or physical purposes twice in a month."
        }, {
            id: "accomodation",
            image: "images/travel2.jpg",
            desc: "Clean Accommodation at Peaceful Location, luxurious & comfortable rooms."
        }
    ];

    var curImage = facilities[0].image;
    var curDesc = facilities[0].desc;
    var selected_option = 'food';
    var selected_index = 0;
    const changeFacility = (changeTo) => {
        facilities.forEach((facility, index) => {
            if (facility.id === changeTo) {
                curImage = facilities[index].image;
                curDesc = facilities[index].desc;
                selected_option = changeTo;
                selected_index = index;
            }
        });
    }
</script>

<style>
    .facilities {
        flex-flow: column wrap;
        width: 100%;
        margin: 50px 0 20px 0;
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

    .selected_option {
        border-bottom: 2px solid rgb(223, 134, 134);

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
        position: relative;
        height: 35px;
    }

    .description p {
        width: 100%;
        position: absolute;
        padding: 5px 10px;
    }

    @media (max-width:695px) {
        .para_overlay {
            height: 20%;
        }

        .card_horizontal {
            width: 90vw;
            height: 500px;
            overflow: hidden;
            position: relative;
            border-radius: 20px;
        }
    }

    @supports (backdrop-filter: blur()) or (-webkit-backdrop-filter: blur()) {

        .para_overlay {
            background: rgba(255, 255, 255, 0.13);
            backdrop-filter: blur(2.5px);
            -webkit-backdrop-filter: blur(2.5px);
        }


    }
</style>

<div class="facilities">
    <div class="heading">
        <h1 class="indie-flower">Facilities</h1>
        <hr class="sexy_bottom_line" />
    </div>
    <div class="card_horizontal">
        {#each [facilities[selected_index]] as facility (selected_index)}

        <img src={facility.image} alt="" transition:slide|local="{{duration: 1000, easing: quintInOut }}">
        {/each}
        <div class="overlay">
            <div class="options">
                <div on:click={()=>changeFacility("food")} class:selected_option={selected_option=='food'}>Food</div>
                <div on:click={()=>changeFacility("accomodation")}
                    class:selected_option={selected_option=='accomodation'}>Accomodation
                </div>
                <div on:click={()=>changeFacility("spa")} class:selected_option={selected_option=='spa'}>Spa</div>
                <div on:click={()=>changeFacility("travel")} class:selected_option={selected_option=='travel'}>Travel
                </div>
            </div>
            <div class="description">
                <div class="para_overlay">

                    {#each [facilities[selected_index]] as facility (selected_index)}
                    <p in:fly|local="{{delay: 250, x: -500, duration: 1000 }}"
                        out:fly|local="{{ x: 500, duration: 1000 }}">{curDesc}</p>
                    {/each}
                </div>


            </div>

        </div>
    </div>
    <!--     <hr class="sexy_bottom_line" style="width: 70%; margin: 0;" />
 -->

</div>