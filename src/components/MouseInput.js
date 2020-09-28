import React, { useEffect, useState, useRef } from 'react'
import {  
  Text, 
  View,  
  StyleSheet, 
  PanResponder } from 'react-native'

const MouseInput = () => {
  const [size, setSize] = useState([0,0,0,0])
  const sizeRef = useRef({})
  useEffect(() => {
    sizeRef.current = size
  }, size)
  
  const socket = new WebSocket('ws://192.168.0.4:8080')

  const sendMovement = (gestureState) => {
    if((gestureState.moveX > sizeRef.current[0]) &&
       (gestureState.moveY > sizeRef.current[1]) &&
       (gestureState.moveX < sizeRef.current[2]) &&
       (gestureState.moveY < sizeRef.current[3])) {
      socket.send(`X: ${Math.floor(gestureState.dx)} - Y: ${Math.floor(gestureState.dy)}`)
    }
  }

  const onLayout = (evt) => {
    setSize([
      evt.nativeEvent.layout.x,
      evt.nativeEvent.layout.y,
      evt.nativeEvent.layout.width + evt.nativeEvent.layout.x,
      evt.nativeEvent.layout.height + evt.nativeEvent.layout.y
    ])
  }

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        sendMovement(gestureState)
      }
    })
  ).current

  return(
    <View
      {...panResponder.panHandlers}
      style={[styles.input, styles.blackBorder]}
      onLayout={(evt) => onLayout(evt)}
    />
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