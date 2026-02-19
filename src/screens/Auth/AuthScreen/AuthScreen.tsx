import { useRouter } from 'expo-router';
import { LogoSVG } from '@/assets/LogoSvg';
import { Button } from '@/components/Button/Button';
import { InfoContainer } from '@/components/InfoContainer/InfoContainer';
import { Link } from '@/components/Link/Link';
import { View } from 'react-native';
import { styles } from './AuthScreen.styles';
//import { ScreenProps } from '@/navigation/types';

const AuthScreen = () => {
	const router = useRouter();

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.sideContent}>
					<View style={styles.logoContainer}>
						<LogoSVG />
					</View>
					<InfoContainer />
					<InfoContainer />
				</View>
				<View style={[styles.sideContent, { marginTop: 75 }]}>
					<InfoContainer />
					<InfoContainer />
					<InfoContainer />
				</View>
			</View>
			<View style={styles.linksContainer}>
				<Link
					text="Sign in"
					navigate={() => {
						router.push('/auth/login');
					}}
				/>
				<Button
					title="Sign up"
					onPress={() => {
						router.push('/auth/register');
					}}
				/>
			</View>
		</View>
	);
};

export default AuthScreen;
