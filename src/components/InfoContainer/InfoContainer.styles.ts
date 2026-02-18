import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	circleItems: {
		display: 'flex',
		flexDirection: 'row',
		position: 'relative',
		gap: 10,
		width: '100%',
		justifyContent: 'center',
	},
	circleItem: {
		width: 48,
		height: 48,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	description: {
		marginTop: 5,
	},
});
