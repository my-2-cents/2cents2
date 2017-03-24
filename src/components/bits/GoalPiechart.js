import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image } from 'react-native';

export class GoalPiechart extends React.Component {
  render() {
    return (
      <View>
        <Image
          style= {{ height:150, width: 150 }}
          source={{uri: 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-4/256/Pie-chart-icon.png'}}
        />
      </View>
    );
  }
}

