import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
	posts: {
		flex: 1,
		paddingHorizontal: 10,
		boxSizing: 'border-box',
		marginTop: 50,
	},
	title: {
		color: '#06070A',
		fontWeight: '600',
		fontSize: 22,
		lineHeight: 32,
		letterSpacing: 0,
		paddingHorizontal: 10,
	},
	inputContainer: {
		marginBottom: 5,
	},
	postsList: {
		flex: 1,
	},
	postContainer: {
		marginBottom: 10,
	},
	post: {
		padding: 10,
		boxSizing: 'border-box',
	},
	postId: {
		color: '#06070A',
		fontWeight: '500',
		fontSize: 15,
		lineHeight: 24,
		letterSpacing: 0,
	},
	postTitle: {
		color: '#858C94',
		fontWeight: '400',
		fontSize: 13,
		lineHeight: 16,
		letterSpacing: 0,
	},
});
