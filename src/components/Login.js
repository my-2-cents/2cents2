import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Navigator
} from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      totalWorkouts: null,
      behavior: 'padding',
    }
  }

  touch() {
    console.log('touch!')
  }

  goBack() {
    this.props.navigator.pop();
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Login</Text>
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
  touch: {
    height: 40,
    width: 100,
    backgroundColor: '#fadfad',
    marginBottom: 20
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
