import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { deletePin } from '@/services/storage';
import { BottomMenu } from '@/components/BottomMenu/BottomMenu';
import { useAuthData } from '@/context/auth';
import { useNavigate } from '@/hooks/useNavigate';
import { NAVIGATION } from '@/constants/navigation';
import { BackNavigate } from '@/components/BackNavigate/BackNavigate';
import { InfoWrapper } from '@/components/InfoWrapper/InfoWrapper';
import { styles } from './SettingsScreen.styles';
import { useTranslation } from 'react-i18next';

export default function SettingsScreen() {
	const { user, logout } = useAuthData();
	const navigate = useNavigate();
	const { t } = useTranslation();

	const handleLogout = async () => {
		await logout();
		await deletePin();
		navigate(NAVIGATION.login);
	};

	return (
		<View style={styles.page}>
			<BackNavigate />
			<View style={styles.settings}>
				<Text style={styles.titlePage}>{t('settings')}</Text>
				<InfoWrapper isBorder={true}>
					<View style={styles.nameContainer}>
						{user?.image ? (
							<Image source={{ uri: user?.image }} style={styles.ava} />
						) : (
							<View style={styles.emptyAva} />
						)}
						<Text style={styles.userName}>
							{user?.firstName} {user?.lastName}
						</Text>
					</View>
				</InfoWrapper>

				<View style={styles.settingItems}>
					<View style={styles.setting}>
						<Text style={styles.settingTitle}>{t('basic')}</Text>
						<TouchableOpacity onPress={() => navigate(NAVIGATION.language)}>
							<InfoWrapper isBorder={true}>
								<View style={styles.settingContainer}>
									<View style={styles.titleSettingContainer}>
										<MaterialIcons name="language" color="#FA8A34" size={24} />
										<Text style={styles.titleContainer}>{t('language')}</Text>
									</View>
									<Ionicons name="chevron-forward" size={20} color="#C1C4CB" />
								</View>
							</InfoWrapper>
						</TouchableOpacity>
					</View>

					<View style={styles.setting}>
						<Text style={styles.settingTitle}>{t('other')}</Text>
						<TouchableOpacity onPress={handleLogout}>
							<InfoWrapper isBorder={true}>
								<View style={styles.settingContainer}>
									<View style={styles.titleSettingContainer}>
										<Ionicons name="log-out-outline" color="#FA8A34" size={24} />
										<Text style={styles.titleContainer}>{t('logout')}</Text>
									</View>
									<Ionicons name="chevron-forward" size={20} color="#C1C4CB" />
								</View>
							</InfoWrapper>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<BottomMenu />
		</View>
	);
}
