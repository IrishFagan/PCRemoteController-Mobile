import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MouseInput from './src/components/MouseInput'
import ButtonInput from './src/components/ButtonInput'

export default function App() {

  const socket = new WebSocket('ws://192.168.0.28:8080')

  socket.addEventListener('open', () => console.log('Connected!!'))
  socket.addEventListener('error', (err) => console.log(err))

  return (
    <View style={styles.container}>
      <MouseInput
        socket={socket}
      />
      <ButtonInput
        socket={socket}
        name="Left Click"
        evt="LEFT_CLICK"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightgrey'
  },
});
