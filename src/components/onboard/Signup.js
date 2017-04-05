import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Navigator,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      behavior: 'padding'
    }
  }

  renderAfterSignup(scene) {
    this.props.navigator.push({
      id: scene,
    })
  }

  goBack() {
    this.props.navigator.pop();
  }

  render() {
    return(
      <KeyboardAvoidingView behavior={this.state.behavior} style={styles.container}>
        <TouchableHighlight onPress={this.goBack.bind(this)} style={styles.backArrow}>
          <Text>Go Back</Text>
        </TouchableHighlight>
        <Text style={styles.largeWords}>
          Username:
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.signupUsername}
          onChangeText={this.props.trackSignupUsername}
        />
        <Text style={styles.largeWords}>
          Password:
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.signupPassword}
          onChangeText={this.props.trackSignupPassword}
        />
        <Text style={styles.largeWords}>
          Confirm Password:
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.signupConfirm}
          onChangeText={this.props.trackSignupConfirm}
        />
        <TouchableHighlight onPress={() => {this.props.onSignupSubmit(this.renderAfterSignup.bind(this))}}>
          <Text style={styles.goWords}>
            Go!
          </Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
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
