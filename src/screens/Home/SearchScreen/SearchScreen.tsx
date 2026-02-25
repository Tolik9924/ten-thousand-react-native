import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { BottomMenu } from '@/components/BottomMenu/BottomMenu';
import Input from '@/components/Input/Input';
import SplashScreen from '@/screens/Splash/SplashScreen';
import { Post } from './types';
import { useAllPosts } from '@/hooks/posts/useAllPosts';
import { useNavigate } from '@/hooks/useNavigate';
import { NAVIGATION } from '@/constants/navigation';
import { useDebounce } from '@/hooks/useDebounce';
import { InfoWrapper } from '@/components/InfoWrapper/InfoWrapper';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './SearchScreen.styles';

export default function SearchScreen() {
	const [query, setQuery] = useState('');
	const navigate = useNavigate();

	const { data, isLoading, isError } = useAllPosts();
	const debouncedQuery = useDebounce(query, 500);

	if (isLoading) return <SplashScreen />;
	if (isError) return <Text style={{ padding: 20 }}>Error loading posts</Text>;

	const filteredPosts: Post[] = data?.filter((post: Post) =>
		post.title.toLowerCase().includes(debouncedQuery.toLowerCase()),
	);

	return (
		<View style={styles.page}>
			<View style={styles.posts}>
				<Text style={styles.title}>Search</Text>
				<View style={styles.inputContainer}>
					<Input
						Icon={<Ionicons name="search" color="#606773" size={24} />}
						placeholder="Search Products..."
						value={query}
						onChangeText={setQuery}
						isErrorText={false}
					/>
				</View>

				<FlatList
					style={styles.postsList}
					data={filteredPosts}
					keyExtractor={(item: Post) => item.id.toString()}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.postContainer}
							onPress={() => navigate(NAVIGATION.post(item.id))}
						>
							<InfoWrapper>
								<View style={styles.post}>
									<Text style={styles.postId}>{item.id}</Text>
									<Text style={styles.postTitle}>{item.title}</Text>
								</View>
							</InfoWrapper>
						</TouchableOpacity>
					)}
				/>
			</View>
			<BottomMenu />
		</View>
	);
}
