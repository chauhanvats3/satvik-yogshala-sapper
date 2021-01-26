<script>
    import Breadcrumb from '../../components/breadcrumb.svelte';
    import Programs from '../../components/home/our_programs.svelte';
    import Metadata from '../../components/metadata.svelte';
    const metadata = {
        title: "FAQs - Satvik Yogshala",
        description: "Satvik Yogshala is the best beginner friendly yoga school in Rishikesh where we keep students minimum so we can teach them all thoroughly",
        keywords: "yoga,rishikesh,beginner,ttc,teacher,ashtanga",
        thumb: "https://satvikyogshala.com/logo/logo_with_name.png"
    };
    var path = [
        { name: "About", href: "." },
        { name: "FAQs", href: "about/faq" }
    ];
    const dataSet = [
        {
            topic: "General",
            questions: [
                { que: "In which language will the course be conducted?", ans: "English" },
                { que: "What is included in the program fee?", ans: "Accommodation,food, excursion,Studies material." },
                { que: "How much free time I have during program?", ans: "During program once in a week one day off for self." },

                { que: "Does shower and toilet are separate?", ans: "No,in every rooms shower and toilet are attached." },
                { que: "I'm able to teach after finish my Teacher Training Course?", ans: "Yes,after Teacher Training Program you are able to teach anywhere in the world." },
                { que: "In 200hrs Teacher Training Program students are not allowed to bring there electronic products?", ans: "Yes,our motive is students get the self-restraint during studies." },
            ]
        }
    ]

    /* ,
        {
            topic: "Transport & Weather",
            questions: []
        },
        {
            topic: "Program",
            questions: [{ que: "How much fee for the program registration?", ans: "For the registration first pay 200$ and rest payment when you arrived." }]
        } */
</script>

<style>
    .faq {
        margin-top: 120px;
        flex-direction: column;
    }

    .group {
        margin: 20px 5px;
        flex-direction: column;
    }

    .topic {
        margin: 10px 5px;
    }

    .qna {
        flex-direction: column;
        margin: 15px 5px;
        line-height: 1.5em;
        letter-spacing: 0.1em;
    }

    .que {
        color: black;
        font-size: larger;
    }

    .ans {
        color: green;
    }

    @media(max-width: 850px) {
        .faq {
            margin-top: 50px;
        }
    }
</style>
<Metadata {metadata} />

<div class="faq" id="hero">
    <h1>Frequently Asked Questions</h1>
    <Breadcrumb {path} />
    {#each dataSet as data}
    <div class="group">
        <div class="topic">
            <h2>{data.topic}</h2>
        </div>
        {#each data.questions as question}
        <div class="qna">

            <div class="que">❓ {question.que}</div>
            <div class="ans">🔸 {question.ans}</div>
        </div>

        {/each}
    </div>
    {/each}

    <Programs />
</div>