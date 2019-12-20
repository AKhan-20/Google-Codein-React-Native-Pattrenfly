import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import Card from './Components/Card/Card/Card'
import CardBody from './Components/Card/CardBody/CardBody'
import CardFooter from './Components/Card/CardFooter/CardFooter'
import CardHeader from './Components/Card/CardHeader/CardHeader'
import Modal from './Components/Modal/Modal/Modal'

export default class App extends React.Component {
	state = {
		modalVisible: false
	}

	toggleModal = visible => {
		this.setState({ modalVisible: visible })
	}

	render() {
		return (
			<View>
				<Card>
					<CardHeader>Card Header</CardHeader>
					<CardBody>Card Body 1</CardBody>
					<CardBody>Card Body 2</CardBody>
					<CardBody>Card Body 3</CardBody>
					<CardFooter>Card Footer</CardFooter>
				</Card>

				<TouchableHighlight
					onPress={() => {
						this.toggleModal(true)
					}}
				>
					<Text>Open Modal</Text>
				</TouchableHighlight>

				<Modal
					title='Model Header'
					isVisible={this.state.modalVisible}
					actions={[
						<TouchableHighlight
							key={1}
							onPress={() => {
								this.toggleModal(!this.state.modalVisible)
							}}
						>
							<Text>Continue</Text>
						</TouchableHighlight>,
						<TouchableHighlight
							key={2}
							onPress={() => {
								this.toggleModal(!this.state.modalVisible)
							}}
						>
							<Text>Cancel</Text>
						</TouchableHighlight>
					]}
				>
					<View>
						<Text>Modal is open!</Text>
					</View>
				</Modal>
			</View>
		)
	}
}
