import { constants } from '@/app/const';

export async function fetchPosts(options?: RequestInit) {
	const res = await fetch(`${constants.api}/posts`, options);
	return res.json();
}

