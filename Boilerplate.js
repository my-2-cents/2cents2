import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Boilerplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'hi'
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>don't forget to change the name of the class!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
