import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type Post = {
	id: number;
	title: string;
	body: string;
	userId: number;
};

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=3';

export const usePosts = () =>
	useQuery<Post[]>({
		queryKey: ['posts'],
		queryFn: async () => {
			const res = await axios.get<Post[]>(POSTS_URL);
			return res.data;
		},
		staleTime: 1000 * 60 * 5,
		gcTime: 1000 * 60 * 60,
	});
