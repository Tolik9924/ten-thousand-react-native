import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';

// 1️⃣ створюємо queryClient
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5, // 5 хв
			gcTime: 1000 * 60 * 60, // 1 година
			retry: 1,
			refetchOnMount: false, // щоб не перезаписувати кеш при перезапуску
			refetchOnReconnect: false,
		},
	},
});

// 2️⃣ створюємо persister
const asyncStoragePersistor = createAsyncStoragePersister({
	storage: AsyncStorage,
});

// 3️⃣ підключаємо персист
persistQueryClient({
	queryClient,
	persister: asyncStoragePersistor,
	maxAge: 1000 * 60 * 60, // кеш до 1 години
});
