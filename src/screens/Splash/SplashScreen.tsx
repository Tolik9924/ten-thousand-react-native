import { SplashSVG } from '@/assets/SplashSvg';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface SplashScreenProps {
	showLoader?: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = () => {
	return (
		<View style={styles.container}>
			<SplashSVG />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 200,
		height: 200,
		marginBottom: 20,
	},
});

export default SplashScreen;
