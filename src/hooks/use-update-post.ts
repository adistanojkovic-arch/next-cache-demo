import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

type UpdatePayload = {
	id: number;
	title: string;
	body: string;
};

async function updatePost({ id, title, body }: UpdatePayload) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ title, body })
	});

	if (!res.ok) {
		throw new Error('Failed to update post');
	}

	return res.json();
}

export function useUpdatePost() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: updatePost,

		onMutate: async ({ id, title, body }) => {
			await queryClient.cancelQueries({ queryKey: ['posts'] });

			const previousPosts = queryClient.getQueryData<any[]>(['posts']);

			queryClient.setQueryData<any[]>(['posts'], (old) => old?.map((post) => (post.id === id ? { ...post, title, body } : post)));

			return { previousPosts };
		},

		onError: (_err, _vars, context) => {
			if (context?.previousPosts) {
				queryClient.setQueryData(['posts'], context.previousPosts);
			}
			toast.error('Failed to save post');
		},

		onSuccess: () => {
			toast.success('Post successfully updated');
		},

		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['posts'] });
		}
	});
}

