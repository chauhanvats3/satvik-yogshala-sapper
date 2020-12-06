<script>

    function handleSubmit() {
        console.log(number);
    }

</script>

<style>
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
        <h1 class="indie-flower">Contact Us</h1>
        <hr />
    </div>
    <div><input type="text" name="f_name" id="f_name" placeholder="First Name"></div>
    <div><input type="text" name="l_name" id="l_name" placeholder="Last Name"></div>
    <div><input type="email" name="email" id="email" placeholder="Email ID"></div>
    <div><input type="tel" name="phone" id="phone" placeholder="Phone Number"></div>
    <div><input type="text" name="subject" id="subject" placeholder="Subject"></div>
    <div><textarea id="message" name="message" rows="5" placeholder="Enter Your Message"></textarea></div>
    <div><button class="btn btn-grad" on:click={handleSubmit}>Submit</button></div>
</div>