import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

import { styles } from './BackNavigate.styles';

export const BackNavigate = () => {
	const router = useRouter();
	return (
		<TouchableOpacity style={styles.chevronBack} onPress={() => router.back()}>
			<Ionicons name="chevron-back" size={28} />
		</TouchableOpacity>
	);
};
