import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Navigator
} from 'react-native';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'hi'
    }
  }

  onHomePress() {
    console.log('home pressed')
    this.props.navigator.push({
      id: 'Home'
    })
  }

  onActivityPress() {
    console.log('activity pressed')
    this.props.navigator.push({
      id: 'Activity'
    })
  }

  onCharitiesPress() {
    console.log('charities pressed')
    this.props.navigator.push({
      id: 'Charities'
    })
  }

  onProfilePress() {
    console.log('profile pressed')
    this.props.navigator.push({
      id: 'Profile'
    })
  }

  touch() {
    console.log('signup touched!')
  }

  render() {
    return(
      <View style={styles.navBar}>
        <TouchableHighlight onPress={this.onHomePress.bind(this)} style={[styles.navBarItem, styles.one]}>
          <Text>home</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onCharitiesPress.bind(this)} style={[styles.navBarItem, styles.two]}>
          <Text>charities</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onProfilePress.bind(this)} style={[styles.navBarItem, styles.three]}>
          <Text>profile</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onActivityPress.bind(this)} style={[styles.navBarItem, styles.four]}>
          <Text>activity</Text>
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
