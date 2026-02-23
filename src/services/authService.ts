import axios from 'axios';
import * as Keychain from 'react-native-keychain';
import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { apiUrl } from '@/constants/env';

const AUTH_URL = `${apiUrl}/auth/login`;
const REFRESH_URL = `${apiUrl}/auth/refresh`;

export interface LoginPayload {
	username: string;
	password: string;
}

export interface AuthResponse {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	accessToken: string;
	refreshToken: string;
}

// 💾 SAVE TOKENS (secure storage)
export const saveTokens = async (accessToken: string, refreshToken: string) => {
	const tokens = JSON.stringify({ accessToken, refreshToken });
	if (Platform.OS === 'ios') {
		await Keychain.setGenericPassword('auth', tokens, {
			accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
		});
	} else {
		await SecureStore.setItemAsync('auth', tokens);
	}
};

// 🗑️ CLEAR TOKENS
export const clearTokens = async () => {
	if (Platform.OS === 'ios') {
		await Keychain.resetGenericPassword();
	} else {
		await SecureStore.deleteItemAsync('auth');
	}
};

// 📥 GET ACCESS TOKEN
export const getAccessToken = async (): Promise<string | null> => {
	if (Platform.OS === 'ios') {
		const credentials = await Keychain.getGenericPassword();
		if (!credentials) return null;
		return JSON.parse(credentials.password).accessToken;
	} else {
		const tokens = await SecureStore.getItemAsync('auth');
		if (!tokens) return null;
		return JSON.parse(tokens).accessToken;
	}
};

// 📥 GET REFRESH TOKEN
export const getRefreshToken = async (): Promise<string | null> => {
	if (Platform.OS === 'ios') {
		const credentials = await Keychain.getGenericPassword();
		if (!credentials) return null;
		return JSON.parse(credentials.password).refreshToken;
	} else {
		const tokens = await SecureStore.getItemAsync('auth');
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

// 🔄 REFRESH TOKEN (raw axios to avoid interceptor loop)
export const refreshToken = async (token: string): Promise<string> => {
	const response = await axios.post(REFRESH_URL, { refreshToken: token });
	const { accessToken } = response.data;
	const storedRefresh = await getRefreshToken();
	await saveTokens(accessToken, storedRefresh!);
	return accessToken;
};

// 🧠 CHECK BIOMETRIC SUPPORT
export const isBiometricAvailable = async () => {
	const biometryType = await Keychain.getSupportedBiometryType();
	return biometryType; // FACE_ID / TOUCH_ID / FINGERPRINT / null
};
