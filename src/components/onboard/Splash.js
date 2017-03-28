import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Navigator
} from 'react-native';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      totalWorkouts: null,
      behavior: 'padding',
    }
  }

  onLoginPress(){
    this.props.navigator.push({
      id: 'Login'
    });
  };

  onSignupPress() {
    this.props.navigator.push({
      id: 'Signup'
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Splash</Text>
        <TouchableHighlight onPress={this.onLoginPress.bind(this)} style={styles.touch}>
          <Text>Go To Login!</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onSignupPress.bind(this)} style={styles.touch}>
          <Text>Go To Signup!</Text>
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

