import React, { useMemo, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
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
import { PaginatedList } from '@/components/PaginatedList';

export default function SearchScreen() {
	const [query, setQuery] = useState('');
	const navigate = useNavigate();

	const { data, isLoading, isError } = useAllPosts();
	const debouncedQuery = useDebounce(query, 500);

	const filteredPosts: Post[] = useMemo(
		() =>
			(data ?? []).filter((post: Post) =>
				post.title.toLowerCase().includes(debouncedQuery.toLowerCase()),
			),
		[data, debouncedQuery],
	);

	if (isLoading) return <SplashScreen />;
	if (isError) return <Text style={{ padding: 20 }}>Error loading posts</Text>;

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

				<PaginatedList
					data={filteredPosts}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.postContainer}
							onPress={() => navigate(NAVIGATION.post(item.id.toString()))}
						>
							<InfoWrapper>
								<View style={styles.post}>
									<Text style={styles.postId}>{item.id}</Text>
									<Text style={styles.postTitle}>{item.title}</Text>
								</View>
							</InfoWrapper>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item.id.toString()}
				/>
			</View>
			<BottomMenu />
		</View>
	);
}
