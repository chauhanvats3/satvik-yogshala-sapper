<script>
    export let course;
    export let month;
    export let maxDate;
    export let nextMonth;


    function calcDate(stDt, dur) {
        let date = "";
        date += stDt + " " + month + " - ";
        let endDate = stDt + dur;
        if (endDate > maxDate) {
            endDate = endDate % maxDate;
            month = nextMonth;
        }
        date += endDate + " " + month;
        return date;
    }
</script>

<div class="pricing-card">
    <div class="card">
        <figure class="front" style="background-color: {course.backgroundFront}">
            <h1>{course.name}</h1>
            <div style="flex-direction: column;">
                <p>Location : {course.location}</p>
                <p style="margin-top: 20px;">Dates :</p>
                <div>
                    {#each course.startDates as date}
                    <p>{calcDate(date,course.duration)}</p>
                    {/each}
                </div>
            </div>

        </figure>
        <figure class="back" style="background-color: {course.backgroundBack}">
            <h1>{course.name}</h1>
            <div style="flex-direction: column;">
                <p>Fees </p>
                <div style="flex-direction: column;">
                    <p>Single : {course.singlePrice}</p>
                    <p>Sharing : {course.sharedPrice}</p>
                </div>
            </div>
        </figure>
    </div>
</div>

<style>
    .pricing-card {
        width: 350px;
        height: 600px;
        margin: 30px;
    }

    .pricing-card:hover .card {
        transform: rotateY(180deg);
    }

    .card {
        width: 100%;
        height: 100%;
        position: relative;
        transition: transform 0.5s ease-in;
        transform-style: preserve-3d;
    }

    figure {
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 10px;
        align-items: flex-start;
        padding: 20px;
    }

    .back {
        transform: rotateY(180deg);
    }

    p {
        font-size: larger;
        width: 100%;
    }

    @media(max-width: 400px) {
        .pricing-card {
            width: 250px;
            height: 450px;
        }

        p {
            text-align: center;
            word-break: break-all;

        }
    }
</style>