import React from 'react'
import { Text } from 'react-native'
import styles from '../CardStyles'

export const CardHeader = props => {
	const { style, children } = props

	return <Text style={[styles.cardHeader, style]}>{children}</Text>
}

export default CardHeader
