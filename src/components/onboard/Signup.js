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
          <Text style={styles.arrowText}>BACK</Text>
        </TouchableHighlight>
        <Text style={styles.largeWords}>
          USERNAME
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.signupUsername}
          onChangeText={this.props.trackSignupUsername}
          autoCorrect={false}
          autoCapitalize={'none'}
        />
        <Text style={styles.largeWords}>
          PASSWORD
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.signupPassword}
          onChangeText={this.props.trackSignupPassword}
          autoCorrect={false}
          autoCapitalize={'none'}
        />
        <Text style={styles.largeWords}>
          CONFIRM PASSWORD
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.signupConfirm}
          onChangeText={this.props.trackSignupConfirm}
          autoCorrect={false}
          autoCapitalize={'none'}
        />
        <TouchableHighlight onPress={() => {this.props.onSignupSubmit(this.renderAfterSignup.bind(this))}} style={styles.goWords}>
          <Text>
           GO
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
    fontSize: 15,
  },
  enterInfo: {
    fontSize: 20,
    margin: 10,
    height: 40,
    width: 200,
    alignSelf: 'center',
    textAlign: 'center',
    borderColor: '#68DEA8',
    borderWidth: 0.8,
    borderRadius: 20,
    marginBottom: 40
  },
  goWords: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: '#68DEA8',
    borderRadius: 20,
  },
  backArrow: {
    position: 'absolute',
    top: 25,
    left: 25,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#68DEA8',
    height: 30,
    width: 50,
    borderRadius: 20
  },
  arrowText: {
    color: '#fafafa',
    fontSize: 12,
    textAlign: 'center',
    alignSelf: 'center',

  }
})
