import * as SecureStore from 'expo-secure-store';

export const checkPin = async (): Promise<boolean> => {
	const pin = await SecureStore.getItemAsync('user_pin');
	return !!pin;
};
