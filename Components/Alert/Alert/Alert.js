import React from 'react'
import { Text, View } from 'react-native'
import styles from '../AlertStyles'

export const Alert = props => {
	const { onPress, title, variant = 'default', children, action } = props
	let style, titleStyle

	if (variant === 'info') {
		style = styles.info
		titleStyle = styles.infoTitle
	} else if (variant === 'success') {
		style = styles.success
		titleStyle = styles.successTitle
	} else if (variant === 'warning') {
		style = styles.warning
		titleStyle = styles.warningTitle
	} else if (variant === 'danger') {
		style = styles.danger
		titleStyle = styles.dangerTitle
	} else {
		style = styles.default
		titleStyle = styles.defaultTitle
	}

	return (
		<View style={styles.alert}>
			<View style={[styles.left, style]}></View>
			<View style={styles.content}>
				<Text style={[styles.title, titleStyle]}>{title}</Text>
				{children}
			</View>
			<View style={styles.icon}>{action}</View>
		</View>
	)
}

export default Alert
