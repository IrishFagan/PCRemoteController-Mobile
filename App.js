import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MouseInput from './src/components/MouseInput'

export default function App() {
  return (
    <View style={styles.container}>
      <MouseInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
