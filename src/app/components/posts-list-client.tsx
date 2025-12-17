'use client';

import { usePostsEditStore } from '@/store/posts-edit.store';
import { useUpdatePost } from '@/hooks/use-update-post';

export default function PostsListClient({ posts = [] }: { posts?: any[] }) {
	const { editingPostId, draftTitle, draftBody, startEdit, cancelEdit, setDraftTitle, setDraftBody } = usePostsEditStore();
	const updatePost = useUpdatePost();

	return (
		<ul className="space-y-3">
			{posts?.map((post) => {
				const isEditing = editingPostId === post.id;

				return (
					<li key={post.id} className="border p-4 rounded">
						{isEditing ? (
							<div className="space-y-2">
								<input
									className="w-full border px-2 py-1 rounded"
									value={draftTitle}
									onChange={(e) => setDraftTitle(e.target.value)}
								/>

								<textarea
									className="w-full border px-2 py-1 rounded"
									value={draftBody}
									onChange={(e) => setDraftBody(e.target.value)}
								/>

								<div className="flex gap-2">
									<button
										className="bg-blue-600 text-white px-3 py-1 rounded"
										onClick={() =>
											updatePost.mutate({
												id: post.id,
												title: draftTitle,
												body: draftBody
											})
										}>
										Save
									</button>

									<button className="text-gray-600" onClick={cancelEdit}>
										Cancel
									</button>
								</div>
							</div>
						) : (
							<div className="cursor-pointer" onClick={() => startEdit(post)}>
								<h3 className="font-semibold">{post.title}</h3>
								<p className="text-gray-600 line-clamp-2">{post.body}</p>
							</div>
						)}
					</li>
				);
			})}
		</ul>
	);
}

