import { Ionicons } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { getPin } from '@/services/storage';
import { NumberKey } from './constants';
import { BackNavigate } from '@/components/BackNavigate/BackNavigate';
import { Button } from '@/components/Button/Button';
import { Dots } from './components/Dots/Dots';
import { Keyboard } from './components/Keyboard/Keyboard';
import { styles } from './PinCode.styles';
import { useRouter } from 'expo-router';

export default function PinCodeScreen() {
	const [pin, setPin] = useState('');
	const router = useRouter();

	useEffect(() => {
		(async () => {
			const compatible = await LocalAuthentication.hasHardwareAsync();
			if (compatible) {
				const result = await LocalAuthentication.authenticateAsync({
					promptMessage: 'Login with Biometrics',
				});
				if (result.success) {
					router.push('/home');
				}
			}
		})();
	}, []);

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
			router.push('/home');
		} else {
			Alert.alert('Incorrect PIN');
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
						<Text style={styles.title}>Enter a pin code</Text>
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
						<Button title="Save PIN" onPress={handleSubmit} />
					</View>
				</View>
			</View>
		</View>
	);
}
