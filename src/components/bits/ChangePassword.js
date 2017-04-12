import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image } from 'react-native';

export class ChangePassword extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.props.goBack}>
          <Text>
            go back!
          </Text>
        </TouchableHighlight>
        <View>
          <Text>Change Password</Text>
        </View>
      </View>
    );
  }
}
