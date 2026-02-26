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
		display: 'flex',
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
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
	settingItems: {
		gap: 20,
	},
	setting: {
		display: 'flex',
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
	personInfo: {
		display: 'flex',
		alignItems: 'center',
		gap: 20,
		marginTop: 15,
	},
	name: {
		fontSize: 20,
	},
	languages: {
		display: 'flex',
		alignItems: 'center',
		marginTop: 20,
	},
	languagesTitle: {
		fontSize: 20,
	},
	changeLanguage: {
		marginTop: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 70,
	},
	buttonContainer: {
		width: '100%',
		padding: 20,
		marginTop: 100,
	},
});
