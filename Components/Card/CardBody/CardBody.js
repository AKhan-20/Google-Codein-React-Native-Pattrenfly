import React from 'react'
import { Text } from 'react-native'
import styles from '../CardStyles'

export const CardBody = props => {
	const { style, children } = props

	return <Text style={[styles.cardBody, style]}>{children}</Text>
}

export default CardBody
