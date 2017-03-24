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
  constructor(props) {
    super(props)

    this.state= {
      loginUsername: ''
    }
  }


  render() {
    return (
      <Navigator
        initialRoute={{
          id: 'Home'
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
            if (route.id === 'Home') {
              return (
                <View style={styles.container}>
                  <Home
                    title={'Home'}
                  />
                  <Nav
                    navigator={navigator}
                  />
                </View>
              )
            }
            if (route.id === 'Activity') {
              return (
                <View style={styles.container}>
                  <Activity
                    title={'Activity'}
                  />
                  <Nav
                    navigator={navigator}
                  />
                </View>
              )
            }
            if (route.id === 'Charities') {
              return (
                <View style={styles.container}>
                  <Charities
                    title={'Charities'}
                  />
                  <Nav
                    navigator={navigator}
                  />
                </View>
              )
            }
            if (route.id === 'Profile') {
              return (
                <View style={styles.container}>
                  <Profile
                    title={'Profile'}
                  />
                  <Nav
                    navigator={navigator}
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
