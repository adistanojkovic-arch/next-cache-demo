import { getPosts } from '@/app/actions/posts/get-posts';

export async function GET() {
	const posts = await getPosts();
	console.log('api route get - get posts', JSON.stringify(posts));
	return Response.json(posts);
}

