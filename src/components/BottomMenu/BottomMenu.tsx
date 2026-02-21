import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

import { useTranslation } from 'react-i18next';
import { styles } from './BottomMenu.styles';
import { useRouter } from 'expo-router';

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

export const BottomMenu = () => {
	const route = useRoute();
	const router = useRouter();

	const { t } = useTranslation();

	return (
		<View style={styles.container}>
			{MENU.map((item) => (
				<TouchableOpacity
					style={styles.item}
					key={item.name}
					onPress={() => router.push(item.navigate)}
				>
					<Ionicons
						name={item.iconName}
						size={28}
						color={item.navigate === route.name ? '#FA8A34' : '#858C94'}
					/>
					<Text style={[styles.menuText, route.name === item.navigate && styles.routeText]}>
						{t(item.name)}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};
