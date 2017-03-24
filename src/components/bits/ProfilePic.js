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
          style= {{ height:150, width: 150, borderRadius: 75 }}
          source={{uri: 'http://www.lucasfan.com/raidersofthelostark/indy.jpg'}}
        />
      </View>
    );
  }
}


