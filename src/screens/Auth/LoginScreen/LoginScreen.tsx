import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { BackNavigate } from '@/components/BackNavigate/BackNavigate';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { Button } from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { Link } from '@/components/Link/Link';
import { useKeyBoardHeight } from '@/hooks/useKeyboardHeight';
import { NAVIGATION } from '@/constants/navigation';
import { styles } from './LoginScreen.styles';
import { login } from '@/services/authService';
import { useAuthData } from '@/context/auth';

interface FormData {
	username: string;
	password: string;
}

// name emilys
// password emilyspass

const LoginScreen = () => {
	const [error, setError] = useState('');
	const router = useRouter();
	const { control, handleSubmit } = useForm<FormData>();
	const keyboardHeight = useKeyBoardHeight();
	const { user, login: setUser } = useAuthData();

	console.log('USER LOGIN: ', user);

	const onSubmit = async (data: FormData) => {
		try {
			const loginData = await login(data);
			setError('');
			console.log('LOGIN DATA: ', loginData);
			setUser(loginData);
			router.push(NAVIGATION.createPinCode);
		} catch (error: unknown) {
			console.log('ERROR: ', error);
			setError('Error: Invalid E-mail or Password');
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
						<Text style={styles.title}>Sign up</Text>
						<Text style={styles.subTitle}>Personal Account</Text>
					</View>
				</View>

				<KeyboardAvoidingView
					style={styles.scrollAvoidContainer}
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
												label="Username"
												placeholder="Username"
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
												label="Password"
												placeholder="Password"
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
					<Button title="Login" onPress={handleSubmit(onSubmit)} />
					{keyboardHeight === 0 && (
						<Link
							text="Create account"
							navigate={() => {
								router.push('/auth/register');
							}}
						/>
					)}
				</View>
			</View>
		</View>
	);
};

export default LoginScreen;
