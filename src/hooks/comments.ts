'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchComments, createComment, updateComment, deleteComment, Comment } from '@/app/api/comments/comments';

export function useComments() {
	return useQuery({
		queryKey: ['comments'],
		queryFn: fetchComments
	});
}

export function useCreateComment() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: createComment,
		onMutate: async (newComment) => {
			await queryClient.cancelQueries({ queryKey: ['comments'] });
			const previous = queryClient.getQueryData<Comment[]>(['comments']);
			queryClient.setQueryData<Comment[]>(['comments'], (old = []) => [...old, { id: 'temp-id', comment: newComment }]);
			return { previous };
		},
		onError: (_err, _newComment, ctx) => {
			if (ctx?.previous) {
				queryClient.setQueryData(['comments'], ctx.previous);
			}
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['comments'] });
		}
	});
}

export function useUpdateComment() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({ id, comment }: { id: string; comment: string }) => updateComment(id, comment),
		onMutate: async ({ id, comment }) => {
			await queryClient.cancelQueries({ queryKey: ['comments'] });
			const previous = queryClient.getQueryData<Comment[]>(['comments']);
			queryClient.setQueryData<Comment[]>(['comments'], (old = []) => old.map((c) => (c.id === id ? { ...c, comment } : c)));
			return { previous };
		},
		onError: (_err, _vars, ctx) => {
			if (ctx?.previous) {
				queryClient.setQueryData(['comments'], ctx.previous);
			}
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['comments'] });
		}
	});
}

export function useDeleteComment() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: deleteComment,
		onMutate: async (id: string) => {
			await queryClient.cancelQueries({ queryKey: ['comments'] });
			const previous = queryClient.getQueryData<Comment[]>(['comments']);
			queryClient.setQueryData<Comment[]>(['comments'], (old = []) => old.filter((c) => c.id !== id));
			return { previous };
		},
		onError: (_err, _id, ctx) => {
			if (ctx?.previous) {
				queryClient.setQueryData(['comments'], ctx.previous);
			}
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['comments'] });
		}
	});
}

