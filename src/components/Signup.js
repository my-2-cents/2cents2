import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Navigator
} from 'react-native';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'hi'
    }
  }

  goBack() {
    this.props.navigator.pop();
  }

  touch() {
    console.log('signup touched!')
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Signup</Text>
        <TouchableHighlight onPress={this.goBack.bind(this)} style={styles.touch}>
          <Text>go back!</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.touch} style={styles.touch}>
          <Text>touch me!</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa'
  },
  largeWords: {
    fontSize: 20,
  },
  enterInfo: {
    margin: 10,
    height: 50,
    width: 240,
    alignSelf: 'center',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'grey'
  },
  goWords: {
    fontSize: 40,
    width: 240,
    textAlign: 'center',
    backgroundColor: '#addfad',
  },
  backArrow: {
    position: 'absolute',
    top: 25,
    left: 25,
  }
})
