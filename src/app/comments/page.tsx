import CommentsSection from './comments-section';

export default function CommentsPage() {
	return (
		<div className="p-8 space-y-6">
			<h1 className="text-3xl font-bold">Comments – Live (TanStack Query)</h1>

			<p className="text-gray-600 max-w-xl">
				Comments are fetched and managed on the client using TanStack Query. All changes are reflected instantly without a page reload.
			</p>

			<CommentsSection />
		</div>
	);
}

