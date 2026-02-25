import { Ionicons } from '@expo/vector-icons';
import React, { ReactNode, useState } from 'react';
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

import { styles } from './Input.styles';

interface CustomInputProps extends TextInputProps {
	value: string;
	onChangeText: (text: string) => void;
	label?: string;
	error?: string;
	secureText?: boolean;
	isErrorText?: boolean;
	Icon?: ReactNode;
}

const Input: React.FC<CustomInputProps> = ({
	value,
	onChangeText,
	label,
	error,
	secureText,
	isErrorText = true,
	Icon,
	...props
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const [isPasswordVisible, setIsPasswordVisible] = useState(!secureText);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible((prev) => !prev);
	};

	return (
		<View style={styles.container}>
			<View style={styles.labelsContainer}>
				{label && <Text style={styles.label}>{label}</Text>}
				{error && secureText && <Text style={styles.labelForgot}>Forgot?</Text>}
			</View>
			<View
				style={[
					styles.inputContainer,
					isFocused && styles.inputFocused,
					error && styles.inputError,
					Icon ? styles.iconPadding : undefined,
				]}
			>
				{/*<Ionicons name="search" color="#000" size={24} />*/}
				{Icon && Icon}
				<TextInput
					{...props}
					style={styles.input}
					value={value}
					onChangeText={onChangeText}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					secureTextEntry={secureText && !isPasswordVisible}
				/>
				{secureText && (
					<TouchableOpacity style={styles.showPassword} onPress={togglePasswordVisibility}>
						<Ionicons
							name={isPasswordVisible ? 'eye-off' : 'eye'}
							size={24}
							color={error ? '#D63C41' : '#00A36D'}
						/>
					</TouchableOpacity>
				)}
				{error && (
					<TouchableOpacity style={styles.showPassword} onPress={togglePasswordVisibility}>
						<Ionicons name="information-circle" size={24} color="#D63C41" />
					</TouchableOpacity>
				)}
			</View>
			{isErrorText && (
				<View style={styles.errorContainer}>
					<Text style={styles.error}>{error}</Text>
				</View>
			)}
		</View>
	);
};

export default Input;
