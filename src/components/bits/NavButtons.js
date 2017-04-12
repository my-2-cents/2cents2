import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image
  } from 'react-native';

export class NavTouchableHighlights extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      profileSelected: 'changePassword'
    }
  }

  renderProfileComponents() {
    if (this.state.profileSelected === 'changePassword') {
      return <ChangePassword />
    } else if (this.state.profileSelected === 'monthlyCap') {
      return <MonthlyCap />
    }
  }

  render() {
    return (
      <View>
        <TouchableHighlight title='Change Password' onPress={this.sayStuff.bind(this)}>Change Password</TouchableHighlight>
        <TouchableHighlight title='Monthly Cap' onPress={this.sayStuff.bind(this)}>Monthly Cap</TouchableHighlight>
        <TouchableHighlight title='Bank Info' onPress={this.sayStuff.bind(this)}>Bank Info</TouchableHighlight>
        <TouchableHighlight title='Notifications' onPress={this.sayStuff.bind(this)}>Notifications</TouchableHighlight>
      </View>
    );
  }
}

