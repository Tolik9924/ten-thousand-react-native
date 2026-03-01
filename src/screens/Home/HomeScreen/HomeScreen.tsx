import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { BottomMenu } from '@/components/BottomMenu/BottomMenu';
import { InfoWrapper } from '@/components/InfoWrapper/InfoWrapper';
import SplashScreen from '@/screens/Splash/SplashScreen';
import { VARIANT } from '@/screens/Home/HomeScreen/constants';
import { BeforeStart } from '@/screens/Home/HomeScreen/components/BeforeStart';
import { useAuthData } from '@/context/auth';
import { usePosts, type Post } from '@/hooks/posts';
import { useNavigate } from '@/hooks/useNavigate';
import { NAVIGATION } from '@/constants/navigation';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { styles } from './HomeScreen.styles';

const POSTS_LIMIT = 3;
const START_ITEMS = [
	{ title: 'Link you Bank Account', steps: 2, variant: VARIANT.primary },
	{ title: 'Lorem Ipsum', steps: 3, variant: VARIANT.secondary },
] as const;

export default function HomeScreen() {
	const navigate = useNavigate();
	const { user, isLoading: isLoadingUser, isLogIn } = useAuthData();
	const { data, isLoading, isError } = usePosts(POSTS_LIMIT);
	const { t } = useTranslation();

	if (isLoading || isLoadingUser) return <SplashScreen />;
	if (isError) return <Text style={{ padding: 20 }}>Error loading posts</Text>;

	return (
		<View style={{ flex: 1 }}>
			<ScrollView>
				<View style={styles.container}>
					<LinearGradient
						colors={['#FA8A34', '#FF6F00']}
						start={{ x: 1, y: 0.1 }}
						end={{ x: 0, y: 0.9 }}
						style={styles.welcomeContainer}
					>
						<Text style={styles.yourName}>{t('yourName')}</Text>
						<Text style={styles.welcomeText}>
							{isLogIn ? `${user?.firstName} ${user?.lastName}` : 'User'}!
						</Text>
					</LinearGradient>

					<View style={styles.content}>
						<View style={styles.testTask}>
							<View style={styles.taskInfo}>
								<View style={styles.infoLinks}>
									<Text style={styles.taskTitle}>{t('testTask')}</Text>
									<Text style={styles.taskSubTitle}>Lorem ipsum</Text>
								</View>
								<View style={styles.goCallContainer}>
									<Text style={styles.callText}>{t('goToCall')}</Text>
									<MaterialIcons name="chevron-right" size={24} color="#009E81" />
								</View>
							</View>
							<LinearGradient
								colors={['#5cb3c6', '#2b8aa0']}
								start={{ x: 0.5, y: 0 }}
								end={{ x: 0.5, y: 1 }}
								style={styles.taskImg}
							>
								<View style={styles.rectangle} />
							</LinearGradient>
						</View>
					</View>

					{/* beforeStart */}
					<View style={styles.content}>
						<Text style={styles.beforeStartText}>{t('beforeYouStart')}</Text>
					</View>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.horizontalMenu}
					>
						<View style={styles.beforeStartItems}>
							<View style={styles.startItems}>
								{START_ITEMS.map((item, i) => (
									<BeforeStart
										key={i}
										title={item.title}
										stepsCount={item.steps}
										variant={item.variant}
									/>
								))}
							</View>
						</View>
					</ScrollView>

					<View style={styles.postsContainer}>
						<Text style={styles.postsTitle}>{t('posts')}</Text>
						<View style={styles.post}>
							{(data ?? []).map((item: Post) => (
								<View key={item.id}>
									<TouchableOpacity onPress={() => navigate(NAVIGATION.post(`${item.id}`))}>
										<InfoWrapper>
											<View style={styles.postContainer}>
												<Text style={styles.postTitle}>{item.title}</Text>
												<Text style={styles.postInfo}>{item.body}</Text>
											</View>
										</InfoWrapper>
									</TouchableOpacity>
								</View>
							))}
						</View>
					</View>
				</View>
			</ScrollView>
			<BottomMenu />
		</View>
	);
}
