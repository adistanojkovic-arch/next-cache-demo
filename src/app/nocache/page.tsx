import { Suspense } from 'react';
import NoCachePostsSection from './posts-section';

export default function NoCachePage() {
	return (
		<div className="space-y-6">
			<h1 className="text-4xl font-bold">No cache example</h1>
			<p className="text-gray-700">
				**This page uses <code>cache: "no-store"</code>**
			</p>
			<Suspense fallback={<p className="text-gray-400">Loading posts (no cache)…</p>}>
				<NoCachePostsSection />
			</Suspense>
		</div>
	);
}

