import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { BottomMenu } from '@/components/BottomMenu/BottomMenu';
import { BackNavigate } from '@/components/BackNavigate/BackNavigate';
import { MaterialIcons } from '@expo/vector-icons';
import { InfoWrapper } from '@/components/InfoWrapper/InfoWrapper';
import Checkbox from '@/components/Checkbox';

import { styles } from './LanguageScreen.styles';
import { Language, LANGUAGES } from '@/screens/Language/constants';

const LanguageScreen = () => {
	const { t, i18n } = useTranslation();
	const [selectedLanguage, setSelectedLanguage] = useState<string>(i18n.language);

	const handleSelectLanguage = (lang: Language) => {
		setSelectedLanguage(lang);
		return i18n.changeLanguage(lang);
	};

	return (
		<View style={styles.page}>
			<BackNavigate />
			<View style={styles.language}>
				<Text style={styles.titlePage}>{t('language')}</Text>
				<View style={styles.languages}>
					<InfoWrapper isBorder={true}>
						<View style={styles.settingContainer}>
							<View style={styles.titleSettingContainer}>
								<MaterialIcons name="language" color="#FA8A34" size={24} />
								<Text style={styles.titleContainer}>English</Text>
							</View>
							<Checkbox
								value={selectedLanguage === LANGUAGES.en}
								onChange={() => handleSelectLanguage(LANGUAGES.en)}
							/>
						</View>
					</InfoWrapper>
					<InfoWrapper isBorder={true}>
						<View style={styles.settingContainer}>
							<View style={styles.titleSettingContainer}>
								<MaterialIcons name="language" color="#FA8A34" size={24} />
								<Text style={styles.titleContainer}>Arabic</Text>
							</View>
							<Checkbox
								value={selectedLanguage === LANGUAGES.ar}
								onChange={() => handleSelectLanguage(LANGUAGES.ar)}
							/>
						</View>
					</InfoWrapper>
				</View>
			</View>
			<BottomMenu />
		</View>
	);
};

export default LanguageScreen;
