import { getPosts } from '../actions/posts/get-posts';
import PostsListClient from './posts-list-client';

export default async function PostsPage() {
	const { posts, duration } = await getPosts();

	return (
		<div className="space-y-6">
			<h1 className="text-4xl font-bold">Posts (Next.js 16 Cache Demo)</h1>
			<p className="font-semibold">Cache execution time: {duration} ms</p>
			<PostsListClient posts={posts} />
		</div>
	);
}

