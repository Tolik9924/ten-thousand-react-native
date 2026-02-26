import 'expo-router/entry';
import AuthScreen from '@/screens/Auth/AuthScreen/AuthScreen';
import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import SplashScreen from '@/screens/Splash/SplashScreen';
import { checkPin } from '@/utils/checkPin';
import { useAuthData } from '@/context/auth';

const Page = () => {
	const [pinExists, setPinExists] = useState<boolean | null>(null);
	const { isLogIn, isLoading } = useAuthData();

	useEffect(() => {
		if (isLogIn) {
			checkPin().then(setPinExists);
		}
	}, [isLogIn]);

	if (isLoading || (isLogIn && pinExists === null)) return <SplashScreen />;

	if (isLogIn && !pinExists) return <Redirect href="/auth/create-pin-code?isAuth=false" />;
	if (isLogIn && pinExists) return <Redirect href="/auth/pin-code?isAuth=true" />;

	return <AuthScreen />;
};

export default Page;
