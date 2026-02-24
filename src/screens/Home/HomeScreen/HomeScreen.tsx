import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { BottomMenu } from '@/components/BottomMenu/BottomMenu';
import SplashScreen from '@/screens/Splash/SplashScreen';
import { useAuthData } from '@/context/auth';
import { usePosts, type Post } from '@/hooks/posts';
import { useNavigate } from '@/hooks/useNavigate';
import { NAVIGATION } from '@/constants/navigation';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { styles } from './HomeScreen.styles';

const POSTS_LIMIT = 3;

export default function HomeScreen() {
	const navigate = useNavigate();
	const { user, isLoading: isLoadingUser, isLogIn } = useAuthData();
	const { data, isLoading, isError } = usePosts(POSTS_LIMIT);

	if (isLoading || isLoadingUser) return <SplashScreen />;
	if (isError) return <Text style={{ padding: 20 }}>Error loading posts</Text>;

	return (
		<View style={{ flex: 1 }}>
			<ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
				<View style={styles.container}>
					<LinearGradient
						colors={['#FA8A34', '#FF6F00']}
						start={{ x: 1, y: 0.1 }}
						end={{ x: 0, y: 0.9 }}
						style={styles.welcomeContainer}
					>
						<Text style={styles.yourName}>Your name</Text>
						<Text style={styles.welcomeText}>
							{isLogIn ? `${user?.firstName} ${user?.lastName}` : 'User'}!
						</Text>
					</LinearGradient>

					<View style={styles.content}>
						<View style={styles.testTask}>
							<View style={styles.taskInfo}>
								<View style={styles.infoLinks}>
									<Text style={styles.taskTitle}>Test task</Text>
									<Text style={styles.taskSubTitle}>Lorem ipsum</Text>
								</View>
								<View style={styles.goCallContainer}>
									<Text style={styles.callText}>Go to call</Text>
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
						{/* beforeStart */}
						<View style={styles.beforeStartItems}>
							<Text style={styles.beforeStartText}>Before you Start</Text>
							<View style={styles.startItems}>
								<View style={styles.startItem}>
									<View style={styles.titleContainer}>
										<View style={styles.logoStart}>
											<Ionicons name="link-outline" size={16.73} color="#fff" />
										</View>
										<Text style={styles.startTitle}>Link you Bank Account</Text>
									</View>
								</View>
							</View>
						</View>
					</View>

					<View style={styles.personalAdvisorContainer}>
						<View style={styles.advice}>
							<Text style={styles.adviceTitle}>Personal Advisor</Text>
							<Text style={styles.adviceExplanation}>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industrys standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a type specimen book.
							</Text>
						</View>
					</View>

					<View style={styles.personalAdvisorContainer}>
						<View style={styles.advice}>
							<Text style={styles.adviceTitle}>Before you start</Text>
							<Text style={styles.adviceExplanation}>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industrys standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a type specimen book.
							</Text>
						</View>
					</View>

					<View style={styles.postsContainer}>
						<Text style={styles.postsTitle}>Posts</Text>
						<View>
							{(data ?? []).map((item: Post) => (
								<View key={item.id}>
									<TouchableOpacity onPress={() => navigate(NAVIGATION.post(`${item.id}`))}>
										<View style={styles.post}>
											<Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
											<Text numberOfLines={2}>{item.body}</Text>
										</View>
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
