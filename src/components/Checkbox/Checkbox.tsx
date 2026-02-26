import { Pressable, ViewStyle } from 'react-native';

import { styles } from './Checkbox.styles';
import { Ionicons } from '@expo/vector-icons';

type Props = {
	value: boolean;
	onChange: (value: boolean) => void;
	disabled?: boolean;
	style?: ViewStyle;
};

const Checkbox = ({ value, onChange, disabled = false, style }: Props) => {
	const handlePress = () => {
		if (!disabled) {
			onChange(!value);
		}
	};

	const containerStyle = [
		styles.container,
		value && styles.checked,
		disabled && !value && styles.disabled,
		disabled && value && styles.disabledChecked,
		style,
	];

	return (
		<Pressable
			style={containerStyle}
			onPress={handlePress}
			accessibilityRole="checkbox"
			accessibilityState={{ checked: value, disabled }}
		>
			{value && <Ionicons name="checkmark-outline" color="#fff" size={16} />}
		</Pressable>
	);
};

export default Checkbox;
