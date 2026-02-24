import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { postsUrl } from '@/constants/env';

export const useAllPosts = () =>
	useQuery({
		queryKey: ['allPosts'],
		queryFn: async () => {
			const res = await axios.get(postsUrl);
			return res.data;
		},
		staleTime: 1000 * 60 * 5,
		gcTime: 1000 * 60 * 60, // ⬅️ cacheTime перейменували!
	});
