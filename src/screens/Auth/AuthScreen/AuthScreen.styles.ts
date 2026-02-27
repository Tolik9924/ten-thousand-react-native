import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '95%',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 24,
		marginTop: 25,
	},
	content: {
		flexDirection: 'row',
		gap: 15,
		width: '100%',
		flexWrap: 'wrap',
	},
	sideContent: {
		gap: 15,
	},
	logoContainer: {
		width: 148,
		height: 136,
		backgroundColor: '#FA8A34',
		borderRadius: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
	linksContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 20,
	},
});
