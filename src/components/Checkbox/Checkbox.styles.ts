import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: 32,
		height: 32,
		borderRadius: 50,
		backgroundColor: '#EBEFF5',
		justifyContent: 'center',
		alignItems: 'center',
	},
	checked: {
		backgroundColor: '#FA8A34',
		borderColor: '#FA8A34',
	},
	disabled: {
		borderColor: '#ccc',
		backgroundColor: '#f0f0f0',
	},
	disabledChecked: {
		backgroundColor: '#ccc',
		borderColor: '#ccc',
	},
	checkmark: {
		color: '#fff',
		fontSize: 13,
		fontWeight: '700',
		lineHeight: 16,
	},
});
