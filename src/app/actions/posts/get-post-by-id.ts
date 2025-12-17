'use cache: remote';

import { constants } from '@/app/const';
import { sleep } from '@/app/helper/utils';
import { cacheTag, cacheLife } from 'next/cache';

export async function getPostById(id: string) {
	cacheTag(`post-${id}`);

	cacheLife({
		stale: 60, // 1 min – serve cached data
		revalidate: 120, // 2 min – background refresh
		expire: 120 // 2 min – hard expiration
	});

	await sleep(3000);

	const res = await fetch(`${constants.api}/posts/${id}`);
	return res.json();
}

