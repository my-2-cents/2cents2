import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';

import Splash from './components/onboard/Splash';
import Login from './components/onboard/Login';
import Signup from './components/onboard/Signup';
import Home from './components/navBar/Home';
import Nav from './components/navBar/Nav';
import Charities from './components/navBar/Charities';
import Profile from './components/navBar/Profile';
import Activity from './components/navBar/Activity';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
    }
  }

  trackLoginUsername(text) {
    this.setState({
      loginUsername: text
    })
  };

  trackLoginPassword(text) {
    this.setState({
      loginPassword: text
    })
  }

  trackSignupUsername(text) {
    this.setState({
      signupUsername: text
    })
  };

  trackSignupPassword(text) {
    this.setState({
      signupPassword: text
    })
  }

  trackSignupConfirm(text) {
    this.setState({
      signupConfirm: text
    })
  }

  onLoginSubmit(renderAfterLogin) {
    console.log('inside login submit:', this.state)
    return fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/JSON'
      },
      body: JSON.stringify({
        loginUsername: this.state.loginUsername,
        loginPassword: this.state.loginPassword
      })
    })
    .then(r => r.json())
    .then( (data) => {
      console.log('data:', data)
      this.setState({
        userInfo: data
      }, () => {
        console.log(data)
      })
    })
    .then(() => {
      renderAfterLogin('Nav')
    })
    .catch((err) => {
      console.log(err)
      return err;
    })
  }

  onSignupSubmit(renderAfterSignup) {
    console.log('inside signup submit:', this.state)
    return fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/JSON'
      },
      body: JSON.stringify({
        signupUsername: this.state.signupUsername,
        signupPassword: this.state.signupPassword,
        signupConfirm: this.state.signupConfirm
      })
    })
    .then(r => r.json())
    .then( (data) => {
      console.log('data:', data)
    })
    .then(() => {
      renderAfterSignup('Nav')
    })
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          id: 'Splash'
        }}
        renderScene={(route, navigator) => {
            _navigator = navigator;
            if (route.id === 'Splash') {
              return (
                <Splash
                  navigator={navigator}
                  title={'Splash'}
                />
              )
            }
            if (route.id === 'Login') {
              return (
                <Login
                  navigator={navigator}
                  title={'Login'}
                  trackLoginUsername={this.trackLoginUsername.bind(this)}
                  trackLoginPassword={this.trackLoginPassword.bind(this)}
                  onLoginSubmit={this.onLoginSubmit.bind(this)}
                />
              )
            }
            if (route.id === 'Signup') {
              return (
                <Signup
                  navigator={navigator}
                  title={'Signup'}
                  trackSignupUsername={this.trackSignupUsername.bind(this)}
                  trackSignupPassword={this.trackSignupPassword.bind(this)}
                  trackSignupConfirm={this.trackSignupConfirm.bind(this)}
                  onSignupSubmit={this.onSignupSubmit.bind(this)}
                />
              )
            }
            if (route.id === 'Nav') {
              return (
                <View style={styles.container}>
                  <Nav
                    navigator={navigator}
                    title={'Nav'}
                  />
                </View>
              )
            }
          }
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa'
  },
  navBar: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    height: 80,
    width: '100%',
    bottom: 0,
  },
  navBarItem: {
    width: '25%'
  },
  one: {
    backgroundColor: 'green'
  },
  two: {
    backgroundColor: 'yellow'
  },
  three: {
    backgroundColor: 'blue'
  },
  four: {
    backgroundColor: 'purple'
  }
})
