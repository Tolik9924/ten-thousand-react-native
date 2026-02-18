import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	dotsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 12,
	},

	dot: {
		width: 24,
		height: 24,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#C1C4CB',
		borderRadius: 12,
	},
	fullFillDot: {
		backgroundColor: '#FA8A34',
	},
});
