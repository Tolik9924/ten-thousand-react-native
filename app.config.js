import 'dotenv/config';

const ENV = process.env.APP_ENV || 'development';

const apiUrls = {
	development: process.env.EXPO_PUBLIC_API_URL,
	production: process.env.EXPO_PUBLIC_API_URL_PROD,
};

export default ({ config }) => ({
	...config,
	extra: {
		apiUrl: apiUrls[ENV],
		appEnv: ENV,
		postsUrl: process.env.EXPO_PUBLIC_PLACEHOLDER,
	},
});
