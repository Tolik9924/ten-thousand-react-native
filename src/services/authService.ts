import axios from 'axios';
import * as Keychain from 'react-native-keychain';
import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { apiUrl } from '@/constants/env';
import { PLATFORMS } from '@/constants/platforms';

const AUTH_URL = `${apiUrl}/auth/login`;
const AUTH = 'auth';

export type LoginPayload = {
	username: string;
	password: string;
};

export type AuthResponse = {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	accessToken: string;
	refreshToken: string;
};

// 💾 SAVE TOKENS (secure storage)
export const saveTokens = async (accessToken: string, refreshToken: string) => {
	const tokens = JSON.stringify({ accessToken, refreshToken });
	if (Platform.OS === PLATFORMS.ios) {
		await Keychain.setGenericPassword(AUTH, tokens, {
			accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
		});
	} else {
		await SecureStore.setItemAsync(AUTH, tokens);
	}
};

// 🗑️ CLEAR TOKENS
export const clearTokens = async () => {
	if (Platform.OS === PLATFORMS.ios) {
		await Keychain.resetGenericPassword();
	} else {
		await SecureStore.deleteItemAsync(AUTH);
	}
};

// 📥 GET ACCESS TOKEN
export const getAccessToken = async (): Promise<string | null> => {
	if (Platform.OS === PLATFORMS.ios) {
		const credentials = await Keychain.getGenericPassword();
		if (!credentials) return null;
		return JSON.parse(credentials.password).accessToken;
	} else {
		const tokens = await SecureStore.getItemAsync(AUTH);
		if (!tokens) return null;
		return JSON.parse(tokens).accessToken;
	}
};

// 📥 GET REFRESH TOKEN
export const getRefreshToken = async (): Promise<string | null> => {
	if (Platform.OS === PLATFORMS.ios) {
		const credentials = await Keychain.getGenericPassword();
		if (!credentials) return null;
		return JSON.parse(credentials.password).refreshToken;
	} else {
		const tokens = await SecureStore.getItemAsync(AUTH);
		if (!tokens) return null;
		return JSON.parse(tokens).refreshToken;
	}
};

// 🔐 LOGIN (public endpoint — raw axios, no auth header needed)
export const login = async (payload: LoginPayload): Promise<AuthResponse> => {
	const response = await axios.post<AuthResponse>(AUTH_URL, payload);
	const data = response.data;
	await saveTokens(data.accessToken, data.refreshToken);
	return data;
};
