import { useQuery } from '@tanstack/react-query';
import api from '@/API';
import { apiUrl } from '@/constants/env';
import { getRefreshToken } from '@/services/authService';

export const useAuth = () => {
	const token = getRefreshToken();

	return useQuery({
		queryKey: ['user'],
		queryFn: async () => {
			const response = await api.get(`${apiUrl}/auth/me`);
			return response.data;
		},
		enabled: !!token, // remove for testing
		staleTime: 1000 * 60 * 5, // 5 minutes
		retry: 1,
	});
};
