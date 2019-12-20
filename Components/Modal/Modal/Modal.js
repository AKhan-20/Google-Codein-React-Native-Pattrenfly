import React, { Component } from 'react'
import { Modal, View, Text } from 'react-native'
import styles from '../ModalStyles'

export const CustomModel = props => {
	const { title, isVisible, actions, children } = props

	return (
		<View>
			<Modal
				transparent={true}
				visible={isVisible}
				backdropColor={'green'}
				backdropOpacity={1}
			>
				<View style={styles.modal}>
					<Text style={styles.title}>{title}</Text>
					{children}

					<View style={styles.actions}>
						{actions.map((action, i) => {
							return (
								<View style={styles.action} key={i}>
									{action}
								</View>
							)
						})}
					</View>
				</View>
			</Modal>
		</View>
	)
}

export default CustomModel
