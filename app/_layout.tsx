import '@/translations/i18n';
import { Stack } from 'expo-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';
import { queryClient } from '@/queryClient';
import { AppProvider } from '../src/context/app-provider';

export default function RootLayout() {
	return (
		<QueryClientProvider client={queryClient}>
			<AppProvider>
				<StatusBar barStyle="dark-content" backgroundColor="#fff" />
				<Stack screenOptions={{ headerShown: false }} />
			</AppProvider>
		</QueryClientProvider>
	);
}
