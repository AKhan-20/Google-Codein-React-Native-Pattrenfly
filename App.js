import React from 'react'
import { View, Text } from 'react-native'

import Card from './Components/Card/Card/Card'
import CardBody from './Components/Card/CardBody/CardBody'
import CardFooter from './Components/Card/CardFooter/CardFooter'
import CardHeader from './Components/Card/CardHeader/CardHeader'
import Modal from './Components/Modal/Modal/Modal'
import Button from './Components/Button/Button/Button'

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

				<Button title={'Primary'} variant='primary' />
				<Button title={'Secondary'} variant='secondary' />
				<Button title={'Tertiary'} variant='tertiary' />
				<Button title={'Danger'} variant='danger' />
				<Button title={'Control'} variant='control' />

				<Button
					title='Open Modal'
					onPress={() => {
						this.toggleModal(true)
					}}
				/>

				<Modal
					title='Model Header'
					isVisible={this.state.modalVisible}
					actions={[
						<Button
							title='Continue'
							variant='primary'
							customStyles={{ padding: 10, marginHorizontal: 0 }}
							onPress={() => {
								this.toggleModal(!this.state.modalVisible)
							}}
						/>,
						<Button
							title='Cancel'
							variant='secondary'
							customStyles={{ padding: 10, marginHorizontal: 0 }}
							onPress={() => {
								this.toggleModal(!this.state.modalVisible)
							}}
						/>
					]}
				>
					<View>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum.
						</Text>
					</View>
				</Modal>
			</View>
		)
	}
}
