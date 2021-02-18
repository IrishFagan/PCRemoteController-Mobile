import React, { useEffect, useState, useRef } from 'react'
import {  
  Text, 
  View,  
  StyleSheet, 
  PanResponder } from 'react-native'

const MouseInput = (props) => {
  const [size, setSize] = useState([0,0,0,0])
  const sizeRef = useRef({})
  useEffect(() => {
    sizeRef.current = size
  }, size)

  const sendMovement = (gestureState) => {
    if(typeof(props.socket) == 'undefined') {
      console.log('Not sending!')
    } else {
      if((gestureState.moveX > sizeRef.current[0]) &&
        (gestureState.moveY > sizeRef.current[1]) &&
        (gestureState.moveX < sizeRef.current[2]) &&
        (gestureState.moveY < sizeRef.current[3])) {
          props.socket.send(`MOVE_MOUSE ${Math.floor(gestureState.dx)} ${Math.floor(gestureState.dy)}`)
        console.log('Sending!!')
        console.log(sizeRef.current[0], sizeRef.current[1], sizeRef.current[2], sizeRef.current[3])
      }
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
    marginTop: '10%',
    backgroundColor: 'grey'
  },
  blackBorder: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 7
  }
})

export default MouseInput