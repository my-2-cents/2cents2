import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Navigator,
  Image
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
        <Image
        source={require('../../../assets/icons/2centsText.png')}
        style={styles.logoText}
        ></Image>
        <Image
        source={require('../../../assets/icons/2centsBall.png')}
        style={styles.logoIcon}
        >
        </Image>
        <TouchableHighlight onPress={this.onLoginPress.bind(this)} style={styles.touch}>
          <Text>LOGIN</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onSignupPress.bind(this)} style={styles.touch}>
          <Text>SIGNUP</Text>
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
    backgroundColor: '#fafafa',
  },
  touch: {
    height: 40,
    width: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#68DEA8',
    borderWidth: 0.8,
    borderRadius: 20
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
  },
  logoIcon: {
    height: 120,
    width: 120,
    marginBottom: 50
  },
  logoText: {
    width: 200,
    height: 50
  }
})

