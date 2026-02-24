import Constants from 'expo-constants';

type AppExtra = {
	apiUrl: string;
	appEnv: string;
	postsUrl: string;
};

const extra = (Constants.expoConfig?.extra ?? {}) as AppExtra;

export const apiUrl: string = extra.apiUrl ?? '';
export const postsUrl: string = extra.postsUrl ?? '';
//export const appEnv: string = extra.appEnv ?? 'development';
