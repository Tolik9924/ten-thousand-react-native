import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	startItem: {
		width: 233,
		height: 152,
		borderRadius: 16,
		backgroundColor: '#636363',
		padding: 20,
		boxSizing: 'border-box',
		display: 'flex',
		justifyContent: 'space-between',
	},
	startItemSecondary: {
		backgroundColor: '#EE6363',
	},
	startTitle: {
		color: '#fff',
		fontWeight: '500',
		fontStyle: 'normal',
		fontSize: 15,
		lineHeight: 24,
		letterSpacing: 0,
		width: '100%',
		flexShrink: 1,
	},
	startTitleSecondary: {
		color: '#06070A',
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'row',
		gap: 10,
	},
	logoStart: {
		width: 48,
		height: 48,
		backgroundColor: '#FA8A34',
		borderRadius: 50,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		boxSizing: 'border-box',
	},
	stepsContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	stepsCount: {
		fontWeight: '500',
		fontStyle: 'normal',
		fontSize: 15,
		lineHeight: 24,
		letterSpacing: 0,
		color: '#fff',
	},
	stepsCountSecondary: {
		color: '#606773',
	},
});
