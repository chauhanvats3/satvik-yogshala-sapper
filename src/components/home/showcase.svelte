<script>
    import BlogCard from '../blog_card_new.svelte';


    var blogPost = {
        date: "11-11-2020",
        title: 'YOGA TEACHER TRAINING COURSE (YTTC) IN RISHIKESH, INDIA: A LIFE-CHANGING EXPERIENCE',
        slug: 'yttc-in-rishikesh-a-life-changing-experience',
        image: 'images/yoga15.jpg',
        desc: "I got acquainted with yoga five years ago. I used to practice asana regularly on my own, and I also attended some classes once a week at a local studio. I loved its benefits of staying energized, positive, and calm. However, I sensed that after a while, my practice (on physical, mental, spiritual level) was stagnating as if I had come to a dead-end in a maze.",
    };



</script>
<style>
    .wrapper {
        margin: 50px 0 20px 0;
    }

    .showcase {
        width: 95vw;
        justify-content: center;
        flex-flow: column wrap;
    }

    .blog {
        width: 90%;
        margin: 0 10px;
    }


    .blog>:global(.blog_card) {
        width: 95%;
        margin: 5px 5px;
    }

    .blog>:global(.blog_card:hover) {
        width: 100%;
        margin: 0;
    }
</style>

<div class="wrapper">

    <div class="showcase">
        <div class="blog">
            <h1 class="indie-flower">BLOG</h1>
            <BlogCard title={blogPost.title} desc={blogPost.desc} img={blogPost.image} link="blog" date={blogPost.date}
                height="47vh" />

        </div>

    </div>
</div>