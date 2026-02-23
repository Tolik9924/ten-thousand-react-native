import axios from 'axios';
import { apiUrl } from '@/constants/env';
import { getAccessToken, clearTokens } from '@/services/authService';
import { queryClient } from '@/queryClient';

const api = axios.create({
	baseURL: apiUrl,
	headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(async (config) => {
	const token = await getAccessToken();
	if (token && config.headers) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		if (error.response?.status === 401) {
			await clearTokens();
			queryClient.clear();
		}
		return Promise.reject(error);
	},
);

export default api;
