import React from 'react';
import { useRouter } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { BottomMenu } from '@/components/BottomMenu/BottomMenu';
import SplashScreen from '@/screens/Splash/SplashScreen';
import { useAuthData } from '@/context/auth';
import { usePosts, type Post } from '@/hooks/usePosts';
import { styles } from './HomeScreen.styles';

export default function HomeScreen() {
	const router = useRouter();
	const { user, isLoading: isLoadingUser } = useAuthData();
	const { data, isLoading, isError } = usePosts();

	if (isLoading || isLoadingUser) return <SplashScreen />;
	if (isError) return <Text style={{ padding: 20 }}>Error loading posts</Text>;

	return (
		<View style={{ flex: 1 }}>
			<ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
				<View style={styles.container}>
					<View style={styles.welcomeContainer}>
						<Text style={styles.welcomeText}>
							Hello, {`${user?.firstName} ${user?.lastName}` || 'User'}!
						</Text>
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
									<TouchableOpacity
										onPress={() => {
											router.push(`/home/post/${item.id}`);
										}}
									>
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
