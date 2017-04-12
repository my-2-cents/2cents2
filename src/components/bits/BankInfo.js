import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image } from 'react-native';

export class BankInfo extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.props.goBack}>
          <Text>
            go back!
          </Text>
        </TouchableHighlight>
        <View>
          <Text>Bank Info</Text>
        </View>
      </View>
    );
  }
}
