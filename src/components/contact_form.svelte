<script>
    import { onMount } from 'svelte';
    import jQuery from 'jquery';
    import 'intl-tel-input/build/css/intlTelInput.css';
    import intlTelInput from 'intl-tel-input';

    function handleSubmit() {
        var number = iti.getNumber();
        console.log(number);
    }


    onMount(async () => {

        const input = document.querySelector("#phone");
        intlTelInput(input, {
            // any initialisation options go here

            /* geoIpLookup: function (callback) {
                jQuery.get("http://ip-api.com/json/", function () { }).always(function (resp) {
                    var countryCode = (resp && resp.countryCode) ? resp.countryCode : "us";
                    console.log(countryCode);
                    callback(countryCode);
                });
            }, */
            utilsScript: "/utils.js",
            preferredCountries: ["in"]

        });

        window["iti"] = intlTelInput(input);
    });
</script>

<style>
    :global(.iti) {
        width: 100%;
    }

    :global(.iti__flag) {
        background-image: url("/intl-tel/flags.png");
    }

    :global(.iti__country-list) {
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
    }

    :global(.iti__country) {
        flex-wrap: nowrap;
    }

    @media (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
        :global(.iti__flag) {
            background-image: url("/intl-tel/flags@2x.png");
        }
    }

    .contact_form {
        width: 100%;
        padding: 10px;
    }

    .contact_form * {
        width: 100%;
    }
</style>
<!-- abj -->
<div class="contact_form">
    <div class="heading">
        <h1>Contact Us</h1>
        <hr />
    </div>
    <div><input type="text" name="f_name" id="f_name" placeholder="First Name"></div>
    <div><input type="text" name="l_name" id="l_name" placeholder="Last Name"></div>
    <div><input type="email" name="email" id="email" placeholder="Email ID"></div>
    <div><input type="tel" name="phone" id="phone"></div>
    <div><input type="text" name="subject" id="subject" placeholder="Subject"></div>
    <div><textarea id="message" name="message" rows="5" placeholder="Enter Your Message"></textarea></div>
    <div><button class="btn btn-grad" on:click={handleSubmit}>Submit</button></div>
</div>