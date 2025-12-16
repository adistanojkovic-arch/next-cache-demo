'use cache: remote';

import { cacheTag, cacheLife } from 'next/cache';

export async function getPostById(id: string) {
	// Tag za pojedinačan post
	cacheTag(`post-${id}`);

	cacheLife({
		stale: 60,
		revalidate: 600,
		expire: 86400 // 24h
	});

	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	return res.json();
}

