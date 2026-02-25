import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { BottomMenu } from '@/components/BottomMenu/BottomMenu';
import Input from '@/components/Input/Input';
import SplashScreen from '@/screens/Splash/SplashScreen';
import { styles } from './SearchScreen.styles';
import { Post } from './types';
import { useAllPosts } from '@/hooks/posts/useAllPosts';
import { useNavigate } from '@/hooks/useNavigate';
import { NAVIGATION } from '@/constants/navigation';
import { useDebounce } from '@/hooks/useDebounce';

export default function SearchScreen() {
	const [query, setQuery] = useState('');
	const navigate = useNavigate();

	const { data, isLoading, isError } = useAllPosts();

	console.log('DATA: ', data);

	if (isLoading) return <SplashScreen />;
	if (isError) return <Text style={{ padding: 20 }}>Error loading posts</Text>;

	const filteredPosts: Post[] = data?.filter((post: Post) =>
		post.title.toLowerCase().includes(query.toLowerCase()),
	);

	console.log('FILTERED POSTS: ', filteredPosts);

	const debouncedFilteredPosts: Post[] = useDebounce(filteredPosts, 500);

	return (
		<View style={styles.page}>
			<View style={styles.posts}>
				<Input placeholder="Search posts..." value={query} onChangeText={setQuery} />

				<FlatList
					data={debouncedFilteredPosts}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<TouchableOpacity onPress={() => navigate(NAVIGATION.post(item.id))}>
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
