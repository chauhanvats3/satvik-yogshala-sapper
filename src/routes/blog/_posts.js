// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		date: "11-11-2020",
		title: 'YOGA TEACHER TRAINING COURSE (YTTC) IN RISHIKESH, INDIA: A LIFE-CHANGING EXPERIENCE',
		slug: 'yttc-in-rishikesh-a-life-changing-experience',
		image: 'images/yoga15.jpg',
		desc: "I got acquainted with yoga five years ago. I used to practice asana regularly on my own, and I also attended some classes once a week at a local studio. I loved its benefits of staying energized, positive, and calm. However, I sensed that after a while, my practice (on physical, mental, spiritual level) was stagnating as if I had come to a dead-end in a maze.",
		html: `<p>
		I got acquainted with yoga five years ago. I used to practice asana regularly on my own, and I also attended some classes once a week at a local studio. I loved its benefits of staying energized, positive, and calm. However, I sensed that after a while, my practice (on physical, mental, spiritual level) was stagnating as if I had come to a dead-end in a maze. I lost the target. I needed guidance. One of my friends, who already finished his Yoga Teacher Training Course in Rishikesh, India, becoming a certified yoga teacher accredited by Yoga Alliance, recommended me the school where she studied. I did not hesitate: I booked the same course, I freed myself from work and school, booked my flight ticket, and arranged my visa. I was ready and excited to take distance from everything and dedicate one whole month to self-growth in my new home, Satvik Yogshala school. It was the 18th of April 2019. I arrived at Rishikesh solely with my backpack, my curious heart, and pure enthusiasm to dive into the depths of Yoga. Everybody at the school welcomed us with open arms and wide smiles, and I instantly felt I was where I was meant to be: we were six students, six different lives, ready for three weeks of transformation. Learning from real practitioners in the cradle of Yoga was an absolute honor, and for which I am infinitely grateful.</p>

		<p>Our schedule was perfectly designed that included not only asana, but also Shatkarma (purification techniques), Pranayama (breathing techniques), Meditation, Mantra chanting, Ayurveda, Body massage, Anatomy, Philosophy, Healthy Home-Made Meals, and many more. In our free time, we could discover the wonderful town with my new friends, bathe in waterfalls in the mountains and practice yoga at the bank of the Ganga which will always remain unique memories. All this opened new doors towards personal growth, a journey that never ends, supported from now on by my Indian family and masters. As a teacher myself now, I feel the responsibility to practice and share everything I have learned with anyone to nourish the real knowledge and path of yoga. To sum it up, completing my yoga teacher training in Rishikesh was one of the best decisions of my life. It was mentally, socially, physically and spiritually enriching; a time full of unforgettable experiences that have brought true changes and clear goals into my life for which I will be thankful forever.
		</p>`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
