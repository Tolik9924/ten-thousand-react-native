import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		// position: 'absolute',
		// bottom: 0,
		// left: 0,
		// right: 0,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 60,
		backgroundColor: '#fff',
	},
	menuText: {
		fontWeight: 400,
		fontSize: 10,
		color: '#858C94',
	},
	routeText: {
		color: '#FA8A34',
	},
	item: {
		alignItems: 'center',
	},
});
