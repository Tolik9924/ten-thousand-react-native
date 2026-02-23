import React from 'react';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';
import { deletePin } from '@/services/storage';
import { BottomMenu } from '@/components/BottomMenu/BottomMenu';
import { Button } from '@/components/Button/Button';
import { Link } from '@/components/Link/Link';
import { styles } from './SettingsScreen.styles';
import { useAuthData } from '@/context/auth';

export default function SettingsScreen() {
	const { t, i18n } = useTranslation();
	const router = useRouter();
	const { user, logout } = useAuthData();

	const handleLogout = async () => {
		await logout();
		await deletePin();
		router.push('/auth/login');
	};

	const changeLanguage = async (lang: string) => {
		await i18n.changeLanguage(lang);
	};

	return (
		<View style={styles.page}>
			<View style={styles.personInfo}>
				<View style={styles.personInfo}>
					{user?.image ? (
						<Image
							source={{ uri: user?.image }}
							style={{ width: 100, height: 100, borderRadius: 50 }}
						/>
					) : (
						<View
							style={{
								width: 100,
								height: 100,
								borderRadius: 50,
								backgroundColor: '#ccc',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						/>
					)}
				</View>

				<View>
					<Text style={styles.name}>{`${user?.firstName} ${user?.lastName}`}</Text>
				</View>
			</View>

			<View style={styles.languages}>
				<Text style={styles.languagesTitle}>{t('language')}: </Text>
				<View style={styles.changeLanguage}>
					<Link text="EN" navigate={() => changeLanguage('en')} />
					<Link text="AR" navigate={() => changeLanguage('ar')} />
				</View>
			</View>

			<View style={styles.buttonContainer}>
				<Button title={t('logout')} onPress={handleLogout} />
			</View>
			<BottomMenu />
		</View>
	);
}
