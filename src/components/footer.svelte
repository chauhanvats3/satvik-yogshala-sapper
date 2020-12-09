<script>
    const date = new Date();
    const year = date.getFullYear();

</script>

<style>
    footer {
        flex-flow: column wrap;
        background-color: #849fdb5b;
        padding-top: 10vh;
        clip-path: polygon(0 10vh, 100% 0%, 100% 100%, 0 100%);
    }

    footer>div {
        align-items: stretch;
        width: 95%;
    }

    .category {
        flex-flow: column wrap;
        flex: 1 1 auto;
        justify-content: flex-start;
        margin: 20px auto;
    }

    .heading {
        font-weight: bold;
    }

    .content {
        flex-flow: column wrap;
    }



    .faq div {
        margin-bottom: 18px;
    }

    .link {
        margin: 0 5px;
    }

    ion-icon {
        font-size: 32px;
        margin: 0 10px;
    }

    footer>div {
        margin: 10px;
    }

    .banner {
        width: 98vw;
        flex-grow: 1;
    }

    .banner>div {
        font-size: .80em;
        margin: 0 15px;
    }

    [name="heart"] {
        color: rgb(255, 98, 98);
        font-size: 16px;
        margin: 0 4px;
    }

    .fab {
        cursor: pointer;
        font-size: 32px;
        margin: 5px 10px;
    }

    .fa-youtube:hover {
        color: #FF0000;
    }

    .fa-twitter:hover {
        color: #00ACEE;
    }

    .fa-facebook-f:hover {
        color: #3b5998;
    }

    .fa-linkedin-in:hover {
        color: #0e76a8;
    }

    .fa-instagram:hover {
        color: #cc2366;

    }

    @media(max-width: 695px) {}
</style>
<footer>
    <div class="categories">
        <div class="category">
            <div class="heading">Yoga Teachers Training</div>
            <div class="content">
                <p><a href="teacher-training/100-hour-ytt">100 Hours YTT</a></p>
                <p><a href="teacher-training/200-hour-ytt">200 Hours YTT</a></p>
                <p><a href="teacher-training/200-hour-multistyle-ytt">200 Hours Multistyle YTT</a></p>
            </div>
        </div>
        <div class="category">
            <div class="heading">Activities</div>
            <div class="content">
                <p><a href="yoga-retreat">Yoga Retreat</a></p>

            </div>
        </div>
        <div class="category faq">
            <div class="heading"><a href="about/faq">FAQ</a></div>
            <div class="heading"><a href="about/gallery">GALLERY</a></div>
            <div class="heading"><a href="blog">BLOG</a></div>
        </div>
        <div class="category">
            <div class="heading">Contact Us</div>
            <div class="content">
                <div style="flex-flow: column wrap;">
                    <p><a href="tel:+918126726747" target="_blank">+91-8126726747</a></p>
                    <a href="mailto:satvikyogshala@gmail.com" target="_blank">
                        <p>satvikyogshala@gmail.com</p>
                    </a>
                </div>
                <div style="flex-flow: column;">
                    <p style="font-weight: bold;">Address:</p>
                    <a href="https://g.page/satvikyogshala?share">
                        <p>Badrinath Road, NH-58, <br />Tapovan, Rishikesh, India</p>
                    </a>
                </div>

            </div>
        </div>
    </div>
    <div class="social">

        <i class="fab fa-twitter"></i>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-youtube"></i>
        <i class="fab fa-linkedin-in"></i>
    </div>
    <div class="banner">
        <div>Copyright © {year} <a href="." class="link"> Satvik Yogshala. </a>
            All Rights
            Reserved</div>

        <div>Terms and Conditions</div>
        <div>Privacy Policy</div>
        <div><a class="link" href="https://github.com/chauhanvats3" target="_blank">Made with <ion-icon name="heart">
                </ion-icon> by
                Vatsal</a></div>
    </div>
</footer>