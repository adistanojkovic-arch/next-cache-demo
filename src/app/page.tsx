export default function HomePage() {
	return (
		<div className="space-y-6">
			<h1 className="text-4xl font-bold">Next.js 16 Caching Demo</h1>

			<p className="text-lg text-gray-700">Ovaj projekat demonstrira različite vrste keširanja u Next.js 16:</p>

			<ul className="list-disc pl-6 space-y-2 text-gray-700">
				<li>
					Cache Components (<code>use cache</code>)
				</li>
				<li>
					Tag-based caching (<code>cacheTag</code>)
				</li>
				<li>
					Cache lifecycle (<code>cacheLife</code>)
				</li>
				<li>
					Revalidation (<code>revalidateTag</code>, <code>revalidatePath</code>)
				</li>
			</ul>

			<p className="text-gray-600">Koristi JSONPlaceholder kao mock backend.</p>
		</div>
	);
}

