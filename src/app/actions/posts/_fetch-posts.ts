export async function fetchPosts(options?: RequestInit) {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', options);
	return res.json();
}
