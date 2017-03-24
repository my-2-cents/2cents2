import React from 'react';
import {
  Navigator,
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Nav from './Nav.js'

import { MonthlyCap } from '../bits/MonthlyCap';
import { TodaysDate } from '../bits/TodaysDate';
import { MonoText } from '../bits/StyledText';
import { ProfilePic } from '../bits/ProfilePic';
import { UserName } from '../bits/UserName';

export default class Profile extends React.Component {

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.headerBar}>
          <UserName />
          <TodaysDate />
        </View>
        <View style={styles.piechart}>
        <ProfilePic />
        </View>
        <View style={styles.charities}>
          <MonthlyCap />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBar: {
    padding: 20,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(100,149,237, 1)',
    width: '100%',
    height: 80,
  },
  piechart: {
    padding: 20,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: 200,
  },
  charities: {
    padding: 20,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(100,149,237, 0.3)',
    width: '100%',
    height: 170,
  },
  feed: {
    backgroundColor: 'rgba(100,149,237, 0.2)',
    width: '100%',
  }
})
