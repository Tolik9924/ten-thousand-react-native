import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native';
import { usePost } from '@/hooks/posts';
import SplashScreen from '@/screens/Splash/SplashScreen';
import { BackNavigate } from '@/components/BackNavigate/BackNavigate';
import postImg from '@/assets/post-img.jpg';
import { Comment } from '@/types/posts';
import { InfoWrapper } from '@/components/InfoWrapper/InfoWrapper';
import { styles } from './PostScreen.styles';

export default function PostScreen() {
	const { postId } = useLocalSearchParams();
	const { data, isLoading, isError } = usePost(postId);

	if (isLoading) return <SplashScreen />;
	if (isError) return <Text style={{ padding: 20 }}>Error loading post</Text>;

	return (
		<View style={styles.page}>
			<BackNavigate />
			<ScrollView style={styles.container}>
				<View style={styles.postNameContainer}>
					<Text style={styles.postName}>{data.title}</Text>
					<View style={styles.postImgContainer}>
						<Image style={styles.postImg} source={postImg} />
					</View>
				</View>
				<View style={styles.content}>
					<View style={styles.aboutContainer}>
						<Text style={styles.sectionTitle}>About</Text>
						<InfoWrapper>
							<Text style={styles.aboutText}>{data.body}</Text>
						</InfoWrapper>
					</View>
					<View style={styles.commentsContainer}>
						<Text style={styles.sectionTitle}>Comments</Text>
						{data?.comments.map((comment: Comment) => (
							<InfoWrapper key={comment.name}>
								<View style={styles.commentContainer}>
									<View style={styles.personInfo}>
										<Text style={styles.commentName}>{comment.name}</Text>
										<Text style={styles.commentEmail}>{comment.email}</Text>
									</View>
									<Text>{comment.body}</Text>
								</View>
							</InfoWrapper>
						))}
					</View>
				</View>
			</ScrollView>
			<BackNavigate isBottom={true} />
		</View>
	);
}
