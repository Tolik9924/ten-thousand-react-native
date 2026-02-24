import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { usePost } from '@/hooks/posts';
import SplashScreen from '@/screens/Splash/SplashScreen';
import { BackNavigate } from '@/components/BackNavigate/BackNavigate';
import { styles } from './PostScreen.styles';

export default function PostScreen() {
	const { postId } = useLocalSearchParams();
	const { data, isLoading, isError } = usePost(postId);

	if (isLoading) return <SplashScreen />;
	if (isError) return <Text style={{ padding: 20 }}>Error loading post</Text>;

	return (
		<ScrollView style={styles.container}>
			<BackNavigate />
			<View style={styles.post}>
				<Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{data.title}</Text>
				<Text style={{ fontSize: 16, lineHeight: 24 }}>{data.body}</Text>
			</View>
		</ScrollView>
	);
}
