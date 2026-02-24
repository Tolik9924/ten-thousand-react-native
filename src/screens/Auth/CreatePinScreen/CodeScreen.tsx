import { Ionicons } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';
import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { getPin, savePin } from '@/services/storage';
import { NumberKey } from './constants';
import { BackNavigate } from '@/components/BackNavigate/BackNavigate';
import { Button } from '@/components/Button/Button';
import { Dots } from './components/Dots/Dots';
import { useNavigate } from '@/hooks/useNavigate';
import { Keyboard } from './components/Keyboard/Keyboard';
import { NAVIGATION } from '@/constants/navigation';
import { styles } from './PinCode.styles';

const PinCodeScreen = ({ isNewCode = false }: { isNewCode?: boolean }) => {
	const [pin, setPin] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		if (!isNewCode) {
			void authentication();
		}
	}, []);

	const authentication = async () => {
		try {
			const compatible = await LocalAuthentication.hasHardwareAsync();
			if (compatible) {
				const result = await LocalAuthentication.authenticateAsync({
					promptMessage: 'Login with Biometrics',
				});
				if (result.success) {
					navigate(NAVIGATION.home);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handlePress = (digit: NumberKey) => {
		if (pin.length < 5) {
			setPin((prev) => prev + digit);
		}
	};

	const handleDelete = () => {
		setPin((prev) => prev.slice(0, -1));
	};

	const handleSubmit = async () => {
		const savedPin = await getPin();
		if (pin === savedPin) {
			navigate(NAVIGATION.home);
		} else {
			Alert.alert('Incorrect PIN');
		}
	};

	const handleSavePin = async () => {
		if (pin.length < 5) {
			Alert.alert('Error', 'PIN must be 5 digits');
			return;
		}

		try {
			await savePin(pin);
			navigate(NAVIGATION.pinCode);
		} catch (error) {
			Alert.alert('Error', 'Failed to save PIN');
			console.error(error);
		}
	};

	return (
		<View style={styles.page}>
			<BackNavigate />

			<View style={styles.container}>
				<View style={styles.infoContainer}>
					<View style={styles.titleContainer}>
						<View style={styles.titleSvg}>
							<Ionicons name="phone-portrait-outline" size={24} color="#00A36D" />
						</View>
						<Text style={styles.title}>{isNewCode ? 'Create a Pin code' : 'Enter a pin code'}</Text>
					</View>
					<View style={styles.pinCodeContainer}>
						<Text style={styles.explainText}>enter 5 digit code: </Text>
						<Dots pin={pin} />
					</View>
				</View>

				<View style={styles.keyboardContainer}>
					<View style={styles.keyboard}>
						<Keyboard handleDelete={handleDelete} handlePress={handlePress} />
					</View>
					<View style={styles.button}>
						{!isNewCode ? (
							<Button title="Save PIN" onPress={handleSubmit} />
						) : (
							<Button title="Save PIN" onPress={handleSavePin} />
						)}
					</View>
				</View>
			</View>
		</View>
	);
};

export default PinCodeScreen;
