import { Text, TouchableOpacity, View } from 'react-native';
import { NumberKey, NUMBERS } from '../../constants';

import { styles } from './Keyboard.styles';

export const Keyboard = ({
	handleDelete,
	handlePress,
}: {
	handleDelete: () => void;
	handlePress: (digit: NumberKey) => void;
}) => {
	return (
		<View style={styles.container}>
			{NUMBERS.map((item, index) => {
				if (item === '') {
					return <View key={index} style={styles.emptyItem} />;
				}

				return (
					<TouchableOpacity
						key={index}
						onPress={() => (item === 'del' ? handleDelete() : handlePress(item))}
						style={styles.item}
					>
						<Text style={item === 'del' ? styles.delete : styles.itemText}>
							{item === 'del' ? '⌫' : item}
						</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};
