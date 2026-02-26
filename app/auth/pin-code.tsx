import CodeScreen from '@/screens/Auth/CreatePinScreen/CodeScreen';
import { useSearchParams } from 'expo-router/build/hooks';

const PinCode = () => {
	const searchParams = useSearchParams();
	const isAuth = Boolean(searchParams.get('isAuth'));

	return <CodeScreen isAuth={isAuth} />;
};

export default PinCode;
