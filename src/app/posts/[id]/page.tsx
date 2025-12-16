import { getPostById } from '../lib/get-post-by-id';

export default async function PostDetails({ params }: any) {
	const post = await getPostById(params.id);

	return (
		<div className="p-8">
			<a href="/posts" className="text-blue-600 hover:underline">
				← Back
			</a>

			<h1 className="text-3xl font-bold mt-4">{post.title}</h1>
			<p className="mt-4 text-lg text-gray-700">{post.body}</p>
		</div>
	);
}

