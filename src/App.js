import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import LoginSignup from './components/LoginSignup';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/NavBar/Home';
import Nav from './components/NavBar/Nav';
import Charities from './components/NavBar/Charities';
import Profile from './components/NavBar/Profile';
import Activity from './components/NavBar/Activity';

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
