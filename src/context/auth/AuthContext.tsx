/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { getRefreshToken, clearTokens } from '@/services/authService';
import { useAuth } from '@/hooks/useAuth';
import type { UserData } from '@/types/auth';

type AuthContextType = {
	user: UserData | null;
	isLogIn: boolean;
	isLoading: boolean;
	refetch: () => void;
	logout: () => Promise<void>;
	login: (userData: UserData) => void;
};

type UserProvider = {
	children: ReactNode;
};

const AuthContext = createContext<AuthContextType>({
	user: null,
	isLogIn: false,
	isLoading: false,
	refetch: () => {},
	logout: async () => {},
	login: () => {},
});

export const AuthProvider = ({ children }: UserProvider) => {
	const queryClient = useQueryClient();
	const [hasToken, setHasToken] = useState<boolean>(false);
	const [localUser, setLocalUser] = useState<UserData | null>(null);

	useEffect(() => {
		getRefreshToken().then((token) => setHasToken(!!token));
	}, []);

	const { data: queryUser, isLoading, refetch } = useAuth(hasToken);

	// queryUser (сервер) має пріоритет; localUser — fallback одразу після логіну
	const user = queryUser ?? localUser;
	const isLogIn = !!user?.id;

	const login = (userData: UserData) => {
		setLocalUser(userData);
		setHasToken(true);
		queryClient.setQueryData(['user'], userData);
	};

	const logout = async () => {
		await clearTokens();
		setHasToken(false);
		setLocalUser(null);
		queryClient.removeQueries({ queryKey: ['user'] });
	};

	return (
		<AuthContext.Provider value={{ user, isLogIn, isLoading, refetch, logout, login }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthData = () => useContext(AuthContext);
