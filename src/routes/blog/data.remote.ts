import * as v from 'valibot';
import { command, form, query } from '$app/server';
import { error, redirect } from '@sveltejs/kit';

const posts = [
	{
		slug: 'welcome',
		title: 'Welcome to the Aperture Science computer-aided enrichment center',
	  isPublished: true,
		content:
			'<p>We hope your brief detention in the relaxation vault has been a pleasant one.</p><p>Your specimen has been processed and we are now ready to begin the test proper.</p>'
	},

	{
		slug: 'safety',
		title: 'Safety notice',
		isPublished: true,
		content:
			'<p>While safety is one of many Enrichment Center Goals, the Aperture Science High Energy Pellet, seen to the left of the chamber, can and has caused permanent disabilities, such as vaporization. Please be careful.</p>'
	},

	{
		slug: 'cake',
		title: 'This was a triumph',
		isPublished: false,
		content: "<p>I'm making a note here: HUGE SUCCESS.</p>"
	}
];

export const getSummaries = query(async () => {
	return posts.map((post) => ({
		slug: post.slug,
		title: post.title
	}));
});

export const getPost = query(v.string(), async (slug) => {
	return posts.find((post) => post.slug === slug) ?? error(404);
});

export const createPost = form((data) => {
	const title = data.get('title');
	const content = data.get('content');

	if (typeof title !== 'string' || typeof content !== 'string') {
		error(400, 'Title and content are required');
	}

	const slug = title.toLowerCase().replace(/ /g, '-');

	posts.push({
		slug,
		title,
		content,
		isPublished: true
	});

	redirect(303, `/blog/${slug}`);
});

export const toggleIsPublished = command(
	v.string(), async (slug) => {
		for (const post of posts) {
			if (post.slug === slug) {
				post.isPublished = !post.isPublished;
			}
		}
	}
);
