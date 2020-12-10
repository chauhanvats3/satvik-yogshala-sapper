<script>
    import { onMount } from 'svelte';

    const satvikEmail = 'satvikyogshala@gmail.com'
    let firstName;
    let lastName;
    let custEmail;
    let phoneNumber;
    let subject;
    let message;
    let mailURL;
    let body;
    let requiredPlaceholders;
    let required;

    onMount(() => {
        required = [firstName, custEmail, subject, message];
        requiredPlaceholders = {};
        required.forEach((item, index) => {
            requiredPlaceholders[item.id] = item.placeholder;
        });

        console.log(requiredPlaceholders);
    });
    function handleSubmit() {

        phoneNumber.value = phoneNumber.value.replace(/\s/g, '');

        let errorItems = [];
        required.forEach((item, index) => {
            if (item.value.trim() === "") {
                let errorItem = {
                    item: item,
                    error: "Cannot Be Empty!"
                }
                errorItems.push(errorItem);
            }
            else if (item.classList.contains("errorField")) item.classList.remove("errorField");
        });

        if (isNaN(phoneNumber.value - parseInt(phoneNumber.value))) errorItems.push({ item: phoneNumber, error: "Must Be Digits Only!" });
        else if (phoneNumber.classList.contains("errorField")) phoneNumber.classList.remove("errorField");

        if (errorItems.length > 0) showError(errorItems);
        else {
            body = ` ${message.value} %0A Name : ${firstName.value} ${lastName.value} %0A Email : ${custEmail.value} %0A Phone Number : ${phoneNumber.value}`;
            mailURL = `mailto:${satvikEmail}?subject=${subject.value}&body=${body}`;
            window.open(mailURL, "_blank");
        }


    }

    function showError(errorItems) {
        errorItems.forEach((eachItem, index) => {
            let { item, error } = eachItem;
            item.classList.add("errorField");
            if (item.id == "phone") { item.value = ""; item.placeholder = "Phone Number " + error; }
            else {
                item.value = ""
                item.placeholder = requiredPlaceholders[item.id] + " " + error;
            }
        });
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

    :global(.errorField) {
        background-color: rgba(255, 0, 0, 0.801);
        color: aliceblue;
    }

    :global(.errorField::placeholder) {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: white;
        opacity: 1;
        /* Firefox */
    }

    :global(.errorField:-ms-input-placeholder) {
        /* Internet Explorer 10-11 */
        color: white;
    }

    :global(.errorField::-ms-input-placeholder) {
        /* Microsoft Edge */
        color: white;
    }
</style>
<!-- abj -->
<div class="contact_form">
    <div class="heading">
        <h1 class="indie-flower">Contact Us</h1>
        <hr />
    </div>
    <div><input type="text" name="f_name" id="f_name" placeholder="First Name" bind:this={firstName}></div>
    <div><input type="text" name="l_name" id="l_name" placeholder="Last Name" bind:this={lastName}></div>
    <div><input type="email" name="email" id="email" placeholder="Email ID" bind:this={custEmail}></div>
    <div><input type="tel" name="phone" id="phone" placeholder="Phone Number" bind:this={phoneNumber}></div>
    <div><input type="text" name="subject" id="subject" placeholder="Subject" bind:this={subject}></div>
    <div><textarea id="message" name="message" rows="5" placeholder="Enter Your Message" bind:this={message}></textarea>
    </div>
    <div><button class="btn btn-grad" on:click={handleSubmit}>Submit</button></div>
</div>