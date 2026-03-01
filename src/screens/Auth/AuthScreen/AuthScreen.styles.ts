import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 24,
		paddingTop: 49,
	},
	content: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 15,
		width: '100%',
		flexWrap: 'wrap',
	},
	sideContent: {
		gap: 15,
	},
	logoContainer: {
		width: 164,
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
