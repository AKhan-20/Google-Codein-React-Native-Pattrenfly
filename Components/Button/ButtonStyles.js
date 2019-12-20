import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	button: {
		display: 'flex',
		height: 40,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 4,
		marginHorizontal: 25,
		marginVertical: 5
	},
	text: {
		fontSize: 16
	},
	primary: {
		backgroundColor: '#005bcf'
	},
	primaryText: {
		color: '#FFFFFF'
	},
	secondary: {
		backgroundColor: '#FFFFFF',
		borderWidth: 1,
		borderColor: '#005bcf'
	},
	secondaryText: {
		color: '#005bcf'
	},
	tertiary: {
		backgroundColor: '#FFFFFF',
		borderWidth: 1,
		borderColor: '#151515'
	},
	tertiaryText: {
		color: '#151515'
	},
	danger: {
		backgroundColor: '#dd0000'
	},
	dangerText: {
		color: '#FFFFFF'
	},
	control: {
		backgroundColor: '#FFFFFF',
		borderRadius: 1,
		borderColor: '#ededed',
		borderWidth: 1,
		borderBottomColor: '#8a8d90',
		elevation: 2
	},
	controlText: {
		color: '#151515'
	}
})

export default styles
