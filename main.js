import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App from './src/App';

class Main extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(Main);
