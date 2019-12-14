import React from 'react'
import { View } from 'react-native'
import styles from '../CardStyles'

export const Card = props => {
	const { style, children } = props

	return <View style={[styles.card, style]}>{children}</View>
}

export default Card
