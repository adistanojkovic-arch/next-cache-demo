import Link from 'next/link';
import { Suspense } from 'react';
import PostDetailsSection from './post-details';

type PageProps = {
	params: Promise<{
		id: string;
	}>;
};

export default function PostDetailsPage({ params }: PageProps) {
	return (
		<div className="p-8 space-y-6">
			<Link href="/posts" className="text-blue-600 hover:underline">
				← Back
			</Link>

			<Suspense fallback={<p className="text-gray-400">Loading post…</p>}>
				<PostDetailsSection params={params} />
			</Suspense>
		</div>
	);
}

