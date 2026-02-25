import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { styles } from './InfoWrapper.styles';

export const InfoWrapper = ({ children }: { children: ReactNode }) => {
	return <View style={styles.wrapper}>{children}</View>;
};
