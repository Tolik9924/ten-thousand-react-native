import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';
import { queryClient } from '@/queryClient';
import SplashScreen from '@/screens/Splash/SplashScreen';
import { store, persistor } from '@/redux/store';

export default function RootLayout() {
	return (
		<Provider store={store}>
			<PersistGate loading={<SplashScreen />} persistor={persistor}>
				<QueryClientProvider client={queryClient}>
					<StatusBar barStyle="dark-content" backgroundColor="#fff" />
					<Stack screenOptions={{ headerShown: false }} />
				</QueryClientProvider>
			</PersistGate>
		</Provider>
	);
}
