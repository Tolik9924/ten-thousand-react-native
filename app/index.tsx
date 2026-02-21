import 'expo-router/entry';
import AuthScreen from '@/screens/Auth/AuthScreen/AuthScreen';
import { Redirect } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from '../src/redux/store';
import { useEffect, useState } from 'react';
import { checkPin } from '../src/utils/checkPin';

export default function Page() {
	const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
	const [pinExists, setPinExists] = useState<boolean | null>(null);

	useEffect(() => {
		(async () => {
			if (isLoggedIn) {
				const isPinCode = await checkPin();
				setPinExists(isPinCode);
			}
		})();
	}, [isLoggedIn]);

	if (isLoggedIn && !pinExists) {
		return <Redirect href="/auth/create-pin-code" />;
	}

	if (isLoggedIn && pinExists) {
		return <Redirect href="/auth/pin-code" />;
	}

	return <AuthScreen />;
}
