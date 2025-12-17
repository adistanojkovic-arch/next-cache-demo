export default function HomePage() {
	return (
		<div className="space-y-10">
			<header className="space-y-3">
				<h1 className="text-4xl font-bold tracking-tight">Data Caching in Modern Next.js Applications</h1>

				<p className="text-gray-600 max-w-2xl text-lg">
					This demo showcases how modern Next.js applications handle data caching and synchronization across different layers of the stack —
					from server-side rendering to live client-side updates.
				</p>
			</header>

			<section className="max-w-2xl rounded-lg border bg-white p-6 shadow-sm">
				<ul className="space-y-4 text-gray-700">
					<li className="flex gap-3">
						<span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
						<p>
							<strong>Cache Components</strong> (<code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">use cache</code>) –
							explicit, opt-in caching for server components and functions.
						</p>
					</li>

					<li className="flex gap-3">
						<span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
						<p>
							<strong>Tag-based caching</strong> (<code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">cacheTag</code>) –
							fine-grained cache invalidation using semantic tags.
						</p>
					</li>

					<li className="flex gap-3">
						<span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
						<p>
							<strong>Cache lifecycle control</strong> (<code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">cacheLife</code>) –
							configure how long cached data is served, revalidated, or expired.
						</p>
					</li>

					<li className="flex gap-3">
						<span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
						<p>
							<strong>Revalidation strategies</strong> (<code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">revalidateTag</code>
							, <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">revalidatePath</code>) – update server caches without
							rebuilding or reloading the entire application.
						</p>
					</li>
				</ul>
			</section>

			<p className="text-gray-600 max-w-2xl">
				Alongside server-side caching, this demo also highlights how client-side data synchronization works using{' '}
				<strong>TanStack Query</strong> — enabling instant UI updates after user interactions.
			</p>
		</div>
	);
}

