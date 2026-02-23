import 'expo-router/entry';
import AuthScreen from '@/screens/Auth/AuthScreen/AuthScreen';
import { Redirect } from 'expo-router';
//import { useSelector } from 'react-redux';
//import { RootState } from '../src/redux/store';
import { useEffect, useState } from 'react';
import { checkPin } from '../src/utils/checkPin';
import { useAuthData } from '../src/context/auth';

export default function Page() {
	const [pinExists, setPinExists] = useState<boolean | null>(null);
	const user = useAuthData();

	useEffect(() => {
		(async () => {
			if (user) {
				const isPinCode = await checkPin();
				setPinExists(isPinCode);
			}
		})();
	}, [user]);

	if (user && !pinExists) {
		return <Redirect href="/auth/create-pin-code" />;
	}

	if (user && pinExists) {
		return <Redirect href="/auth/pin-code" />;
	}

	return <AuthScreen />;
}
