import React, { useRef } from 'react'
import {  
  Text, 
  View,  
  StyleSheet, 
  PanResponder } from 'react-native'
import io from 'socket.io-client'

const MouseInput = () => {

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        console.log(`X: ${evt.nativeEvent.locationX} - Y: ${evt.nativeEvent.locationY}`)
      }
    })
  ).current

  return(
    <View {...panResponder.panHandlers} style={[styles.input, styles.blackBorder]}>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '5%',
    backgroundColor: 'grey'
  },
  blackBorder: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 7
  }
})

export default MouseInput