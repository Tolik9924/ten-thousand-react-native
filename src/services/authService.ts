import axios from 'axios';
import * as Keychain from 'react-native-keychain';
import api from '@/API';
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
export async function saveTokens(accessToken: string, refreshToken: string) {
	await Keychain.setGenericPassword('auth', JSON.stringify({ accessToken, refreshToken }), {
		accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
	});
}

// 📥 GET ACCESS TOKEN
export async function getAccessToken(): Promise<string | null> {
	const credentials = await Keychain.getGenericPassword();
	if (!credentials) return null;

	const parsed = JSON.parse(credentials.password);
	return parsed.accessToken;
}

// 📥 GET REFRESH TOKEN
export async function getRefreshToken(): Promise<string | null> {
	const credentials = await Keychain.getGenericPassword();
	if (!credentials) return null;

	const parsed = JSON.parse(credentials.password);
	return parsed.refreshToken;
}

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
