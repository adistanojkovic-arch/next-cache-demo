import Link from 'next/link';
import { getPostById } from '@/app/actions/posts/get-post-by-id';

type PostDetailsProps = {
	params: Promise<{
		id: string;
	}>;
};

export default async function PostDetails({ params }: PostDetailsProps) {
	const { id } = await params;
	const post = await getPostById(id);

	return (
		<div className="p-8 space-y-4">
			<Link href="/posts" className="text-blue-600 hover:underline">
				← Back
			</Link>

			<h1 className="text-3xl font-bold">{post.title}</h1>

			<p className="text-lg text-gray-700 whitespace-pre-line">{post.body}</p>
		</div>
	);
}

