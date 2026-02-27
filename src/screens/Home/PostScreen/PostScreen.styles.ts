import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
	container: {
		flex: 1,
	},
	postNameContainer: {
		width: '100%',
		height: 480,
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 20,
		backgroundColor: '#fff',
	},
	postName: {
		color: '#06070A',
		fontWeight: '700',
		fontSize: 28,
		lineHeight: 32,
		letterSpacing: 0,
		textAlign: 'center',
		marginTop: 115,
	},
	content: {
		padding: 10,
	},
	aboutContainer: {
		marginTop: 20,
		gap: 10,
	},
	postImgContainer: {
		padding: 20,
	},
	postImg: {
		width: '100%',
		height: 229,
	},
	sectionTitle: {
		color: '#606773',
		fontWeight: '400',
		fontSize: 15,
		lineHeight: 16,
		letterSpacing: 0,
	},
	aboutText: {
		fontWeight: '400',
		fontSize: 15,
		lineHeight: 32,
		letterSpacing: 0,
		color: '#06070A',
	},
	commentsContainer: {
		marginTop: 20,
		gap: 10,
	},
	commentContainer: {
		gap: 10,
	},
	personInfo: {
		gap: 3,
	},
	commentName: {
		fontWeight: '500',
		fontSize: 18,
		lineHeight: 24,
		letterSpacing: 0,
	},
	commentEmail: {
		color: '#06070A',
		fontWeight: '500',
		fontSize: 15,
		lineHeight: 24,
		letterSpacing: 0,
	},
});
