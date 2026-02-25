import { TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '@/components/Button';

import { styles } from './BackNavigate.styles';

export const BackNavigate = ({ isBottom = false }: { isBottom?: boolean }) => {
	const router = useRouter();

	const navigateBack = () => {
		return router.back();
	};

	if (isBottom) {
		return (
			<View style={styles.bottomBackContainer}>
				<Button title="Go back" onPress={navigateBack} />
			</View>
		);
	}

	return (
		<TouchableOpacity style={styles.chevronBack} onPress={navigateBack}>
			<Ionicons name="chevron-back" size={28} />
		</TouchableOpacity>
	);
};
