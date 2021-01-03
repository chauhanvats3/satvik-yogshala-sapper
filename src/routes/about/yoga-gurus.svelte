<script>
    import Card_Horizontal from '../../components/card_horizontal.svelte';
    import Breadcrumb from '../../components/breadcrumb.svelte';

    var path = [
        { name: "About", href: "." },
        { name: "Yoga Gurus", href: "about/yoga-gurus" }
    ]
    let teachers = [{
        id: "pritam",
        image: "images/team/pritam-singh-rawat.jpg",
        title: "Pritam Rawat",
        desc: `Yogi Pritam, manager and Hatha Yoga Instructor of Anand Yog Rishikesh with considerable experience of teaching and practicing yoga is a gentle soul. His sheer inclination towards spirituality and absolute precision in teaching creates an ambiance of harmony and love.Pritam is also a practitioner of acupressure since he acquired the knowledge and certification long ago. Due to his knowledge of acupressure other healing sciences and under the guidance of masters, his approach is basically therapy based. He is also versed in Ashtanga Vinyasa Yoga`
    },
    {
        id: "manasananda",
        image: "images/team/swami-manasananda.jpg",
        title: "Swami Manasanada",
        desc: `Gives beautiful Yoga training in Sivananda style, Hatha Yoga for both beginners and the advanced. He studied Yoga T.T.C, A.T.T.C and Sadhana Intensive courses at International Sivananda Yoga and Vedanta Centre at Neyyar Dam in Kerala from 2000 to 2002 and holds his master’s degree from the PSK College of Yoga Science and now he is Philosophy Teacher in Anand Yogshala.He has a 15-year long curriculum of studies in different yogic disciplines like the ancient Vedanta philosophy, the Upanishads, Bhagavad Gita and Self-knowledge/Tatwa Bodha in prestigious ashram schools, namely Chinmaya Mission, the Arsha Vidya Gurukulam and the Self Knowledge Foundation at Tiruvanmalai under renowned Masters like Swami Dayananda and Swami Suddhananda respectively. <br/>
        His teachings also include: South India style Vedic Mantra Chanting classes. Patanjali Yoga Sutra Lecture on 8 limbs. Self Knowledge Lecture. Relativity towards Reality Lectures. Unconditional Love with Awareness towards Self Lecture. Indian Philosophy and Spiritual Satsang classes. Manash Ranjan spent years with different spiritual masters in the different places for the sake of truth, because he has always been a seeker of truth since his childhood. .He has also started his intense spiritual journey and some unique spiritual practices. He says Yoga is his life and he shares his experience and whatever he has learned through this miraculous journey of yoga.`

    }, {
        id: "pankaj",
        image: "images/team/yogi-pankaj-paswan.jpg",
        title: "Yogi Pankaj Paswan",
        desc: `Pankaj Paswan is a certified yoga teacher possesses a Bachelor degree of arts in yoga & Naturopathy from Uttarakhand Open University, India. He is also certified by International Institute of Yoga and Meditation from Ved Niketan Ashram, Ram Jhula, Rishikesh, India. Currently, he is teaching Pranayama, Yoga Therapy and Meditation.Pankaj Paswan has made a number of people happy throughout the World with his Teaching and Therapy Practice.`

    }, {
        id: "vipulraj",
        image: "images/team/yogi-vipulraj.jpg",
        title: "Yogi Vipulraj",
        desc: `Yogi Vipulraj was born in the northern Indian traditional Aryan family. According to the tradition of his family, he started the spiritual and physical search of yoga under the guidance of his parents. Vipul holds a doctor degree in yoga science. He has two master degrees, being one in yoga philosophy and other in Sanskrit, the ancient language of yoga.He has also acquired a postgraduate diploma in yoga and holistic therapeutic techniques. Many of his research documents on Yoga Culture have been published in some famous yoga journals. Vipul has been teaching yoga asana, Sanskrit, and philosophy for many years. His methodology focuses on panic energy healing for opening psychic channels and mental peace. <br/>
He teaches with a style of scientific approach to ensure a proper alignment in every posture. His classes are taught in a conscious balance of strength and relaxation to create a loving and peaceful environment. Vipul is always passionate about sharing his understanding and vast experience of the traditional Himalayan yoga, which he has inherited through his parents from a lineage of the ancient yogis.`

    }
    ];
</script>

<style>
    .yoga-gurus {
        margin-top: 90px;
        flex-direction: column;
    }

    @media(max-width: 850px) {
        .yoga-gurus {
            margin-top: 50px;
        }
    }
</style>
<svelte:head>
    <title>Our Yoga Gurus - Satvik Yogshala</title>
</svelte:head>
<div class="yoga-gurus" id="hero">
    <div class="heading">
        <h1 class="indie-flower">Yoga Instructors</h1>
        <hr />
    </div>
    <Breadcrumb path={path} />
    {#each teachers as teacher}
    <Card_Horizontal image={teacher.image} desc={teacher.desc} title={teacher.title} id={teacher.id} />
    {/each}

</div>