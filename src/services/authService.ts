import axios from 'axios';
import * as Keychain from 'react-native-keychain';
import api from '@/API';
import { apiUrl } from '@/constants/env';
import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';

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
	console.log('TOKENS: ', tokens);

	if (Platform.OS === 'ios') {
		await Keychain.setGenericPassword('auth', tokens, {
			accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
		});
	} else if (Platform.OS === 'android') {
		await SecureStore.setItemAsync('auth', tokens);
	}
};

// 📥 GET ACCESS TOKEN
export async function getAccessToken(): Promise<string | null> {
	const credentials = await Keychain.getGenericPassword();
	if (!credentials) return null;

	const parsed = JSON.parse(credentials.password);
	return parsed.accessToken;
}

// 📥 GET REFRESH TOKEN
export const getRefreshToken = async (): Promise<string | null> => {
	if (Platform.OS === 'ios') {
		const credentials = await Keychain.getGenericPassword();
		if (!credentials) return null;

		const parsed = JSON.parse(credentials.password);
		return parsed.refreshToken;
	} else if (Platform.OS === 'android') {
		const tokens = await SecureStore.getItemAsync('auth');
		if (!tokens) return null;

		const parsed = JSON.parse(tokens);
		return parsed.refreshToken;
	}

	return null;
};

// 🔐 LOGIN
export const login = async (payload: LoginPayload): Promise<AuthResponse> => {
	const response = await api.post(AUTH_URL, payload);
	const data: AuthResponse = response.data;
	await saveTokens(data.accessToken, data.refreshToken);
	return data;
};

// 🔄 REFRESH TOKEN
export async function refreshToken(token: string) {
	const response = await axios.post(REFRESH_URL, {
		refreshToken: token,
	});

	const { accessToken } = response.data;

	const storedRefresh = await getRefreshToken();
	await saveTokens(accessToken, storedRefresh!);

	return accessToken;
}

// 🧠 CHECK BIOMETRIC SUPPORT
export async function isBiometricAvailable() {
	const biometryType = await Keychain.getSupportedBiometryType();
	return biometryType; // FACE_ID / TOUCH_ID / FINGERPRINT / null
}

// // 🚪 LOGOUT
// export async function logout() {
//   await Keychain.resetGenericPassword();
//   await Keychain.resetInternetCredentials("pin_code");
// }
