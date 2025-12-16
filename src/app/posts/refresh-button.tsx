'use client';

import { useState } from 'react';

export default function RefreshButton({ action }: any) {
	const [loading, setLoading] = useState(false);
	const [showToast, setShowToast] = useState(false);

	async function handleAction() {
		setLoading(true);
		await action();
		await new Promise((r) => setTimeout(r, 1000));
		setLoading(false);
		setShowToast(true);
		setTimeout(() => setShowToast(false), 2500);
	}

	return (
		<>
			<button
				onClick={handleAction}
				disabled={loading}
				className={`px-4 py-2 rounded text-white transition
          ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
        `}>
				{loading ? 'Reloading…' : 'Refresh Cached Posts'}
			</button>

			{showToast && (
				<div className="fixed bottom-6 right-6 z-50">
					<div className="bg-green-600 text-white px-4 py-3 rounded shadow-lg animate-fade-in">Successfully reloaded</div>
				</div>
			)}
		</>
	);
}

