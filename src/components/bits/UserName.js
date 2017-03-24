import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image } from 'react-native';

export class UserName extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.username}>
          Indiana Jones
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  username: {
    fontSize: 20,
    paddingTop: 10,
    color: '#fafafa'
  }
});
