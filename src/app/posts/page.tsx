import { refreshPosts } from '../actions/posts/actions';
import { getPosts } from './lib/get-posts';
import RefreshButton from './refresh-button';

export default async function PostsPage() {
	const posts = await getPosts();

	return (
		<div className="p-8 space-y-6">
			<h1 className="text-4xl font-bold">Posts (Next.js 16 Cache Demo)</h1>

			<RefreshButton action={refreshPosts} />

			<ul className="space-y-3">
				{posts.slice(0, 20).map((p: any) => (
					<li key={p.id} className="border p-4 rounded">
						<a href={`/posts/${p.id}`} className="text-blue-600 hover:underline">
							{p.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

