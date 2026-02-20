import React, { useState } from 'react';
import axios from 'axios';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { BottomMenu } from '@/components/BottomMenu/BottomMenu';
import Input from '@/components/Input/Input';
import SplashScreen from '@/screens/Splash/SplashScreen';
import { Post } from '@/navigation/types';
import { styles } from './SearchScreen.styles';
import { useRouter } from 'expo-router';

export default function SearchScreen() {
	const [query, setQuery] = useState('');
	const router = useRouter();

	const { data, isLoading, isError } = useQuery({
		queryKey: ['allPosts'],
		queryFn: async () => {
			const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
			return res.data;
		},
		staleTime: 1000 * 60 * 5,
		gcTime: 1000 * 60 * 60, // ⬅️ cacheTime перейменували!
	});

	if (isLoading) return <SplashScreen />;
	if (isError) return <Text style={{ padding: 20 }}>Error loading posts</Text>;

	const filteredPosts: Post[] = data?.filter((post: Post) =>
		post.title.toLowerCase().includes(query.toLowerCase()),
	);

	return (
		<View style={styles.page}>
			<View style={styles.posts}>
				<Input placeholder="Search posts..." value={query} onChangeText={setQuery} />

				<FlatList
					data={filteredPosts}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => {
								router.push(`/home/post/${item.id}`);
								console.log('POST SCREEN');
							}}
						>
							<View style={styles.post}>
								<Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
								<Text numberOfLines={2}>{item.body}</Text>
							</View>
						</TouchableOpacity>
					)}
				/>
			</View>
			<BottomMenu />
		</View>
	);
}
