import { constants } from '@/app/const';

export type Comment = {
	id: string;
	comment: string;
};

export async function fetchComments(): Promise<Comment[]> {
	const res = await fetch(`${constants.api}/comments`);

	if (!res.ok) {
		throw new Error('Failed to fetch comments');
	}

	return res.json();
}

export async function createComment(comment: string): Promise<Comment> {
	const res = await fetch(`${constants.api}/comments`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ comment })
	});

	if (!res.ok) {
		throw new Error('Failed to create comment');
	}

	return res.json();
}

export async function updateComment(id: string, comment: string): Promise<Comment> {
	const res = await fetch(`${constants.api}/comments/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ comment })
	});

	if (!res.ok) {
		throw new Error('Failed to update comment');
	}

	return res.json();
}

export async function deleteComment(id: string): Promise<void> {
	const res = await fetch(`${constants.api}/comments/${id}`, {
		method: 'DELETE'
	});

	if (!res.ok) {
		throw new Error('Failed to delete comment');
	}
}

