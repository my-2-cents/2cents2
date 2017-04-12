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
          style= {{ height:50, width: 50, borderRadius: 25 }}
          source={{uri: 'http://www.lucasfan.com/raidersofthelostark/indy.jpg'}}
        />
      </View>
    );
  }
}


