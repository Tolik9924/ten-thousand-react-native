import { postsApi } from './axiosInstance';
import type { Post } from '@/types/posts';

export type { Post };

export const fetchPosts = async (limit?: number): Promise<Post[]> => {
	const res = await postsApi.get<Post[]>('/posts', {
		params: limit ? { _limit: limit } : undefined,
	});

	return res.data;
};

export const fetchPostById = async (postId: number): Promise<Post> => {
	const res = await postsApi.get<Post>(`/posts/${postId}`);
	return res.data;
};

export const searchPosts = async (query: string): Promise<Post[]> => {
	const res = await postsApi.get<Post[]>('/posts');

	const q = query.toLowerCase();

	return res.data.filter(
		(post) => post.title.toLowerCase().includes(q) || post.body.toLowerCase().includes(q),
	);
};
