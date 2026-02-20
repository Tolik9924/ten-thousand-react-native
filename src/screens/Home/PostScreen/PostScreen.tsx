import React from 'react';
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { ScrollView, Text, View } from 'react-native';
import SplashScreen from '../../Splash/SplashScreen';
import { BackNavigate } from '@/components/BackNavigate/BackNavigate';

import { styles } from './PostScreen.styles';

export default function PostScreen() {
	const { postId } = useLocalSearchParams();

	const { data, isLoading, isError } = useQuery({
		queryKey: ['posts', postId],
		queryFn: async () => {
			const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
			return res.data;
		},
		staleTime: 1000 * 60 * 5,
		gcTime: 1000 * 60 * 60, // ⬅️ cacheTime перейменували!
	});

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
