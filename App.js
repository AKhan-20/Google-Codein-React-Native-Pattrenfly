import React from 'react'
import { View, Text } from 'react-native'

import Card from './Components/Card/Card/Card'
import CardBody from './Components/Card/CardBody/CardBody'
import CardFooter from './Components/Card/CardFooter/CardFooter'
import CardHeader from './Components/Card/CardHeader/CardHeader'

export default function App() {
	return (
		<View>
			<Card>
				<CardHeader>Card Header</CardHeader>
				<CardBody>Card Body 1</CardBody>
				<CardBody>Card Body 2</CardBody>
				<CardBody>Card Body 3</CardBody>
				<CardFooter>Card Footer</CardFooter>
			</Card>
		</View>
	)
}
