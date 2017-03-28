import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';

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

  onLoginSubmit(renderAfterLogin) {
    // console.log('inside login submit:', this.state)
    // return fetch('http://localhost:3000/test', {
    //   method: 'GET',
    //   headers: {
    //     'content-type': 'application/JSON'
    //   }
    // })
    // .then(r => r.json())
    // .then( (data) => {
    //   console.log('data:', data)
    // })
    // .then(() => {
    // })
    renderAfterLogin('Nav')
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
