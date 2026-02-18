import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import { styles } from './BackNavigate.styles';

export const BackNavigate = () => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity style={styles.chevronBack} onPress={() => navigation.goBack()}>
			<Ionicons name="chevron-back" size={28} />
		</TouchableOpacity>
	);
};
