import { View } from 'react-native';

import { styles } from './Dots.styles';

export const Dots = ({ pin }: { pin: string }) => {
	return (
		<View style={styles.dotsContainer}>
			{[0, 1, 2, 3, 4].map((i) => (
				<View key={i} style={[styles.dot, pin[i] && styles.fullFillDot]} />
			))}
		</View>
	);
};
