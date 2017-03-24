import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import LoginSignup from './components/LoginSignup';
import Login from './components/Login';
import Signup from './components/Signup';

export default class App extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{
          id: 'LoginSignup'
        }}
        renderScene={(route, navigator) => {
            _navigator = navigator;
            if (route.id === 'LoginSignup') {
              return (
                <LoginSignup
                  navigator={navigator}
                  title={'LoginSignup'}
                />
              )
            }
            if (route.id === 'Login') {
              return (
                <Login
                  navigator={navigator}
                  title={'Login'}
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
          }
        }
      />
    );
  }
}
