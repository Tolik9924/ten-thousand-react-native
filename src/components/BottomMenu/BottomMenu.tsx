import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useTranslation } from 'react-i18next';
import { styles } from './BottomMenu.styles';

const MENU = [
	{
		iconName: 'home',
		name: 'Home',
		navigate: '/home',
	},
	{
		iconName: 'search',
		name: 'Search',
		navigate: '/home/search',
	},
	{
		iconName: 'person',
		name: 'Profile',
		navigate: '/home/settings',
	},
] as const;

const ROUTE_GROUP_MAP: Record<string, string> = {
	'/home/language': '/home/settings',
};

export const BottomMenu = () => {
	const pathname = usePathname();
	const router = useRouter();

	const { t } = useTranslation();

	const resolvePathname = (pathname: string): string => {
		return ROUTE_GROUP_MAP[pathname] ?? pathname;
	};

	const isActiveRoute = (itemNavigate: string, pathname: string): boolean => {
		const resolved = resolvePathname(pathname);
		return resolved === itemNavigate || resolved.startsWith(itemNavigate + '/');
	};

	const getActiveNavigate = (pathname: string): string => {
		return (
			[...MENU]
				.filter((item) => isActiveRoute(item.navigate, pathname))
				.sort((a, b) => b.navigate.length - a.navigate.length)[0]?.navigate ?? ''
		);
	};

	const activeNavigate = useMemo(() => getActiveNavigate(pathname), [pathname]);

	return (
		<View style={styles.container}>
			{MENU.map((item) => {
				const isActive = item.navigate === activeNavigate;

				return (
					<TouchableOpacity
						style={styles.item}
						key={item.name}
						onPress={() => router.push(item.navigate)}
					>
						<Ionicons name={item.iconName} size={28} color={isActive ? '#FA8A34' : '#858C94'} />
						<Text style={[styles.menuText, isActive && styles.routeText]}>{t(item.name)}</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};
