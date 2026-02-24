import { useQuery } from '@tanstack/react-query';
import api from '@/API';
import { postsUrl } from '@/constants/env';

export const usePost = (postId: string | string[]) => {
	const postUrl = `${postsUrl}/${postId}`;
	return useQuery({
		queryKey: ['posts', postId],
		queryFn: async () => {
			const res = await api.get(postUrl);
			return res.data;
		},
		staleTime: 1000 * 60 * 5,
		gcTime: 1000 * 60 * 60, // ⬅️ cacheTime перейменували!
	});
};
