import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '95%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 24,
		boxSizing: 'border-box',
		marginTop: 25,
	},
	content: {
		display: 'flex',
		flexDirection: 'row',
		gap: 15,
		width: '100%',
		flexWrap: 'wrap',
	},
	sideContent: {
		display: 'flex',
		gap: 15,
	},
	logoContainer: {
		width: 148,
		height: 136,
		backgroundColor: '#FA8A34',
		borderRadius: 16,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	linksContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 20,
	},
});
