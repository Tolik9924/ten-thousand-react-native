import { ReactNode } from 'react';
import { View } from 'react-native';
import { styles } from './Wrapper.styles';

export const Wrapper = ({ children }: { children: ReactNode }) => {
	return <View style={styles.wrapper}>{children}</View>;
};
