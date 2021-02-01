<script>
    import PricingCard from '../components/PricingCard.svelte';
    let months = [
        {
            name: "January", maxDate: 31, nextMonth: "February", courses: [{
                name: "100 Hours Yoga Teacher Training", discount: false, singlePrice: "500 USD", newSinglePrice: "", sharedPrice: "400 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3, 19], duration: 15, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            },
            {
                name: "200 Hours Yoga Teacher Training", discount: false, singlePrice: "1000 USD", newSinglePrice: "", sharedPrice: "800 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3], duration: 21, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            }]
        },
        {
            name: "February", maxDate: 31, nextMonth: "March", courses: [{
                name: "100 Hours Yoga Teacher Training", discount: false, singlePrice: "500 USD", newSinglePrice: "", sharedPrice: "400 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3, 19], duration: 15, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            },
            {
                name: "200 Hours Yoga Teacher Training", discount: false, singlePrice: "1000 USD", newSinglePrice: "", sharedPrice: "800 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3], duration: 21, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            }]
        },
        {
            name: "March", maxDate: 31, nextMonth: "April", courses: [{
                name: "100 Hours Yoga Teacher Training", discount: false, singlePrice: "500 USD", newSinglePrice: "", sharedPrice: "400 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3, 19], duration: 15, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            },
            {
                name: "200 Hours Yoga Teacher Training", discount: false, singlePrice: "1000 USD", newSinglePrice: "", sharedPrice: "800 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3], duration: 21, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            }]
        },
        {
            name: "April", maxDate: 31, nextMonth: "May", courses: [{
                name: "100 Hours Yoga Teacher Training", discount: false, singlePrice: "500 USD", newSinglePrice: "", sharedPrice: "400 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3, 19], duration: 15, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            },
            {
                name: "200 Hours Yoga Teacher Training", discount: false, singlePrice: "1000 USD", newSinglePrice: "", sharedPrice: "800 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3], duration: 21, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            }]
        },
        {
            name: "May", maxDate: 31, nextMonth: "June", courses: [{
                name: "100 Hours Yoga Teacher Training", discount: false, singlePrice: "500 USD", newSinglePrice: "", sharedPrice: "400 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3, 19], duration: 15, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            },
            {
                name: "200 Hours Yoga Teacher Training", discount: false, singlePrice: "1000 USD", newSinglePrice: "", sharedPrice: "800 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3], duration: 21, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            }]
        },
        {
            name: "June", maxDate: 31, nextMonth: "July", courses: [{
                name: "100 Hours Yoga Teacher Training", discount: false, singlePrice: "500 USD", newSinglePrice: "", sharedPrice: "400 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3, 19], duration: 15, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            },
            {
                name: "200 Hours Yoga Teacher Training", discount: false, singlePrice: "1000 USD", newSinglePrice: "", sharedPrice: "800 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3], duration: 21, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            }]
        },
        {
            name: "July", maxDate: 31, nextMonth: "August", courses: [{
                name: "100 Hours Yoga Teacher Training", discount: false, singlePrice: "500 USD", newSinglePrice: "", sharedPrice: "400 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3, 19], duration: 15, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            },
            {
                name: "200 Hours Yoga Teacher Training", discount: false, singlePrice: "1000 USD", newSinglePrice: "", sharedPrice: "800 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3], duration: 21, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            }]
        },
        {
            name: "August", maxDate: 31, nextMonth: "September", courses: [{
                name: "100 Hours Yoga Teacher Training", discount: false, singlePrice: "500 USD", newSinglePrice: "", sharedPrice: "400 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3, 19], duration: 15, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            },
            {
                name: "200 Hours Yoga Teacher Training", discount: false, singlePrice: "1000 USD", newSinglePrice: "", sharedPrice: "800 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3], duration: 21, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            }]
        },
        {
            name: "September", maxDate: 31, nextMonth: "October", courses: [{
                name: "100 Hours Yoga Teacher Training", discount: false, singlePrice: "500 USD", newSinglePrice: "", sharedPrice: "400 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3, 19], duration: 15, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            },
            {
                name: "200 Hours Yoga Teacher Training", discount: false, singlePrice: "1000 USD", newSinglePrice: "", sharedPrice: "800 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3], duration: 21, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            }]
        },
        {
            name: "October", maxDate: 31, nextMonth: "November", courses: [{
                name: "100 Hours Yoga Teacher Training", discount: false, singlePrice: "500 USD", newSinglePrice: "", sharedPrice: "400 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3, 19], duration: 15, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            },
            {
                name: "200 Hours Yoga Teacher Training", discount: false, singlePrice: "1000 USD", newSinglePrice: "", sharedPrice: "800 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3], duration: 21, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            }]
        },
        {
            name: "November", maxDate: 31, nextMonth: "December", courses: [{
                name: "100 Hours Yoga Teacher Training", discount: false, singlePrice: "500 USD", newSinglePrice: "", sharedPrice: "400 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3, 19], duration: 15, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            },
            {
                name: "200 Hours Yoga Teacher Training", discount: false, singlePrice: "1000 USD", newSinglePrice: "", sharedPrice: "800 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3], duration: 21, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            }]
        },
        {
            name: "December", maxDate: 31, nextMonth: "January", courses: [{
                name: "100 Hours Yoga Teacher Training", discount: false, singlePrice: "500 USD", newSinglePrice: "", sharedPrice: "400 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3, 19], duration: 15, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            },
            {
                name: "200 Hours Yoga Teacher Training", discount: false, singlePrice: "1000 USD", newSinglePrice: "", sharedPrice: "800 USD", newSharedPrice: "", location: "Rishikesh", startDates: [3], duration: 21, backgroundFront: "#f1f1f1", backgroundBack: "#a1a1a1"
            }]
        }
    ];
</script>

<div class="pricing">
    <h1 class="page-title">Pricing</h1>
    {#each months as month}
    <div class="month">
        <h1>{month.name}</h1>

        <div class="cardset">
            {#each month.courses as course}
            <PricingCard {course} month="{month.name}" maxDate={month.maxDate} nextMonth={month.nextMonth} />
            {/each}
        </div>

    </div>
    {/each}
</div>

<style>
    .page-title {
        font-size: 4rem;
        margin-bottom: 50px;
    }

    .pricing {
        margin-top: 120px;
        flex-direction: column;
        width: 100%;
    }

    .month {
        flex-direction: column;
        width: 100%;
        margin: 20px;
    }

    .cardset {
        flex-direction: row;
    }
</style>