import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { LogoSVG } from '@/assets/LogoSvg';
import { CraneSVG } from '@/assets/CraneSvg';
import { HomeSVG } from '@/assets/HomeSvg';
import { WorkBuildingSvg } from '@/assets/WorkBuildingSvg';
import { Button } from '@/components/Button/Button';
import { InfoContainer } from '@/components/InfoContainer/InfoContainer';
import { Link } from '@/components/Link/Link';
import { View } from 'react-native';
import { InvescoSVG } from '@/assets/Invesco';
import VectorSVG from '@/assets/Vector';
import InfoSVG from '@/assets/InfoSVG';
import { styles } from './AuthScreen.styles';
import PersonSVG from '@/assets/PersonSVG';
import HandSvg from '@/assets/Hand';
import OilSvg from '@/assets/OilSvg';
import GoldSVG from '@/assets/GoldSvg';
import ArrowSVG from '@/assets/ArrowSvg';
import DiamondSVG from '@/assets/DiamondSvg';
import CalendarSVG from '@/assets/CalendarSvg';

const FIRST_CONTAINER_COLORS = ['#77CDD9', '#5AA5FA', '#565ED1'];
const SECOND_CONTAINER_COLORS = ['#193989', '#96151D', '#06070A'];
const THIRD_CONTAINER_COLORS = ['#6ED4BE', '#FA8A34', '#6ED4BE'];
const FOURTH_CONTAINER_COLORS = ['#F7D16D', '#CB9655', '#E2ED5C'];
const FIFTH_CONTAINER_COLORS = ['#617DEA', '#FA8A34', '#49C1B5'];

const AuthScreen = () => {
	const router = useRouter();

	return (
		<LinearGradient
			colors={['rgba(242,243,245,0.16)', '#F2F3F5', 'rgba(242,243,245,0.16)']}
			locations={[0, 0.3898, 1]}
			start={{ x: 0, y: 0 }}
			end={{ x: 0, y: 1 }}
			style={{ flex: 1 }}
		>
			<View style={styles.container}>
				<View style={styles.content}>
					<View style={styles.sideContent}>
						<View style={styles.logoContainer}>
							<LogoSVG />
						</View>
						<InfoContainer
							firstIcon={<CraneSVG />}
							secondIcon={<WorkBuildingSvg />}
							thirdIcon={<HomeSVG />}
							title="Lorem ipsum"
							backgroundColors={FIRST_CONTAINER_COLORS}
						/>
						<InfoContainer
							firstIcon={<InvescoSVG />}
							secondIcon={<VectorSVG />}
							thirdIcon={<InfoSVG />}
							title="Lorem ipsum 3"
							backgroundColors={SECOND_CONTAINER_COLORS}
						/>
					</View>
					<View style={[styles.sideContent, { marginTop: 75 }]}>
						<InfoContainer
							firstIcon={<PersonSVG />}
							secondIcon={<HandSvg />}
							thirdIcon={<PersonSVG />}
							title="Lorem ipsum 2"
							backgroundColors={THIRD_CONTAINER_COLORS}
						/>
						<InfoContainer
							firstIcon={<OilSvg />}
							secondIcon={<GoldSVG />}
							thirdIcon={<ArrowSVG />}
							title="Lorem ipsum 4"
							backgroundColors={FOURTH_CONTAINER_COLORS}
						/>
						<InfoContainer
							firstIcon={<DiamondSVG />}
							secondIcon={<LogoSVG width={16} height={25} />}
							thirdIcon={<CalendarSVG />}
							title="Lorem ipsum 5"
							backgroundColors={FIFTH_CONTAINER_COLORS}
						/>
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
		</LinearGradient>
	);
};

export default AuthScreen;
