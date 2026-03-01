import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BackNavigate } from '@/components/BackNavigate/BackNavigate';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { Button } from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { Link } from '@/components/Link/Link';
import { useKeyBoardHeight } from '@/hooks/useKeyboardHeight';
import { NAVIGATION } from '@/constants/navigation';
import { login } from '@/services/authService';
import { useAuthData } from '@/context/auth';
import { FORM_ERROR } from '@/screens/Auth/LoginScreen/constants';
import { useNavigate } from '@/hooks/useNavigate';
import { styles } from './LoginScreen.styles';
import { PLATFORMS } from '@/constants/platforms';
import { useTranslation } from 'react-i18next';

interface FormData {
	username: string;
	password: string;
}

const LoginScreen = () => {
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const { control, handleSubmit } = useForm<FormData>();
	const keyboardHeight = useKeyBoardHeight();
	const { login: setUser } = useAuthData();
	const { t } = useTranslation();

	const onSubmit = async (data: FormData) => {
		try {
			const loginData = await login(data);
			setError('');
			setUser(loginData);
			navigate(NAVIGATION.createPinCode);
		} catch (error: unknown) {
			setError(FORM_ERROR);
		}
	};

	return (
		<View>
			<BackNavigate />
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.userContainer}>
						<Ionicons name="person-add-outline" size={24} color="#00A385" />
					</View>
					<View style={styles.headerText}>
						<Text style={styles.title}>{t('signIn')}</Text>
						<Text style={styles.subTitle}>{t('personalAccount')}</Text>
					</View>
				</View>

				<KeyboardAvoidingView
					style={styles.scrollAvoidContainer}
					behavior={Platform.OS === PLATFORMS.ios ? 'padding' : 'height'}
					keyboardVerticalOffset={0}
				>
					<ScrollView keyboardShouldPersistTaps="handled">
						<View style={styles.formContainer}>
							<View style={styles.errorContainer}>
								{error !== '' && <Text style={styles.error}>{error}</Text>}
							</View>
							<View style={styles.formItems}>
								<View style={styles.formItem}>
									<Controller
										control={control}
										name="username"
										rules={{ required: 'Username required' }}
										render={({ field: { onChange, value } }) => (
											<Input
												label={t('username')}
												placeholder={t('username')}
												value={value}
												onChangeText={onChange}
												isErrorText={false}
												error={error}
											/>
										)}
									/>
								</View>
								<View style={styles.formItem}>
									<Controller
										control={control}
										name="password"
										rules={{ required: 'Password required' }}
										render={({ field: { onChange, value } }) => (
											<Input
												label={t('password')}
												placeholder={t('password')}
												value={value}
												onChangeText={onChange}
												secureText={true}
												isErrorText={false}
												error={error}
											/>
										)}
									/>
								</View>
							</View>
						</View>
					</ScrollView>
				</KeyboardAvoidingView>

				<View style={[styles.submitButton, { bottom: keyboardHeight + 120 }]}>
					<Button title={t('login')} onPress={handleSubmit(onSubmit)} />
					{keyboardHeight === 0 && (
						<Link text={t('createAccount')} navigate={() => navigate(NAVIGATION.register)} />
					)}
				</View>
			</View>
		</View>
	);
};

export default LoginScreen;
