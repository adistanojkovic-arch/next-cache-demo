'use client';

import { useState } from 'react';
import { useComments, useCreateComment, useUpdateComment, useDeleteComment } from '@/hooks/comments';
import { Trash2 } from 'lucide-react';

export default function CommentsSection() {
	const { data: comments = [], isLoading, isError } = useComments();
	const createMutation = useCreateComment();
	const updateMutation = useUpdateComment();
	const deleteMutation = useDeleteComment();
	const [showToast, setShowToast] = useState(false);
	const [showDeleteToast, setShowDeleteToast] = useState(false);

	const [draft, setDraft] = useState('');
	const [editingId, setEditingId] = useState<string | null>(null);

	if (isLoading) {
		return <p className="text-gray-600">Loading comments…</p>;
	}

	if (isError) {
		return <p className="text-red-600">Failed to load comments</p>;
	}

	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold">Comments ({comments.length})</h2>

			<div className="flex gap-2">
				<input
					className="flex-1 border px-3 py-2 rounded"
					placeholder="Write a comment…"
					value={draft}
					onChange={(e) => setDraft(e.target.value)}
				/>

				<button
					className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
					disabled={!draft || createMutation.isPending}
					onClick={async () => {
						createMutation.mutate(draft);
						setDraft('');

						setShowToast(true);
						setTimeout(() => setShowToast(false), 2500);
					}}>
					{createMutation.isPending ? 'Adding…' : 'Add'}
				</button>
			</div>

			<ul className="space-y-2">
				{comments.map((c, index) => (
					<li key={c.id + index} className="border p-3 rounded">
						{editingId === c.id ? (
							<div className="flex gap-2">
								<input
									className="flex-1 border px-2 py-1 rounded"
									defaultValue={c.comment}
									onBlur={(e) => {
										updateMutation.mutate({
											id: c.id,
											comment: e.target.value
										});
										setEditingId(null);
									}}
								/>
							</div>
						) : (
							<div className="flex justify-between items-center">
								<span className="cursor-pointer" onClick={() => setEditingId(c.id)}>
									{c.comment}
								</span>

								<button
									onClick={() => {
										deleteMutation.mutate(c.id);
										setShowDeleteToast(true);
										setTimeout(() => setShowDeleteToast(false), 2500);
									}}
									className="p-1 rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700"
									title="Delete comment">
									<Trash2 size={16} />
								</button>
							</div>
						)}
					</li>
				))}
			</ul>
			{showToast && (
				<div className="fixed bottom-6 right-6 z-50">
					<div className="bg-green-600 text-white px-4 py-3 rounded shadow-lg animate-fade-in">Comment successfully added</div>
				</div>
			)}
			{showDeleteToast && (
				<div className="fixed bottom-6 right-6 z-50">
					<div className="bg-red-800 text-white px-4 py-3 rounded shadow-lg animate-fade-in">Comment deleted</div>
				</div>
			)}
		</div>
	);
}

