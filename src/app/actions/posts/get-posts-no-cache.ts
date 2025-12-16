'use server';

import { sleep } from '@/app/helper/utils';
import { fetchPosts } from './_fetch-posts';

export async function getPostsNoCache() {
	const start = performance.now();

	await sleep(12000);
	const posts = await fetchPosts({ cache: 'no-store' });
	const duration = Math.round(performance.now() - start);

	return {
		posts,
		duration,
		fetchedAt: new Date().toISOString(),
		mode: 'NO CACHE'
	};
}

