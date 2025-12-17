export default function HomePage() {
	return (
		<div className="space-y-8">
			<h1 className="text-4xl font-bold">Data Caching in Modern Next.js Applications</h1>

			<p className="text-gray-700 max-w-2xl">
				This demo showcases how modern Next.js applications handle data caching and synchronization across different layers of the stack —
				from server-side rendering to live client-side updates.
			</p>

			<ul className="list-disc pl-6 space-y-3 text-gray-700 max-w-2xl">
				<li>
					<strong>Cache Components</strong> (<code>use cache</code>) – explicit, opt-in caching for server components and functions.
				</li>

				<li>
					<strong>Tag-based caching</strong> (<code>cacheTag</code>) – fine-grained cache invalidation using semantic tags.
				</li>

				<li>
					<strong>Cache lifecycle control</strong> (<code>cacheLife</code>) – configure how long cached data is served, revalidated, or
					expired.
				</li>

				<li>
					<strong>Revalidation strategies</strong> (<code>revalidateTag</code>, <code>revalidatePath</code>) – update server caches without
					rebuilding or reloading the entire application.
				</li>
			</ul>

			<p className="text-gray-600 max-w-2xl">
				Alongside server-side caching, this demo also highlights how client-side data synchronization works using TanStack Query — enabling
				instant UI updates after user interactions.
			</p>
		</div>
	);
}

