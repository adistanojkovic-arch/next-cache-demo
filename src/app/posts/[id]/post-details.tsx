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
		<div className="max-w-2xl space-y-4">
			<article className="border rounded-lg bg-white p-6 shadow-sm space-y-4">
				<h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>

				<div className="h-px bg-gray-200" />

				<p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">{post.body}</p>
			</article>
		</div>
	);
}

