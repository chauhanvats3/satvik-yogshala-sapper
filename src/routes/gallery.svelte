<script>

    var images = [
        {
            src: "images/flower.jpg",
            span_row: "3",
            span_col: "3"
        },
        {
            src: "images/food1.jpg",
            span_row: "2",
            span_col: "2"
        },
        {
            src: "images/team/pritam-singh-rawat.jpg",
            span_row: "2",
            span_col: "2"
        },
        {
            src: "images/food2.jpg",
            span_row: "2",
            span_col: "2"
        },
        {
            src: "images/pritam_namaskar.jpg",
            span_row: "3",
            span_col: "3"
        },
        {
            src: "images/spa.jpg",
            span_row: "4",
            span_col: "4"
        },
        {
            src: "images/travel1.jpg",
            span_row: "2",
            span_col: "2"
        },
        {
            src: "images/travel2.jpg",
            span_row: "3",
            span_col: "3"
        },
        {
            src: "images/team/yogi-vipulraj.jpg",
            span_row: "2",
            span_col: "2"
        },
        {
            src: "images/yoga1.jpg",
            span_row: "4",
            span_col: "4"
        },
        {
            src: "images/yoga2.jpg",
            span_row: "3",
            span_col: "3"
        },
        {
            src: "images/yoga3.jpg",
            span_row: "2",
            span_col: "2"
        },
        {
            src: "images/yoga4.jpg",
            span_row: "2",
            span_col: "2"
        },
        {
            src: "images/yoga5.jpg",
            span_row: "2",
            span_col: "2"
        },
        {
            src: "images/team/yogi-pankaj-paswan.jpg",
            span_row: "1",
            span_col: "1"
        },
        {
            src: "images/yoga6.jpg",
            span_row: "2",
            span_col: "3"
        },
    ];


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
    }
</style>

<div class="gallery">
    <div class="row">
        <div class="column">
            {#each col1 as img}
            <div class="image_wrap"><img src="{img.src}" alt=""></div>            {/each}
        </div>
        <div class="column"> 
            {#each col2 as img}
            <div class="image_wrap"><img src="{img.src}" alt=""></div>
        {/each}
    </div>
        <div class="column"> 
            {#each col3 as img}
            <div class="image_wrap"><img src="{img.src}" alt=""></div>        {/each}
    </div>
        <div class="column"> 
            {#each col4 as img}
            <div class="image_wrap"><img src="{img.src}" alt=""></div>        {/each}
    </div>
    </div>
</div>