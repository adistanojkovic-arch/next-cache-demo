'use client';

import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { useState, useTransition } from 'react';
import { deletePost } from '@/app/actions/posts/delete-post';
import { useRouter } from 'next/navigation';

export default function PostsListClient({ posts = [] }: { posts?: any[] }) {
	const [isPending, startTransition] = useTransition();
	const [showDeleteToast, setShowDeleteToast] = useState(false);
	const router = useRouter();

	return (
		<>
			<ul className="space-y-3">
				{posts.map((post) => (
					<li key={post.id} className="border p-4 rounded flex justify-between items-start gap-4">
						<div className="space-y-1">
							<Link href={`/posts/${post.id}`} className="block font-semibold hover:underline">
								{post.title}
							</Link>

							<p className="text-gray-600">{post.body}</p>
						</div>

						<button
							onClick={() =>
								startTransition(async () => {
									await deletePost(post.id);
									setShowDeleteToast(true);
									router.refresh();
								})
							}
							disabled={isPending}
							className="p-1 rounded text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-40"
							title="Delete post">
							<Trash2 size={16} />
						</button>
					</li>
				))}
			</ul>

			{showDeleteToast && (
				<div className="fixed bottom-6 right-6 z-50">
					<div className="bg-red-800 text-white px-4 py-3 rounded shadow-lg animate-fade-in">Post deleted</div>
				</div>
			)}
		</>
	);
}

