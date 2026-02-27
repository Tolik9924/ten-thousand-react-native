import { SplashSVG } from '@/assets/SplashSvg';
import React from 'react';
import { View } from 'react-native';

import { styles } from './SplashScreen.styles';

const SplashScreen = () => {
	return (
		<View style={styles.container}>
			<SplashSVG />
		</View>
	);
};

export default SplashScreen;
