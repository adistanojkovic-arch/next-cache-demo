import './globals.css';
import Link from 'next/link';
import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="min-h-screen bg-gray-50 text-gray-900">
				<Providers>
					<nav className="border-b bg-white">
						<div className="max-w-5xl mx-auto px-6 py-4 flex gap-6">
							<Link href="/" className="font-semibold hover:underline">
								Home
							</Link>
							<Link href="/posts" className="font-semibold hover:underline">
								Posts (cached)
							</Link>
							<Link href="/nocache" className="font-semibold hover:underline">
								No cache
							</Link>
							<Link href="/posts-full" className="font-semibold hover:underline">
								Posts - full (TanStack Query)
							</Link>
						</div>
					</nav>

					<main className="max-w-5xl mx-auto px-6 py-8">{children}</main>
				</Providers>
			</body>
		</html>
	);
}

