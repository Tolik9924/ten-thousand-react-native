import 'expo-router/entry';
import AuthScreen from '@/screens/Auth/AuthScreen/AuthScreen';
import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import { checkPin } from '../src/utils/checkPin';
import { useAuthData } from '../src/context/auth';

export default function Page() {
	const [pinExists, setPinExists] = useState<boolean | null>(null);
	const { isLogIn, isLoading } = useAuthData();

	useEffect(() => {
		if (isLogIn) {
			checkPin().then(setPinExists);
		}
	}, [isLogIn]);

	// Чекаємо на завантаження auth або на результат checkPin
	if (isLoading || (isLogIn && pinExists === null)) return null;

	if (isLogIn && !pinExists) return <Redirect href="/auth/create-pin-code" />;
	if (isLogIn && pinExists) return <Redirect href="/auth/pin-code" />;

	return <AuthScreen />;
}
