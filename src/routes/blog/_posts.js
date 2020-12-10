// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		date: "11-11-11 at 11:17 AM",
		title: 'YOGA TEACHER TRAINING COURSE (YTTC) IN RISHIKESH, INDIA: A LIFE-CHANGING EXPERIENCE',
		slug: 'yttc-in-rishikesh-a-life-changing-experience',
		image: 'images/yoga3.jpg',
		desc: "I got acquainted with yoga five years ago. I used to practice asana regularly on my own, and I also attended some classes once a week at a local studio. I loved its benefits of staying energized, positive, and calm. However, I sensed that after a while, my practice (on physical, mental, spiritual level) was stagnating as if I had come to a dead-end in a maze.",
		html: `<p>
		I got acquainted with yoga five years ago. I used to practice asana regularly on my own, and I also attended some classes once a week at a local studio. I loved its benefits of staying energized, positive, and calm. However, I sensed that after a while, my practice (on physical, mental, spiritual level) was stagnating as if I had come to a dead-end in a maze. I lost the target. I needed guidance. One of my friends, who already finished his Yoga Teacher Training Course in Rishikesh, India, becoming a certified yoga teacher accredited by Yoga Alliance, recommended me the school where she studied. I did not hesitate: I booked the same course, I freed myself from work and school, booked my flight ticket, and arranged my visa. I was ready and excited to take distance from everything and dedicate one whole month to self-growth in my new home, Satvik Yogshala school. It was the 18th of April 2019. I arrived at Rishikesh solely with my backpack, my curious heart, and pure enthusiasm to dive into the depths of Yoga. Everybody at the school welcomed us with open arms and wide smiles, and I instantly felt I was where I was meant to be: we were six students, six different lives, ready for three weeks of transformation. Learning from real practitioners in the cradle of Yoga was an absolute honor, and for which I am infinitely grateful.</p>

		<p>Our schedule was perfectly designed that included not only asana, but also Shatkarma (purification techniques), Pranayama (breathing techniques), Meditation, Mantra chanting, Ayurveda, Body massage, Anatomy, Philosophy, Healthy Home-Made Meals, and many more. In our free time, we could discover the wonderful town with my new friends, bathe in waterfalls in the mountains and practice yoga at the bank of the Ganga which will always remain unique memories. All this opened new doors towards personal growth, a journey that never ends, supported from now on by my Indian family and masters. As a teacher myself now, I feel the responsibility to practice and share everything I have learned with anyone to nourish the real knowledge and path of yoga. To sum it up, completing my yoga teacher training in Rishikesh was one of the best decisions of my life. It was mentally, socially, physically and spiritually enriching; a time full of unforgettable experiences that have brought true changes and clear goals into my life for which I will be thankful forever.
		</p>`
	},

	{
		title: 'YOGA TEACHER TRAINING COURSE (YTTC) IN RISHIKESH, INDIA: A LIFE-CHANGING EXPERIENCE',
		slug: 'how-to-use-sapper',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		slug: 'why-the-name',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},

	{
		title: 'How is Sapper different from Next.js?',
		slug: 'how-is-sapper-different-from-next',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'How can I get involved?',
		slug: 'how-can-i-get-involved',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
