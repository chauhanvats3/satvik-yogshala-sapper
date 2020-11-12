<script>
    import { onMount } from 'svelte';
    export let segment;


</script>


<style>
    .header {
        background-color: #333;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
    }

    .banner {
        min-height: 45px;
        flex-basis: 100%;
        justify-content: space-between;
        padding: 0 30px;

        align-items: stretch;


        background: #00B4DB;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #0083B0, #00B4DB);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to left, #0083B0, #00B4DB);
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }



    p {
        margin: 5px;
    }

    .icon {
        height: 18px;
        width: 18px;
        margin: 3px;
    }

    /* NAVBAR STYLES */
    .navbar {
        flex-basis: 100%;
        padding: 0 30px;
        background-color: rgb(203, 247, 241);
        min-height: 70px;

        background: hsla(263, 42%, 65%, 1);

        background: linear-gradient(0deg, hsla(263, 42%, 65%, 1) 0%, hsla(319, 77%, 86%, 1) 100%);

        background: -moz-linear-gradient(0deg, hsla(263, 42%, 65%, 1) 0%, hsla(319, 77%, 86%, 1) 100%);

        background: -webkit-linear-gradient(0deg, hsla(263, 42%, 65%, 1) 0%, hsla(319, 77%, 86%, 1) 100%);

        filter: progid: DXImageTransform.Microsoft.gradient(startColorstr="#9D80CB", endColorstr="#F7C2E6", GradientType=1);

    }


    .selected {
        border-bottom: 2px solid rgb(50, 51, 13);
    }

    .logo {
        flex-basis: 30%;
        justify-content: flex-start;
    }

    .main_menu {
        flex-basis: 70%;
        justify-content: flex-end;
        align-self: stretch;
        align-items: stretch;
    }

    .main_menu .item {
        margin: 0px 5px;
        align-self: stretch;
    }

    .dropdown {
        flex-flow: column;
        position: relative;
    }

    .dropdown .list {
        flex-flow: column;
        position: absolute;
        top: 100%;
        width: max-content;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0.1s, opacity 0.3s ease-out;
        background-color: aliceblue;
    }

    .dropdown:hover .list {
        visibility: visible;
        opacity: 1;
    }

    .dropdown .list .item {
        width: 100%;
        justify-content: flex-start;
    }

    .btn-wrapper {
        align-items: stretch;
    }

    .item:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    .item a {
        width: 100%;
        justify-content: flex-start;
    }
</style>


<div id="header" class="header">
    <div id="banner" class="banner">
        <div>
            <p>
                <ion-icon name="call-sharp" class="icon"></ion-icon>
                +91-8126726747
            </p>
            <p>
                <ion-icon name="mail-sharp" class="icon"></ion-icon> satvikyogshala@gmail.com
            </p>
        </div>
        <div class="btn-wrapper">
            <button class="btn btn-grad">Apply Now
                <ion-icon name="create-outline" class="icon" style="--ionicon-stroke-width: 40px;"></ion-icon></button>
        </div>

    </div>
    <!-- NAVBAR -->

    <div id="navbar" class="navbar">
        <div class="logo"> <a href="."> Satvik Yogshala</a></div>
        <div class="main_menu">
            <div class="list">

                <div class="item dropdown" class:selected={segment==="200-hour-multistyle-ytt" ||
                    segment==="200-hour-ytt" || segment==="100-hour-ytt" }>
                    <div><a>Teacher Training</a>
                    </div>
                    <div class="list">
                        <div class="item"><a href="200-hour-ytt">200 Hours
                                YTT</a></div>
                        <div class="item"><a href="100-hour-ytt">100 Hours
                                YTT</a></div>
                        <div class="item"><a href="200-hour-multistyle-ytt">200 Hours Multistyle YTT</a></div>
                    </div>
                </div>
                <div class="item" class:selected={segment==="yoga-retreat" }>
                    <div> <a href="yoga-retreat"> Yoga Retreat</a></div>
                </div>

                <div class="item dropdown" class:selected={segment==="about" || segment==="yoga-gurus" ||
                    segment==="gallery" }>
                    <div><a>About</a>
                    </div>
                    <div class="list">
                        <div class="item"><a href="about">About Satvik Yogshala</a></div>
                        <div class="item"><a href="yoga-gurus">Yoga Teachers</a></div>
                        <div class="item"><a href="gallery">Gallery</a></div>

                    </div>
                </div>
                <div class="item" class:selected={segment==="blog" }>
                    <div><a href="blog">Blog</a></div>
                </div>
                <div class="item" class:selected={segment==="contact" }>
                    <a href="contact">Contact Us</a>
                </div>
            </div>
        </div>
    </div>

</div>