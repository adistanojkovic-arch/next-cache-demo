'use cache: remote';

import { cacheTag, cacheLife } from 'next/cache';
import { fetchPosts } from './_fetch-posts';
import { sleep } from '@/app/helper/utils';

export async function getPosts() {
	const start = performance.now();

	cacheTag('posts-list');
	cacheLife({
		stale: 0,
		revalidate: 60,
		expire: 300
	});

	await sleep(3000);

	const posts = await fetchPosts();
	const duration = Math.round(performance.now() - start);

	return {
		posts,
		duration,
		mode: 'CACHE'
	};
}

