import { getPosts } from '../actions/posts/get-posts';
import { refreshPosts } from '../actions/posts/refresh-posts';
import PostsListClient from '../components/posts-list-client';
import RefreshButton from './refresh-button';

export default async function PostsPage() {
	const { posts, duration, fetchedAt } = await getPosts();

	return (
		<div className="p-8 space-y-6">
			<h1 className="text-4xl font-bold">Posts (Next.js 16 Cache Demo)</h1>
			<p className="font-semibold">Cache execution time: {duration} ms</p>
			<p className="text-sm text-gray-500">Data fetched at: {fetchedAt}</p>
			<RefreshButton action={refreshPosts} />
			<PostsListClient posts={posts} />
		</div>
	);
}

