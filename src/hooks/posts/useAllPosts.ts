import { useQuery } from '@tanstack/react-query';

import { postsUrl } from '@/constants/env';
import api from '@/API';

export const useAllPosts = () =>
	useQuery({
		queryKey: ['allPosts'],
		queryFn: async () => {
			const res = await api.get(`${postsUrl}/posts`);
			return res.data;
		},
		staleTime: 1000 * 60 * 5,
		gcTime: 1000 * 60 * 60, // ⬅️ cacheTime перейменували!
	});
