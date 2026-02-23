import { useQuery } from '@tanstack/react-query';
import api from '@/API';
import { apiUrl } from '@/constants/env';
import type { UserData } from '@/types/auth';

export const useAuth = (enabled: boolean) =>
	useQuery<UserData>({
		queryKey: ['user'],
		queryFn: async () => {
			const response = await api.get<UserData>(`${apiUrl}/auth/me`);
			return response.data;
		},
		enabled,
		staleTime: 1000 * 60 * 5, // 5 minutes
		retry: 1,
	});
