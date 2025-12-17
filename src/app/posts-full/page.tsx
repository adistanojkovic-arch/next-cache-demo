'use client';

import { useQuery } from '@tanstack/react-query';
import PostsListClient from '../components/posts-list-client';

async function fetchPosts() {
	const res = await fetch('/api/posts');

	if (!res.ok) {
		throw new Error('Failed to fetch posts');
	}

	return res.json();
}

export default function PostsFullPage() {
	const { data, isLoading, isError, error, isFetching } = useQuery({
		queryKey: ['posts'],
		queryFn: fetchPosts,
		staleTime: 30_000
	});

	const posts = data?.posts ?? [];

	if (isLoading) {
		return (
			<div className="p-8">
				<p className="text-gray-600">Loading posts…</p>
			</div>
		);
	}

	if (isError) {
		return (
			<div className="p-8">
				<p className="text-red-600">{(error as Error).message}</p>
			</div>
		);
	}

	return (
		<div className="p-8 space-y-6">
			<h1 className="text-3xl font-bold">Posts – full view (TanStack Query)</h1>

			<p className="text-sm text-gray-500">
				Client cache fetched at: {data?.fetchedAt}
				{isFetching && ' (refreshing…)'}
			</p>

			<PostsListClient posts={posts.slice(0, 20)} />
		</div>
	);
}

