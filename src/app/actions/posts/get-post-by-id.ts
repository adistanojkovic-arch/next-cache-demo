'use cache: remote';

import { constants } from '@/app/const';
import { cacheTag, cacheLife } from 'next/cache';

export async function getPostById(id: string) {
	cacheTag(`post-${id}`);

	cacheLife({
		stale: 60,
		revalidate: 600,
		expire: 86400 // 24h
	});

	const res = await fetch(`${constants.api}/posts/${id}`);

	return res.json();
}

