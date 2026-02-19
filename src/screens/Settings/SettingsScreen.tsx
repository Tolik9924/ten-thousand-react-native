import { BottomMenu } from '@/components/BottomMenu/BottomMenu';
import { deletePin } from '@/services/storage';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/redux/slices/authSlice';
import { RootState } from '@/redux/store';

import { Button } from '@/components/Button/Button';
import { Link } from '@/components/Link/Link';
import { styles } from './SettingsScreen.styles';
import { ScreenProps } from '@/navigation/types';

export default function SettingsScreen({ navigation }: ScreenProps<'Settings'>) {
	const dispatch = useDispatch();
	const { name, photo } = useSelector((state: RootState) => state.user);
	const { t, i18n } = useTranslation();

	const handleLogout = async () => {
		dispatch(logout());
		await deletePin();
		navigation.replace('AuthStack');
	};

	const changeLanguage = (lang: string) => {
		i18n.changeLanguage(lang);
	};

	return (
		<View style={styles.page}>
			<View style={styles.personInfo}>
				<View style={styles.personInfo}>
					{photo ? (
						<Image source={{ uri: photo }} style={{ width: 100, height: 100, borderRadius: 50 }} />
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
					<Text style={styles.name}>{name}</Text>
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
