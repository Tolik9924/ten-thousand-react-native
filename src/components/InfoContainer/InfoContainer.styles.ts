import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	circleItems: {
		flexDirection: 'row',
		position: 'relative',
		gap: 10,
		width: '100%',
		justifyContent: 'center',
	},
	circleItem: {
		width: 48,
		height: 48,
		justifyContent: 'center',
		alignItems: 'center',
	},
	description: {
		marginTop: 5,
	},
});
