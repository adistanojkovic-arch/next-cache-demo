'use cache: remote';

import { cacheTag, cacheLife } from 'next/cache';

export async function getPosts() {
	cacheTag('posts-list');
	cacheLife({
		stale: 30, // 30 sec - old cache
		revalidate: 60, // 1 min - SWR background update
		expire: 300 // 5 min - hard expire
	});
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	return res.json();
}

