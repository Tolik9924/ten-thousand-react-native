import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { styles } from './InfoWrapper.styles';

export const InfoWrapper = ({
	children,
	isBorder = false,
}: {
	children: ReactNode;
	isBorder?: boolean;
}) => {
	return <View style={[styles.wrapper, isBorder && styles.border]}>{children}</View>;
};
