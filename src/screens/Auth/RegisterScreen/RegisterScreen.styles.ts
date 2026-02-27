import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		marginTop: 100,
		backgroundColor: '#fff',
		height: '95%',
		width: '100%',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		elevation: 12,
	},
	header: {
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#EBEFF5',
		flexDirection: 'row',
		gap: 10,
	},
	userContainer: {
		width: 48,
		height: 48,
		borderRadius: 50,
		backgroundColor: '#E9F7F2',
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerText: {
		gap: 5,
	},
	title: {
		fontWeight: '500',
		fontSize: 15,
		lineHeight: 24,
		color: '#06070A',
	},
	subTitle: {
		fontWeight: '400',
		fontSize: 15,
		lineHeight: 16,
		color: '#606773',
	},
	formContainer: {
		padding: 20,
		height: 550,
	},
	scrollAvoidContainer: {
		flex: 1,
	},
	formItems: {
		gap: 15,
	},
	formItem: {
		gap: 5,
	},
	submitButton: {
		width: '100%',
		position: 'absolute',
		padding: 20,
	},
});
