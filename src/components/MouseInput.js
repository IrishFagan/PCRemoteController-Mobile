import React, { Component } from 'react'
import { Text, View, StyleSheet, PanResponder } from 'react-native'
import io from 'socket.io-client'

const MouseInput = () => {
  return(
    <View style={[styles.input, styles.blackBorder]}>
      <View>
      </View>
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