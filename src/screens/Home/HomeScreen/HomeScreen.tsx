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
import { InfoWrapper } from '@/components/InfoWrapper/InfoWrapper';

const POSTS_LIMIT = 3;

export default function HomeScreen() {
	const navigate = useNavigate();
	const { user, isLoading: isLoadingUser, isLogIn } = useAuthData();
	const { data, isLoading, isError } = usePosts(POSTS_LIMIT);

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
					</View>

					{/* beforeStart */}
					<View style={styles.content}>
						<Text style={styles.beforeStartText}>Before you Start</Text>
					</View>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.horizontalMenu}
					>
						<View style={styles.beforeStartItems}>
							<View style={styles.startItems}>
								{/* start item */}
								<View style={styles.startItem}>
									<View style={styles.titleContainer}>
										<View style={styles.logoStart}>
											<Ionicons name="link-outline" size={16.73} color="#fff" />
										</View>
										<Text style={styles.startTitle}>Link you Bank Account</Text>
									</View>
									<View style={styles.stepsContainer}>
										<Text style={styles.stepsCount}>2 Steps</Text>
										<MaterialIcons name="arrow-forward" size={24} color="#ffffff" />
									</View>
								</View>
								{/* start item */}
								<View style={styles.startItem}>
									<View style={styles.titleContainer}>
										<View style={styles.logoStart}>
											<Ionicons name="link-outline" size={16.73} color="#fff" />
										</View>
										<Text style={styles.startTitle}>Link you Bank Account</Text>
									</View>
									<View style={styles.stepsContainer}>
										<Text style={styles.stepsCount}>2 Steps</Text>
										<MaterialIcons name="arrow-forward" size={24} color="#ffffff" />
									</View>
								</View>
							</View>
						</View>
					</ScrollView>

					<View style={styles.postsContainer}>
						<Text style={styles.postsTitle}>Posts</Text>
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
