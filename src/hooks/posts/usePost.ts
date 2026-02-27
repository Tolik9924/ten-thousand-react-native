import { useQuery } from '@tanstack/react-query';
import api from '@/API';
import { postsUrl } from '@/constants/env';
import type { PostWithComments } from '@/types/posts';

export const usePost = (postId: string | string[]) => {
	const id = Array.isArray(postId) ? postId[0] : postId;
	const postUrl = `${postsUrl}/posts/${id}`;

	return useQuery<PostWithComments>({
		queryKey: ['posts', id],
		queryFn: async () => {
			const [res, resComments] = await Promise.all([
				api.get(postUrl),
				api.get(`${postUrl}/comments`),
			]);
			return { ...res.data, comments: resComments.data };
		},
		staleTime: 1000 * 60 * 5,
		gcTime: 1000 * 60 * 60,
	});
};
