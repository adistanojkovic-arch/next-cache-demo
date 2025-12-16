import { getPostsNoCache } from '../actions/posts/get-posts-no-cache';

export default async function NoCachePostsSection() {
	const { posts, duration, fetchedAt } = await getPostsNoCache();

	return (
		<>
			<p className="font-semibold">Fetch duration: {duration} ms</p>

			<p className="text-sm text-gray-500">Data fetched at: {fetchedAt}</p>

			<ul className="space-y-3">
				{posts.slice(0, 20).map((p: any) => (
					<li key={p.id} className="border p-4 rounded">
						{p.title}
					</li>
				))}
			</ul>
		</>
	);
}

