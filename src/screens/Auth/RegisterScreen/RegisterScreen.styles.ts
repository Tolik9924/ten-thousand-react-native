import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	chevronBack: {
		position: 'absolute',
		top: 50,
		left: 10,
	},
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
		boxSizing: 'border-box',
		borderBottomWidth: 1,
		borderBottomColor: '#EBEFF5',
		display: 'flex',
		flexDirection: 'row',
		gap: 10,
	},
	userContainer: {
		width: 48,
		height: 48,
		borderRadius: 50,
		backgroundColor: '#E9F7F2',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerText: {
		display: 'flex',
		gap: 5,
	},
	title: {
		fontWeight: 500,
		fontSize: 15,
		lineHeight: 24,
		color: '#06070A',
	},
	subTitle: {
		fontWeight: 400,
		fontSize: 15,
		lineHeight: 16,
		color: '#606773',
	},
	formContainer: {
		padding: 20,
		boxSizing: 'border-box',
		height: 550,
	},
	scrollAvoidContainer: {
		flex: 1,
	},
	formItems: {
		display: 'flex',
		gap: 15,
	},
	formItem: {
		display: 'flex',
		gap: 5,
	},
	nameItem: {
		color: '#606773',
		fontWeight: 400,
		fontSize: 15,
		lineHeight: 24,
	},
	submitButton: {
		width: '100%',
		position: 'absolute',
		padding: 20,
		boxSizing: 'border-box',
	},
});
