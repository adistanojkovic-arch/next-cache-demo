import { getPostById } from '@/app/actions/posts/get-post-by-id';

type Props = {
	params: Promise<{
		id: string;
	}>;
};

export default async function PostDetailsSection({ params }: Props) {
	const { id } = await params;
	const post = await getPostById(id);

	return (
		<>
			<h1 className="text-3xl font-bold">{post.title}</h1>

			<p className="mt-4 text-lg text-gray-700 whitespace-pre-line">{post.body}</p>
		</>
	);
}

