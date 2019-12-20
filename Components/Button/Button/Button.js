import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from '../ButtonStyles'

export const Button = props => {
	const {
		disabled = false,
		onPress,
		title,
		variant = 'primary',
		customStyles,
		customTextStyles
	} = props
	let style, textStyle

	if (variant === 'secondary') {
		style = styles.secondary
		textStyle = styles.secondaryText
	} else if (variant === 'tertiary') {
		style = styles.tertiary
		textStyle = styles.tertiaryText
	} else if (variant === 'danger') {
		style = styles.danger
		textStyle = styles.dangerText
	} else if (variant === 'control') {
		style = styles.control
		textStyle = styles.controlText
	} else {
		style = styles.primary
		textStyle = styles.primaryText
	}

	return (
		<TouchableOpacity
			disabled={disabled}
			onPress={onPress}
			style={[styles.button, style, customStyles]}
			activeOpacity={0.8}
		>
			<Text style={[styles.text, textStyle, customTextStyles]}>{title}</Text>
		</TouchableOpacity>
	)
}

export default Button
