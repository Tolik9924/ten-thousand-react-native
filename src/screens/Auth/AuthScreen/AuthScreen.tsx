import { LogoSVG } from '@/assets/LogoSvg';
import { Button } from '@/components/Button/Button';
import { InfoContainer } from '@/components/InfoContainer/InfoContainer';
import { Link } from '@/components/Link/Link';
import { View } from 'react-native';
import { styles } from './AuthScreen.styles';
import { ScreenProps } from '@/navigation/types';

const AuthScreen = ({ navigation }: ScreenProps<'Auth'>) => {
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
				<Link text="Sign in" navigate={() => navigation.navigate('Login')} />
				<Button title="Sign up" onPress={() => navigation.navigate('Register')} />
			</View>
		</View>
	);
};

export default AuthScreen;
