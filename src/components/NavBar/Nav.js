import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Navigator
} from 'react-native';

import Home from './Home';
import Charities from './Charities';
import Activity from './Activity';
import Profile from './Profile';

export default class Nav extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      selected: 'Home',
      username: ''
    }
  }

  onHomePress() {
    this.setState({
      selected: 'Home'
    })
  }

  onCharitiesPress() {
    this.setState({
      selected: 'Charities'
    })
  }

  onActivityPress() {
    this.setState({
      selected: 'Activity'
    })
  }

  onProfilePress() {
    this.setState({
      selected: 'Profile'
    })
  }

  renderNavContent() {
    if (this.state.selected === 'Home') {
      return(
        <Home username={this.state.username}/>
      )
    } else if (this.state.selected === 'Charities') {
      return(
        <Charities />
      )
    } else if (this.state.selected === 'Activity') {
      return(
        <Activity />
      )
    } else if (this.state.selected === 'Profile') {
      return(
        <Profile />
      )
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <View>
          {this.renderNavContent()}
        </View>
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
