import React from 'react'
import { Text } from 'react-native'
import styles from '../CardStyles'

export const CardFooter = props => {
	const { style, children } = props

	return <Text style={[styles.cardFooter, style]}>{children}</Text>
}

export default CardFooter
