import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button,
  Image
  } from 'react-native';

export class NavButtons extends React.Component {

  sayStuff() {
    console.log(()=> {'heyo'});
  }

  navPress() {
    this.setState = {
      isNavClicked: true,
    }
  }

  render() {
    return (
      <View>
        <Button title='Change Password' onPress={this.sayStuff.bind(this)}>Change Password</Button>
        <Button title='Monthly Cap' onPress={this.sayStuff.bind(this)}>Monthly Cap</Button>
        <Button title='Bank Info' onPress={this.sayStuff.bind(this)}>Bank Info</Button>
        <Button title='Notifications' onPress={this.sayStuff.bind(this)}>Notifications</Button>
      </View>
    );
  }
}

