<script>
    import Breadcrumb from '../../components/breadcrumb.svelte';

    var path = [
        { name: "About", href: "." },
        { name: "Gallery", href: "about/gallery" }
    ]


    var images = [
        { src: "images/indian_food.jpg" },
        { src: "images/accomodation.jpg" },
        { src: "images/ganga_arti.jpg" }, { src: "images/yoga_mat.jpg" }, { src: "images/laundry.jpg" }, { src: "images/book_stack.jpg" }, { src: "images/nike_taching_1.jpg" }, { src: "images/nike_garden.jpg" }, { src: "images/nike_aeroplane.jpg" }, { src: "images/nike_bhujang.jpg" }, { src: "images/nike_asana_1.jpg" }, { src: "images/nike_teaching_2.jpg" }, { src: "images/nike_with_students.jpg" }, { src: "images/nike_asana_2.jpg" }, { src: "images/nike_alignment.jpg" }, { src: "images/nike_chair.jpg" }];


    var col1 = [];
    var col2 = [];
    var col3 = [];
    var col4 = [];
    images.forEach(function (value, i) {
        var app_ind = i % 4;
        if (app_ind == 0) {
            col1.push(value);
        } else if (app_ind == 1) {
            col2.push(value);
        } else if (app_ind == 2) {
            col3.push(value);
        } else if (app_ind == 3) {
            col4.push(value);
        }
    });
</script>

<style>
    .wrapper {
        flex-direction: column;
    }

    .blankspace {
        width: 100%;
        height: 80px;
    }

    .row {
        display: -ms-flexbox;
        /* IE10 */
        display: flex;
        -ms-flex-wrap: wrap;
        /* IE10 */
        flex-wrap: wrap;
        align-items: flex-start;
        padding: 0 4px;
        margin-bottom: 20px;
    }

    /* Create four equal columns that sits next to each other */
    .column {
        -ms-flex: 25%;
        /* IE10 */
        flex: 25%;
        max-width: 25%;
    }

    .image_wrap {
        vertical-align: middle;
        width: 100%;
        cursor: pointer;
        overflow: hidden;
        margin: 5px;
    }

    .image_wrap img {
        width: 100%;
        transition: 0.3s all ease-in-out;
    }

    .image_wrap:hover img {
        transform: scale(1.2);
    }


    /* Responsive layout - makes a two column-layout instead of four columns */
    @media screen and (max-width: 800px) {
        .column {
            flex: 50%;
            max-width: 50%;
        }
    }

    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
        .column {
            flex: 100%;
            max-width: 100%;
        }

        .blankspace {
            height: 50px;
        }

        .wrapper {
            margin-top: 50px;
        }
    }
</style>
<svelte:head>
    <title>Gallery - Satvik Yogshala</title>
</svelte:head>
<div class="wrapper">
    <div class="blankspace"></div>
    <div class="heading">
        <h1 class="indie-flower">GALLERY</h1>
        <hr>
    </div>
    <Breadcrumb path={path} />
    <div class="gallery">
        <div class="row">
            <div class="column">
                {#each col1 as img}
                <div class="image_wrap"><img src="{img.src}" alt=""></div> {/each}
            </div>
            <div class="column">
                {#each col2 as img}
                <div class="image_wrap"><img src="{img.src}" alt=""></div>
                {/each}
            </div>
            <div class="column">
                {#each col3 as img}
                <div class="image_wrap"><img src="{img.src}" alt=""></div> {/each}
            </div>
            <div class="column">
                {#each col4 as img}
                <div class="image_wrap"><img src="{img.src}" alt=""></div> {/each}
            </div>
        </div>
    </div>
</div>