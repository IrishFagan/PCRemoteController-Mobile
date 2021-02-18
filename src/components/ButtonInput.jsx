import React, { useEffect, useState, useRef } from 'react'
import {
	Text,
	View,
	StyleSheet,
	PanResponder,
	Button
} from 'react-native'

const ButtonInput = (props) => {

	return(
		<View>
			<Button
				title={props.name}
				onPress={() => props.socket.send(`${props.evt}`)}
			/>
		</View>
	)
}

export default ButtonInput