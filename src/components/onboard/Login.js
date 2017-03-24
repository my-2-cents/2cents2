import React from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
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

  goBack() {
    this.props.navigator.pop();
  }

  goForward() {
    this.props.navigator.push({
      id: 'Nav'
    });
  }

  render() {
    return(
      <View style={styles.container}>


        <Text style={styles.largeWords}>
          Username:
        </Text>
        <KeyboardAvoidingView behavior={this.state.behavior}>
          <TextInput style={styles.enterInfo}
            value={this.state.loginUsername}
            onChangeText={(loginUsername) => this.props.handleLoginUsername(loginUsername)}
          />
        </KeyboardAvoidingView>
        <Text style={styles.largeWords}>
          Password:
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.loginPassword}
          onChangeText={(loginPassword) => this.props.handleLoginPassword(loginPassword)}
        />
        <TouchableHighlight onPress={() => {this.props.onLoginSubmit(this.renderAfterLogin.bind(this))}}>
          <Text style={styles.goWords}>
            Go!
          </Text>
        </TouchableHighlight>


        <Text>Login</Text>
        <TouchableHighlight onPress={this.goBack.bind(this)} style={styles.touch}>
          <Text>go back!</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.goForward.bind(this)} style={styles.touch}>
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
