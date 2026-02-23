/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useAuth } from '@/hooks/useAuth';

type UserData = {
	id: number;
	username: string;
	firstName: string;
	lastName: string;
	gender: string;
	email: string;
	image: string;
};

type AuthContextType = {
	user: UserData | null;
	isLogIn: boolean;
	isLoading: boolean;
	refetch: () => void;
	logout: () => void;
	login: (userData: UserData) => void;
};

type UserProvider = {
	children: ReactNode;
};

const AuthContext = createContext<AuthContextType>({
	user: {
		id: 0,
		username: '',
		firstName: '',
		lastName: '',
		gender: '',
		email: '',
		image: '',
	},
	isLogIn: false,
	isLoading: false,
	refetch: () => {},
	logout: () => {},
	login: () => {},
});

export const AuthProvider = ({ children }: UserProvider) => {
	const { data, isLoading, refetch } = useAuth();
	const [user, setUser] = useState<typeof data | null>(data);
	//const user = data ?? null;

	useEffect(() => {
		if (data) {
			setUser(data);
		}
	}, [data]);

	const isLogIn = !!user?.id;

	const logout = async () => {
		await SecureStore.deleteItemAsync('auth');
		setUser(null);
	};

	const login = (userData: UserData) => setUser(userData);

	return (
		<AuthContext.Provider value={{ user, isLogIn, isLoading, refetch, logout, login }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthData = () => useContext(AuthContext);
