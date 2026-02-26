import { Route } from 'expo-router';

export const NAVIGATION = {
	home: '/home',
	createPinCode: '/auth/create-pin-code',
	pinCode: '/auth/pin-code',
	login: '/auth/login',
	register: '/auth/register',
	language: '/home/language',
	post: (id: string): Route => `/home/post/${id}` as Route,
} as const;
