<script>
    import { onMount } from 'svelte';
    export let segment;

</script>


<style>
    .header {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
    }

    .banner {
        height: 30px;
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

    .banner>div,
    .banner>div>a {
        height: 100%;
        font-weight: 200;
    }

    p {
        margin: 5px;
    }

    .icon {
        height: 16px;
        width: 16px;
        margin: 3px;
    }

    .btn-wrapper {
        align-items: stretch;
        height: 100%;
    }

    .btn {
        border: 2px solid black;
    }

    /* NAVBAR STYLES */
    .navbar {
        flex-basis: 100%;
        padding: 0 30px;
        min-height: 50px;
        background: #3a797e8e;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #3a797e8e, #3a797e8e);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #3a797e8e, #3a797e8e);

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
        padding: 0px 5px;
        align-self: stretch;
    }

    .dropdown {
        flex-flow: column;
        position: relative;
        border-bottom: 2px solid transparent;
    }

    .main_menu>.list>.item:hover,
    .main_menu>.list>.item:focus,
    .main_menu>.list>.item:active {
        background: #3a797e8e;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #3a797e8e, #3a797e8e);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #3a797e8e, #3a797e8e);

    }

    .selected {
        border-bottom: 2px solid rgb(50, 51, 13);
    }

    .dropdown .list {

        flex-flow: column;
        position: absolute;
        top: 104%;
        width: max-content;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0.1s, opacity 0.3s ease-out;
        background: #3a797e8e;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #3a797e8e, #3a797e8e);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #3a797e8e, #3a797e8e);

        padding: 10px;
    }

    .dropdown:hover .list,
    .dropdown:active .list,
    .dropdown:focus .list {
        visibility: visible;
        opacity: 1;
    }

    .dropdown .list .item {
        width: 100%;
        justify-content: flex-start;
        margin: 2px;
    }

    .item:hover a,
    .item:focus a,
    .item:active a {
        cursor: pointer;

    }

    .item a {
        font-weight: 500;
        width: 100%;
        justify-content: flex-start;
        text-decoration: none;
        transition: font-weight 0.1s;
    }

    .item>div>a:hover,
    .item>a:hover,
    .item>div>a:focus,
    .item>a:focus,
    .item>div>a:active,
    .item>a:active {
        background-size: 100% auto;
        /* Fallback: Set a background color. */
        background-color: rgb(255, 113, 113);

        /* Create the gradient. */
        background-image: linear-gradient(45deg, #f7ef5a, #f77ea2);

        /* Set the background size and repeat properties. */
        background-repeat: repeat;

        /* Use the text as a mask for the background. */
        /* This will show the gradient as a text color rather than element bg. */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }
</style>


<div id="header" class="header">
    <div id="banner" class="banner">
        <div>
            <a href="tel:+918126726747" target="_blank">
                <p>
                    <ion-icon name="call-sharp" class="icon"></ion-icon>
                    +91-8126726747
                </p>
            </a>
            <a href="mailto:satvikyogshala@gmail.com" target="_blank">
                <p>
                    <ion-icon name="mail-sharp" class="icon"></ion-icon> satvikyogshala@gmail.com
                </p>
            </a>
        </div>
        <div class="btn-wrapper">
            <button class="btn btn-grad"><a href="contact" style="text-decoration: none;">Apply Now</a>
                <ion-icon name="create-outline" class="icon" style="--ionicon-stroke-width: 40px;"></ion-icon>
            </button>
        </div>

    </div>
    <!-- NAVBAR -->

    <div id="navbar" class="navbar">
        <div class="logo"> <a href="."> Satvik Yogshala</a></div>
        <div class="main_menu">
            <div class="list">

                <div class="item dropdown" class:selected={segment==="teacher-training" || segment==="teacher-training"
                    || segment==="teacher-training" }>
                    <div><a href=".">Teacher Training</a>
                    </div>
                    <div class="list">
                        <div class="item"><a href="teacher-training/100-hour-ytt">100 Hours
                                YTT</a></div>
                        <div class="item"><a href="teacher-training/200-hour-ytt">200 Hours
                                YTT</a></div>

                        <div class="item"><a href="teacher-training/200-hour-multistyle-ytt">200 Hours Multistyle
                                YTT</a>
                        </div>
                    </div>
                </div>
                <div class="item" class:selected={segment==="yoga-retreat" }>
                    <div> <a href="yoga-retreat"> Yoga Retreat</a></div>
                </div>

                <div class="item dropdown" class:selected={segment==="about" || segment==="about" || segment==="about"
                    }>
                    <div>
                        <a href=".">About</a>
                    </div>
                    <div class="list">
                        <div class="item"><a href="about/about-us">About Satvik Yogshala</a></div>
                        <div class="item"><a href="about/yoga-gurus">Yoga Teachers</a></div>
                        <div class="item"><a href="about/gallery">Gallery</a></div>
                        <div class="item"><a href="about/faq">FAQ</a></div>

                    </div>
                </div>
                <div class="item" class:selected={segment==="blog" }>
                    <div><a href="blog">Blog</a></div>
                </div>
                <div class="item" class:selected={segment==="contact" }>
                    <div><a href="contact">Contact Us</a></div>
                </div>
            </div>
        </div>
    </div>

</div>