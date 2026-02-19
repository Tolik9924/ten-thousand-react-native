import { BackNavigate } from '@/components/BackNavigate/BackNavigate';
import { setName } from '@/redux/slices/userSlice';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@/redux/slices/authSlice';
import { Button } from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { Link } from '@/components/Link/Link';
import { styles } from './LoginScreen.styles';
import { ScreenProps } from '@/navigation/types';

interface FormData {
	username: string;
	password: string;
}

// name emilys
// password emilyspass

export default function LoginScreen({ navigation }: ScreenProps<'Login'>) {
	const [error, setError] = useState('');
	const [keyboardHeight, setKeyboardHeight] = useState(0);
	const { control, handleSubmit } = useForm<FormData>();
	const dispatch = useDispatch();

	useEffect(() => {
		const showSub = Keyboard.addListener('keyboardDidShow', (e) => {
			setKeyboardHeight(e.endCoordinates.height);
		});

		const hideSub = Keyboard.addListener('keyboardDidHide', () => {
			setKeyboardHeight(0);
		});

		return () => {
			showSub.remove();
			hideSub.remove();
		};
	}, []);

	const onSubmit = async (data: FormData) => {
		try {
			const res = await axios.post('https://dummyjson.com/auth/login', {
				username: data.username,
				password: data.password,
			});
			setError('');
			const username = `${res.data.firstName} ${res.data.lastName}`;
			dispatch(loginSuccess(res.data.token));
			dispatch(setName(username));
			navigation.replace('CreatePin');
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
						<Link text="Create account" navigate={() => navigation.navigate('Register')} />
					)}
				</View>
			</View>
		</View>
	);
}
