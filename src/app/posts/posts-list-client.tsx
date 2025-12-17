'use client';

export default function PostsListClient({ posts = [] }: { posts?: any[] }) {
	return (
		<ul className="space-y-3">
			{posts.map((post) => (
				<li key={post.id} className="border p-4 rounded">
					<h3 className="font-semibold">{post.title}</h3>
					<p className="text-gray-600 mt-1">{post.body}</p>
				</li>
			))}
		</ul>
	);
}

