import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiUrl } from '@/constants/env';
import { getPin } from '@/services/storage';

const api = axios.create({
	baseURL: apiUrl,
	headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(async (config) => {
	const token = await getPin();
	if (token && config.headers) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		if (error.response?.status === 401) {
			await AsyncStorage.clear();
		}
		return Promise.reject(error);
	},
);

export default api;
