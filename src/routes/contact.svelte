<script>
    import Contact_Form from '../components/contact_form.svelte';
    import Programs from '../components/home/our_programs.svelte';

</script>

<style>
    p {
        text-align: center;
    }

    .form_wrapper {
        width: 50vw;
    }

    .contact {
        flex-direction: column;
        width: 98vw;
        margin-top: 150px;
    }

    .contact>div {
        width: 100%;
        justify-content: center;
    }

    .add_info,
    .form_wrapper {

        flex: 0 1 40%;
        min-width: 300px;
        flex-flow: column wrap;
        max-width: 400px;
    }

    .add_info>div {
        margin: 15px;
    }


    .map_embed {
        width: 100%;
        margin: 20px 0;
    }

    @media (max-width: 850px) {
        .contact {
            margin-top: 50px;
        }
    }
</style>
<svelte:head>
    <title>Contact Us - Satvik Yogshala</title>
</svelte:head>
<div class="contact">
    <div>
        <div class="form_wrapper">
            <Contact_Form />
        </div>
        <div class="add_info">
            <!--    <div class="social_icons">

                <ion-icon name="logo-twitter">Twitter Profile</ion-icon>
                <ion-icon name="logo-facebook">Facebook Page</ion-icon>
                <ion-icon name="logo-instagram">Instagram Account</ion-icon>
                <ion-icon name="logo-youtube">Youtube Channel</ion-icon>
                <ion-icon name="logo-linkedin">Linkedin Profile</ion-icon>
            </div> -->
            <div class="address">
                <p><a href="https://g.page/satvikyogshala?share">Badrinath Road, NH-58, Tapovan, Rishikesh, India</a>
                </p>
                <p><a href="mailto:satvikyogshala@gmail.com">satvikyogshala@gmail.com</a></p>
                <p><a href="tel:+918126726747">+91 8126726747</a>,
                    <a href="tel:+918433404492">+91 8433404492</a>
                </p>
            </div>
        </div>
    </div>
    <Programs />
    <div>
        <div class="map_embed">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.7525987385793!2d78.3228854151171!3d30.12989208185136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091187fa181da5%3A0x1a502700c49680b7!2sSatvik%20Yogshala!5e0!3m2!1sen!2sin!4v1605250157489!5m2!1sen!2sin"
                width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                tabindex="0" title="Google Map Embed"></iframe>
        </div>
    </div>
</div>