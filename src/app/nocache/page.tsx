export default async function NoCachePage() {
	const start = Date.now();

	const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });

	const posts = await res.json();
	const duration = Date.now() - start;

	return (
		<div className="space-y-6">
			<h1 className="text-3xl font-bold">No cache example</h1>

			<p className="text-gray-700">
				Ova stranica koristi <code>cache: "no-store"</code>.
			</p>

			<p className="font-semibold">Fetch duration: {duration} ms</p>

			<ul className="space-y-2">
				{posts.slice(0, 10).map((p: any) => (
					<li key={p.id} className="border p-3 rounded">
						{p.title}
					</li>
				))}
			</ul>
		</div>
	);
}
