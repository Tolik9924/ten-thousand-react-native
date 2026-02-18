import axios from 'axios';
import * as Keychain from 'react-native-keychain';

const AUTH_URL = 'https://dummyjson.com/auth/login';
const REFRESH_URL = 'https://dummyjson.com/auth/refresh';

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

class AuthService {
	// 🔐 LOGIN
	async login(payload: LoginPayload): Promise<AuthResponse> {
		const response = await axios.post(AUTH_URL, payload);

		const data: AuthResponse = response.data;

		// Зберігаємо токени
		await this.saveTokens(data.accessToken, data.refreshToken);

		return data;
	}

	// 🔄 REFRESH TOKEN
	async refreshToken(refreshToken: string) {
		const response = await axios.post(REFRESH_URL, {
			refreshToken,
		});

		const { accessToken } = response.data;

		const storedRefresh = await this.getRefreshToken();
		await this.saveTokens(accessToken, storedRefresh!);

		return accessToken;
	}

	// 💾 SAVE TOKENS (secure storage)
	async saveTokens(accessToken: string, refreshToken: string) {
		await Keychain.setGenericPassword('auth', JSON.stringify({ accessToken, refreshToken }), {
			accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
		});
	}

	// 📥 GET ACCESS TOKEN
	async getAccessToken(): Promise<string | null> {
		const credentials = await Keychain.getGenericPassword();
		if (!credentials) return null;

		const parsed = JSON.parse(credentials.password);
		return parsed.accessToken;
	}

	// 📥 GET REFRESH TOKEN
	async getRefreshToken(): Promise<string | null> {
		const credentials = await Keychain.getGenericPassword();
		if (!credentials) return null;

		const parsed = JSON.parse(credentials.password);
		return parsed.refreshToken;
	}

	// 🧠 CHECK BIOMETRIC SUPPORT
	async isBiometricAvailable() {
		const biometryType = await Keychain.getSupportedBiometryType();
		return biometryType; // FACE_ID / TOUCH_ID / FINGERPRINT / null
	}

	//   // 🚪 LOGOUT
	//   async logout() {
	//     await Keychain.resetGenericPassword();
	//     await Keychain.resetInternetCredentials("pin_code");
	//   }
}

export const authService = new AuthService();
