import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	page: {
		flex: 1,
		width: '100%',
		backgroundColor: '#fff',
	},
	settings: {
		flex: 1,
		marginTop: 100,
		paddingHorizontal: 15,
		gap: 35,
	},
	ava: {
		width: 32,
		height: 32,
		borderRadius: 50,
	},
	emptyAva: {
		width: 32,
		height: 32,
		borderRadius: 50,
		backgroundColor: '#ccc',
		justifyContent: 'center',
		alignItems: 'center',
	},
	nameContainer: {
		paddingHorizontal: 10,
		paddingVertical: 15,
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
	},
	settingContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	titleSettingContainer: {
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
	settingItems: {
		gap: 20,
	},
	setting: {
		gap: 10,
	},
	settingTitle: {
		paddingHorizontal: 10,
		color: '#606773',
		fontWeight: '400',
		fontSize: 15,
		lineHeight: 16,
		letterSpacing: 0,
	},
	userName: {
		fontWeight: '500',
		fontSize: 15,
		lineHeight: 24,
		letterSpacing: 0,
		color: '#06070A',
	},
	titlePage: {
		color: '#06070A',
		fontWeight: '600',
		fontSize: 22,
		lineHeight: 32,
		letterSpacing: 0,
	},
});
