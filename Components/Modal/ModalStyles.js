import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'

const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
	modal: {
		backgroundColor: 'white',
		marginHorizontal: 15,
		padding: 10,
		elevation: 500,
		position: 'absolute',
		top: screenHeight / 4
	},
	title: {
		fontSize: 20,
		marginBottom: 15
	},
	actions: {
		flexDirection: 'row',
		marginTop: 15
	},
	action: {
		marginRight: 10
	}
})

export default styles
