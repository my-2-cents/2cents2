import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image } from 'react-native';

export class TodaysDate extends React.Component {
  render() {
    return (
      <View style={styles.outerDate}>
        <Text style={styles.innderDate}>
          Wednesday
        </Text>
        <Text style={styles.innderDate}>
          3/22/2017
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerDate: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  innderDate: {
    justifyContent: 'center',
    color: '#fafafa'
  }
});
