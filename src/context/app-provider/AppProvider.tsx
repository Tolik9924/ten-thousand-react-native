import { ReactNode } from 'react';
import { AuthProvider } from '../auth/AuthContext';

export const AppProvider = ({ children }: { children: ReactNode }): ReactNode => {
	return <AuthProvider>{children}</AuthProvider>;
};
