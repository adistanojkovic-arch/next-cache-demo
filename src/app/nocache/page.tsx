import { getPostsNoCache } from '../actions/posts/get-posts-no-cache';

export default async function NoCachePage() {
	const { posts, duration, fetchedAt } = await getPostsNoCache();

	return (
		<div className="p-8 space-y-6">
			<h1 className="text-4xl font-bold">No cache example</h1>

			<p className="font-semibold">Fetch duration: {duration} ms</p>

			<p className="text-sm text-gray-500">Data fetched at: {fetchedAt}</p>

			<ul className="space-y-3">
				{posts.slice(0, 20).map((p: any) => (
					<li key={p.id} className="border p-4 rounded">
						{p.title}
					</li>
				))}
			</ul>
		</div>
	);
}

