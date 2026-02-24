import { useQuery } from '@tanstack/react-query';
import { Post } from '@/api/postsApi';
import { postsUrl } from '@/constants/env';
import api from '@/API';

export const usePosts = (limit: number) => {
	const postUrl = `${postsUrl}?_limit=${limit}`;

	return useQuery<Post[]>({
		queryKey: ['posts'],
		queryFn: async () => {
			const res = await api.get<Post[]>(postUrl);
			return res.data;
		},
		staleTime: 1000 * 60 * 5,
		gcTime: 1000 * 60 * 60,
	});
};
