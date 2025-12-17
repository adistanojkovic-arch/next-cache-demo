import Link from 'next/link';
import { Suspense } from 'react';
import PostDetailsSection from './post-details';
import { ArrowLeft } from 'lucide-react';

type PageProps = {
	params: Promise<{
		id: string;
	}>;
};

export default function PostDetailsPage({ params }: PageProps) {
	return (
		<div className="space-y-6">
			<Link href="/posts" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
				<ArrowLeft size={16} />
				<span>Back to posts</span>
			</Link>
			<Suspense fallback={<p className="text-gray-400">Loading post…</p>}>
				<PostDetailsSection params={params} />
			</Suspense>
		</div>
	);
}

