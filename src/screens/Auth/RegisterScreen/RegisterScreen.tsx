import React, { useEffect, useState } from 'react';
import {
	Alert,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Text,
	View,
} from 'react-native';
import { BackNavigate } from '@/components/BackNavigate/BackNavigate';
import { Button } from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { Ionicons } from '@expo/vector-icons';
import { Controller, useForm } from 'react-hook-form';
import { validatePassword } from '@/utils/validation';
import { styles } from './RegisterScreen.styles';
import { useRouter } from 'expo-router';

interface FormData {
	name: string;
	email: string;
	password: string;
}

export default function RegisterScreen() {
	const router = useRouter();
	const [keyboardHeight, setKeyboardHeight] = useState(0);
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		Alert.alert('Registered!', JSON.stringify(data));
		router.push('/auth/login');
	};

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
							<View style={styles.formItems}>
								<View style={styles.formItem}>
									<Controller
										control={control}
										name="name"
										rules={{ required: 'Name is required' }}
										render={({ field: { onChange, value } }) => (
											<Input
												label="Name"
												value={value}
												placeholder="Name"
												onChangeText={onChange}
												error={errors.name && errors.name.message}
											/>
										)}
									/>
								</View>

								<View style={styles.formItem}>
									<Controller
										control={control}
										name="email"
										rules={{
											required: 'Email required',
											pattern: {
												value: /^\S+@\S+$/i,
												message: 'Invalid email',
											},
										}}
										render={({ field: { onChange, value } }) => (
											<Input
												label="E-mail"
												placeholder="E-mail"
												value={value}
												onChangeText={onChange}
												error={errors.email && errors.email.message}
											/>
										)}
									/>
								</View>

								<View style={styles.formItem}>
									<Controller
										control={control}
										name="password"
										rules={{
											required: 'Password required',
											validate: (value) =>
												validatePassword(value) ||
												'Password must be 8-64 chars, include upper/lower/special',
										}}
										render={({ field: { onChange, value } }) => (
											<Input
												label="Password"
												placeholder="Password"
												value={value}
												onChangeText={onChange}
												error={errors.password && errors.password.message}
												secureText={true}
											/>
										)}
									/>
								</View>
							</View>
						</View>
					</ScrollView>
				</KeyboardAvoidingView>
				<View style={[styles.submitButton, { bottom: keyboardHeight + 120 }]}>
					<Button title="Continue" onPress={handleSubmit(onSubmit)} />
				</View>
			</View>
		</View>
	);
}
