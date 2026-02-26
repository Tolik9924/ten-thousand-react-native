import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: '#fff',
	},
	language: {
		flex: 1,
		marginTop: 100,
		paddingHorizontal: 15,
		gap: 35,
	},
	titlePage: {
		color: '#06070A',
		fontWeight: '600',
		fontSize: 22,
		lineHeight: 32,
		letterSpacing: 0,
	},
	languages: {
		gap: 10,
	},
	settingContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	titleSettingContainer: {
		display: 'flex',
		gap: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	titleContainer: {
		color: '#06070A',
		fontWeight: '500',
		fontSize: 15,
		lineHeight: 24,
		letterSpacing: 0,
	},
});
