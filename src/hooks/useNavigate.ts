import { Route, useRouter } from 'expo-router';

export const useNavigate = () => {
	const router = useRouter();

	return (navigate: Route) => {
		router.push(navigate);
	};
};
