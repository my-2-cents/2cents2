import React from 'react';
import { Alert, StyleSheet, Text, View, Navigator } from 'react-native';

import Splash from './components/onboard/Splash';
import Login from './components/onboard/Login';
import Signup from './components/onboard/Signup';
import Home from './components/NavBar/Home';
import Nav from './components/NavBar/Nav';
import Charities from './components/NavBar/Charities';
import Profile from './components/NavBar/Profile';
import Activity from './components/NavBar/Activity';

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
    return fetch('https://two-cents-server.herokuapp.com/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/JSON'
      },
      body: JSON.stringify({
        username: this.state.loginUsername,
        password: this.state.loginPassword
      })
    })
    .then(r => r.json())
    .then( (data) => {
      if (data.failed) {
        Alert.alert(
          'Whoops!',
          `${data.failed}`,
          [
            {text: 'Try Again', onPress: () => console.log('try again pressed'), style: 'default'}
          ]
        )
      } else {
        this.setState({
          loginUsername: '',
          loginPassword: '',
          username: data.username,
          monthlyCap: data.monthlyCap,
          tempSeries: data.series,
          user_id: data.user_id,
          token: data.token
        }, () => {
          renderAfterLogin('Nav')
        })
      }
    })
    .catch((err) => {
      console.log(err)
      return err;
    })
  }

  onSignupSubmit(renderAfterSignup) {
    return fetch('https://two-cents-server.herokuapp.com/user/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/JSON'
      },
      body: JSON.stringify({
        username: this.state.signupUsername,
        password: this.state.signupPassword,
        passwordConfirm: this.state.signupConfirm,
        monthlyCap: 15,
        series: [33, 33, 33]
      })
    })
    .then(r => r.json())
    .then( (data) => {
      if (data.failed) {
        Alert.alert(
          'Whoops!',
          `${data.failed}`,
          [
            {text: 'Try Again', onPress: () => console.log('try again pressed'), style: 'default'}
          ]
        )
      } else {
        this.setState({
          signupUsername: '',
          signupPassword: '',
          signupConfirm: '',
          username: data.username,
          monthlyCap: data.monthlyCap,
          tempSeries: data.series,
          user_id: data.user_id,
          token: data.token
        }, () => {
          renderAfterSignup('Nav')
        })
      }
    })
    .catch((err) => {
      console.log(err);
      return err;
    })
  }

  onNewCapSubmit(renderAfterCapUpdate) {
  console.log('inside newCap submit:', this.state)
  return fetch('http://localhost:3000/user/cap', {
    method: 'PUT',
    headers: {
      'content-type': 'application/JSON'
    },
    body: JSON.stringify({
      cap: this.state.cap
    })
  })
  .then(r => r.json())
  .then( (data) => {
    console.log('data:', data)
  })
  .then(() => {
    renderAfterCapUpdate('Monthly Cap')
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
                    username={this.state.username}
                    monthlyCap={this.state.monthlyCap}
                    series={this.state.tempSeries}
                    user_id={this.state.user_id}
                    token={this.state.token}
                  />
                </View>
                )
              }
            if (route.id === 'Cap') {
              return (
                <MonthlyCap
                />
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
