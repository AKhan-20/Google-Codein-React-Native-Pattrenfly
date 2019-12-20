import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	alert: {
		marginHorizontal: 25,
		marginVertical: 5,
		elevation: 5,
		flexDirection: 'row',
		height: 50,
		backgroundColor: 'white'
	},
	left: {
		width: '15%'
	},
	content: {
		paddingLeft: 5
	},
	title: {
		fontSize: 15,
		marginBottom: 5
	},
	default: {
		backgroundColor: '#50c9c9'
	},
	defaultTitle: {
		color: '#50c9c9'
	},
	info: {
		backgroundColor: '#61bafa'
	},
	infoTitle: {
		color: '#61bafa'
	},
	success: {
		backgroundColor: '#70df00'
	},
	successTitle: {
		color: '#70df00'
	},
	warning: {
		backgroundColor: '#faab00'
	},
	warningTitle: {
		color: '#faab00'
	},
	danger: {
		backgroundColor: '#dd0000'
	},
	dangerTitle: {
		color: '#dd0000'
	},
	icon: {
		fontSize: 20,
		marginLeft: 185
	}
})

export default styles
