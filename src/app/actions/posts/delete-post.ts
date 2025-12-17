'use server';

import { constants } from '@/app/const';
import { updateTag } from 'next/cache';

export async function deletePost(id: string) {
	const res = await fetch(`${constants.api}/posts/${id}`, {
		method: 'DELETE'
	});

	if (!res.ok) {
		throw new Error('Failed to delete post');
	}

	updateTag('posts-list');
}

