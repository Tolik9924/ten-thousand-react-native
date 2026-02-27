import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		gap: 5,
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#CED5E0',
		backgroundColor: 'transparent',
		borderRadius: 16,
		paddingHorizontal: 5,
		height: 56,
	},
	labelsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	label: {
		color: '#606773',
		fontWeight: '400',
		fontSize: 15,
		lineHeight: 24,
		paddingHorizontal: 10,
	},
	labelForgot: {
		color: '#FA8A34',
		fontWeight: '400',
		fontSize: 15,
		lineHeight: 24,
		paddingHorizontal: 10,
	},
	input: {
		flex: 1,
		padding: 5,
		fontSize: 15,
		backgroundColor: 'transparent',
		fontWeight: '400',
		color: '#06070A',
	},
	inputFocused: {
		borderColor: '#CED5E0',
	},
	inputError: {
		borderColor: 'red',
	},
	error: {
		marginTop: 5,
		color: 'red',
		fontSize: 12,
	},
	showPassword: {
		marginRight: 5,
	},
	errorContainer: {
		height: 20,
	},
	iconPadding: {
		paddingHorizontal: 15,
	},
});
