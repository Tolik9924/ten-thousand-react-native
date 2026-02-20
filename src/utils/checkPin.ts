import * as SecureStore from 'expo-secure-store';

export const checkPin = async (): Promise<boolean | null> => {
	const pin: string | null = await SecureStore.getItemAsync('user_pin');
	return !!pin;
};
