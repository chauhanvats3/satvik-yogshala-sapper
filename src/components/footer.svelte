<script>
    const date = new Date();
    const year = date.getFullYear();

</script>

<footer>
    <div class="categories">
        <div class="category">
            <div>About Satvik Yogshala</div>
            <div class="content">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
            </div>
        </div>
        <div class="category">
            <div>Yoga Teachers Training</div>
            <div class="content">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
            </div>
        </div>
        <div class="category">
            <div>Course & Activities</div>
            <div class="content">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
            </div>
        </div>
        <div class="category faq">
            <div>FAQ</div>
            <div>GALLERY</div>
            <div>BLOG</div>
        </div>
        <div class="category">
            <div>Contact Us</div>
            <div class="content">
                <p>Phone Number</p>
                <p>Email</p>
                <p>Address</p>
                <p>Add1</p>
                <p>Add2</p>
                <p>Add3</p>
                <p>Add 4</p>
                <p>Add 5</p>
            </div>
        </div>
    </div>
    <div class="social">

        <ion-icon name="logo-twitter">Twitter Profile</ion-icon>
        <ion-icon name="logo-facebook">Facebook Page</ion-icon>
        <ion-icon name="logo-instagram">Instagram Account</ion-icon>
        <ion-icon name="logo-youtube">Youtube Channel</ion-icon>
        <ion-icon name="logo-linkedin">Linkedin Profile</ion-icon>
    </div>
    <div class="banner">
        <div>Copyright © {year} <a href="." target="_blank" class="link"> Satvik Yogshala. </a>
            All Rights
            Reserved</div>

        <div>Terms and Conditions</div>
        <div>Privacy Policy</div>
        <div>Made with <ion-icon name="heart"></ion-icon> by <a class="link" href="https://github.com/chauhanvats3">
                Vatsal</a></div>
    </div>
</footer>

<style>
    footer {
        flex-flow: column wrap;
        width: 100%;
    }

    footer>div {
        align-items: stretch;
        width: 95%;
    }

    .category {
        flex-flow: column wrap;
        flex: 1 1 auto;
        justify-content: flex-start;
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
        justify-content: space-between;
        width: 90vw;
    }

    .banner>div {
        font-size: .80em;
        margin: 0 15px;
    }

    ion-icon {
        cursor: pointer;
    }

    [name="heart"] {
        color: rgb(255, 98, 98);
        font-size: 16px;
        margin: 0 4px;
    }

    [name="logo-youtube"]:hover {
        color: #FF0000;
    }

    [name="logo-twitter"]:hover {
        color: #00ACEE;
    }

    [name="logo-facebook"]:hover {
        color: #3b5998;
    }

    [name="logo-linkedin"]:hover {
        color: #0e76a8;
    }

    [name="logo-instagram"]:hover {
        color: #cc2366;

    }
</style>