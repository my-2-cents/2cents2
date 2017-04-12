import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image } from 'react-native';

export class Notifications extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.props.goBack}>
          <Text>
            go back!
          </Text>
        </TouchableHighlight>
        <View>
          <Text>Notifications</Text>
        </View>
      </View>
    );
  }
}


