<script>
    import { onMount } from 'svelte';

    export let segment;

    let mainMenu;
    var showHamburger = true;
    var showMenuClose = false;
    let hamburgerClicked = () => {
        var screenWidth = window.screen.width;
        var mainMenuStatus = window.getComputedStyle(mainMenu).display;

        if (screenWidth > 850) {
            return;
        }

        if (mainMenuStatus == "none") {
            mainMenu.style.display = "flex";
            showMenuClose = true;
            showHamburger = false;
        } else {
            mainMenu.style.display = "none";
            showMenuClose = false;
            showHamburger = true;
        }
    }

</script>


<style>
    .header {
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 100;
    }

    .banner {
        height: 30px;
        flex-basis: 100%;
        justify-content: flex-end;
        padding: 0 30px;

        align-items: stretch;

        background: rgb(32, 32, 32);
        background: -moz-linear-gradient(142deg, rgba(32, 32, 32, 0.9783263647255778) 0%, rgba(68, 60, 27, 0.9587185215883228) 16%, rgba(108, 92, 21, 0.9082983535210959) 34%, rgba(150, 126, 15, 0.8914916308320203) 53%, rgba(204, 168, 7, 0.8914916308320203) 77%, rgba(255, 209, 0, 0.7178221630449055) 100%);
        background: -webkit-linear-gradient(142deg, rgba(32, 32, 32, 0.9783263647255778) 0%, rgba(68, 60, 27, 0.9587185215883228) 16%, rgba(108, 92, 21, 0.9082983535210959) 34%, rgba(150, 126, 15, 0.8914916308320203) 53%, rgba(204, 168, 7, 0.8914916308320203) 77%, rgba(255, 209, 0, 0.7178221630449055) 100%);
        background: linear-gradient(142deg, rgba(32, 32, 32, 0.9783263647255778) 0%, rgba(68, 60, 27, 0.9587185215883228) 16%, rgba(108, 92, 21, 0.9082983535210959) 34%, rgba(150, 126, 15, 0.8914916308320203) 53%, rgba(204, 168, 7, 0.8914916308320203) 77%, rgba(255, 209, 0, 0.7178221630449055) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#202020", endColorstr="#ffd100", GradientType=1);

    }

    .banner>div,
    .banner>div>a {
        height: 100%;
        font-weight: 200;
    }

    p,
    .item div a {
        margin: 5px;
    }

    i {
        margin: 1px 5px;
    }

    /* NAVBAR STYLES */
    .navbar {
        flex-basis: 100%;
        padding: 0 30px;
        min-height: 50px;

        background: rgba(255, 255, 255, 0.87);
    }

    .logo_menu {
        min-height: 50px;
        flex-basis: 30%;
        justify-content: center;
        align-items: stretch;
    }

    .logo {
        height: 100%;
        background: rgba(41, 41, 41, 0.719);
    }

    .logo>a>img {
        margin: 5px;
        height: 64px;
    }

    .hamburger {
        display: none;
        font-size: 16px;
    }

    .main_menu {
        flex-basis: 70%;
        justify-content: flex-end;
        align-self: stretch;
        align-items: stretch;
        transition: all 1s;
    }

    .main_menu .item {
        padding: 0px 5px;
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
        background: #464646b7;

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
        background: #464646c0;
        color: aliceblue;
        padding: 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        transition: all 0.8s;
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
        align-items: center;
    }



    @media (max-width: 850px) {
        .banner {
            display: none;
        }

        .navbar {
            justify-content: space-between;
            background: #ffffffe8;
        }

        .logo_menu {
            width: 100%;
            justify-content: space-between;
            flex-basis: 100%;
        }

        .logo>a>img {
            height: 48px;
        }

        .hamburger {
            display: flex;
            color: var(--darkgray);
            visibility: visible;
            cursor: pointer;
            font-size: 24px;
        }

        .main_menu {
            display: none;
            flex-basis: 100%;
            justify-content: flex-start;
            margin: 10px auto;
        }

        .main_menu>.list {
            flex-direction: column;
            width: 100%;
            justify-content: flex-start;
        }

        .main_menu>.list>.item {
            justify-content: flex-start;
            margin: 5px 0;
        }

        .item div {
            width: 100%;
            justify-content: flex-start;
        }

        .dropdown>.list {
            position: relative;
            display: none;
            color: var(--darkgray);
        }

        .dropdown:hover>.list,
        .dropdown:active>.list,
        .dropdown:focus>.list {
            display: flex;
            left: 0%;
            top: 0%;
            align-self: flex-start;
            width: 100%;
            background: transparent;
        }

        .main_menu>.list>.item:hover,
        .main_menu>.list>.item:focus,
        .main_menu>.list>.item:active {
            background: transparent;

        }

        /* .main_menu>.list>.item:hover>div:first-child,
        .main_menu>.list>.item:focus>div:first-child,
        .main_menu>.list>.item:active>div:first-child {
            background: #464646b7;

        } */

        .main_menu>.list>.item:hover div:hover,
        .main_menu>.list>.item:focus div:focus,
        .main_menu>.list>.item:active div:active {
            background: #464646b7;
        }
    }

    @supports (backdrop-filter: blur()) or (-webkit-backdrop-filter: blur()) {

        .navbar {
            background: rgba(255, 255, 255, 0.13);
            -webkit-backdrop-filter: blur(2.5px);
            backdrop-filter: blur(2.5px);
        }

        .dropdown>.list {
            -webkit-backdrop-filter: blur(2.5px);
            backdrop-filter: blur(2.5px);
        }


    }
</style>


<div id="header" class="header">
    <div id="banner" class="banner">
        <div>
            <a href="tel:+918126726747" target="_blank" rel="noopener">
                <p>
                    <i class="fas fa-phone-alt"></i>
                    +91-8126726747
                </p>
            </a>
            <a href="mailto:satvikyogshala@gmail.com" target="_blank" rel="noopener">
                <p>
                    <i class="fas fa-envelope"></i> satvikyogshala@gmail.com
                </p>
            </a>
        </div>
    </div>
    <!-- NAVBAR -->

    <div id="navbar" class="navbar">

        <div class="logo_menu">
            <div class="logo"> <a href="."> <img src="logo/logo_name_hori.svg" alt="Logo"> </a></div>
            {#if showHamburger}
            <i class="fas fa-bars hamburger" on:click={hamburgerClicked}></i>
            {:else if showMenuClose}
            <i class="fas fa-times hamburger" on:click={hamburgerClicked}></i>
            {/if}
        </div>

        <div class="main_menu" bind:this={mainMenu}>
            <div class=" list">

                <div class="item dropdown" class:selected={segment==="teacher-training" || segment==="teacher-training"
                    || segment==="teacher-training" }>
                    <div>
                        <p style="cursor: pointer;" class="noselect grad-text">Teacher Training </p><i
                            class="fas fa-chevron-down"></i>
                    </div>
                    <div class="list">
                        <div class="item"><a href="teacher-training/100-hour-ytt" on:click={hamburgerClicked}
                                class="noselect grad-text">100 Hours
                                YTT</a></div>
                        <div class="item"><a href="teacher-training/200-hour-ytt" on:click={hamburgerClicked}
                                class="noselect grad-text">200 Hours
                                YTT</a></div>

                        <div class="item"><a href="teacher-training/200-hour-multistyle-ytt" on:click={hamburgerClicked}
                                class="noselect grad-text">200 Hours Multistyle
                                YTT</a>
                        </div>
                    </div>
                </div>
                <div class="item" class:selected={segment==="yoga-retreat" }>
                    <div> <a href="yoga-retreat" on:click={hamburgerClicked} class="noselect grad-text"> Yoga
                            Retreat</a></div>
                </div>
                <div class="item" class:selected={segment==="pricing" }>
                    <div> <a href="pricing" on:click={hamburgerClicked} class="noselect grad-text">Pricing</a></div>
                </div>

                <div class="item dropdown" class:selected={segment==="about" || segment==="about" || segment==="about"
                    }>
                    <div>
                        <p style="cursor: pointer;" class="noselect grad-text">About</p> <i
                            class="fas fa-chevron-down"></i>
                    </div>
                    <div class="list">
                        <div class="item"><a href="about/about-us" on:click={hamburgerClicked}
                                class="noselect grad-text">About
                                Satvik Yogshala</a>
                        </div>
                        <div class="item"><a href="about/yoga-gurus" on:click={hamburgerClicked}
                                class="noselect grad-text">Yoga
                                Teachers</a></div>
                        <div class="item"><a href="about/gallery" on:click={hamburgerClicked}
                                class="noselect grad-text">Gallery</a>
                        </div>
                        <div class="item"><a href="about/faq" on:click={hamburgerClicked}
                                class="noselect grad-text">FAQ</a></div>

                    </div>
                </div>
                <div class="item" class:selected={segment==="blog" }>
                    <div><a href="blog" on:click={hamburgerClicked} class="noselect grad-text">Blog</a></div>
                </div>
                <div class="item" class:selected={segment==="contact" }>
                    <div><a href="contact" on:click={hamburgerClicked} class="noselect grad-text">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>