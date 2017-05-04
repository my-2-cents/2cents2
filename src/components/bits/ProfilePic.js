import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image } from 'react-native';

export class ProfilePic extends React.Component {
  render() {
    return (
      <View>
        <Image
          style= {{ height:80, width: 80, borderRadius: 25 }}
          source={require('../../../assets/icons/profile.png')}
        />
      </View>
    );
  }
}


