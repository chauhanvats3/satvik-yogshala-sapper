<script>
    import { onMount } from 'svelte';
    import { fade, fly, slide } from 'svelte/transition';
    import { quintInOut, quintOut, linear } from 'svelte/easing';
    import { tweened } from 'svelte/motion';
    import BlogCard from '../blog_card.svelte';


    var blogPost = {
        date: "11-11-11 at 11:17 AM",
        title: 'What is Sapper?',
        slug: 'what-is-sapper',
        image: 'images/yoga1.jpg',
        desc: "Some random GibberishSome random GibberishSome random GibberishSome random GibberishSome random GibberishSome random GibberishSome random GibberishSome random GibberishSome random GibberishSome random GibberishSome random GibberishSome random GibberishSome random GibberishSome random GibberishSome random GibberishSome",
        html: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`
    };


    var imageDuration = 5000;
    var pBarDuration = (imageDuration / 120) * 10;
    const pBarWidth = tweened(0, {
        duration: pBarDuration,
        easing: linear
    });

    let curIndex = 0;

    var images = [
        {
            src: "images/yoga6.jpg"
        },
        {
            src: "images/flower.jpg"
        },
        {
            src: "images/food1.jpg"
        },

        {
            src: "images/food2.jpg"
        }
    ];
    var curImg = images[curIndex];

    onMount(() => {
        var numImg = images.length;
        const changeImage = setInterval(() => {

            curIndex = curIndex + 1 < numImg ? curIndex + 1 : 0;
            curImg = images[curIndex];
            pBarWidth.set(-10);
        }, imageDuration);

        const progressBar = setInterval(() => {

            pBarWidth.update(n => n + 10);

        }, pBarDuration);

        return () => {
            clearInterval(changeImage);
            clearInterval(progressBar);

        };
    });


</script>
<style>
    .wrapper {
        margin: 50px 0 20px 0;
    }

    .showcase {
        width: 95vw;
        min-height: 400px;
        justify-content: center;
    }

    .gallery,
    .blog {
        width: 40vw;
        min-height: 350px;
        margin: 0 10px;
    }



    .gallery {
        display: block;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        border-radius: 10px;
        transition: all 0.2s;
    }

    .gallery:hover {
        width: 46.5vw;
        box-shadow: 0px 0px 20px rgb(70, 69, 69);
    }

    .gallery>div img {
        position: absolute;
        top: 0;
        width: 100%;
        border-radius: 10px;
    }

    .progress_bar {
        width: var(--p-bar-width);
        max-width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgb(106, 209, 216);
        z-index: 10;
        border-right: 3px solid black;
    }

    @media (max-width: 695px) {
        .gallery {
            width: 90%;
            min-height: 35vh;

        }

        .blog {
            width: 90%;
        }

        .gallery:hover {
            width: 96%;
            box-shadow: 0px 0px 20px rgb(70, 69, 69);
        }
    }
</style>

<div class="wrapper">
    <div class="heading">
        <h1 class="indie-flower">Showcase</h1>
        <hr class="sexy_bottom_line" />
    </div>
    <div class="showcase">
        <div class="blog">
            <BlogCard title={blogPost.title} desc={blogPost.desc} img={blogPost.image} link="blog" date={blogPost.date}
                height="47vh" />
        </div>
        <div class="gallery">
            <div>
                {#each [images[curIndex]] as photo (curIndex)}
                         <a href="about/gallery">
                            <img 
                            transition:fade|local="{{ duration: 800,easing:quintInOut}}"
                            src={photo.src} alt=""/>
                        </a>
                    {/each}
                </div>
                <div class="progress_bar" style="--p-bar-width: {$pBarWidth}%"></div>
        </div>
    </div>
</div>