import { getPostsNoCache } from '../actions/posts/get-posts-no-cache';

export default async function NoCachePostsSection() {
	const { posts, duration } = await getPostsNoCache();

	return (
		<>
			<p className="font-semibold">Fetch duration: {duration} ms</p>
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

