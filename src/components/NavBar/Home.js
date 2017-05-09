import React from 'react';
import {
 StyleSheet,
 Text,
 TouchableHighlight,
 View,
 Navigator,
 ScrollView,
 Image
} from 'react-native';

import Nav from './Nav.js'

import { Charities } from '../bits/Charities';
import { TodaysDate } from '../bits/TodaysDate';
import { Feed } from '../bits/Feed';
import { UserName } from '../bits/UserName';

export default class Home extends React.Component {

 render() {
   return(
     <View style={styles.container}>
         <View style={styles.headerBar}>
           <Image
            source={require('../../../assets/icons/2centsBall.png')}
            style={styles.iconImage}
           />
          <Text style={styles.welcomeText}>Welcome, {this.props.username}!</Text>
         </View>
         <View style={styles.charities}>
           <Charities />
         </View>
         <ScrollView style={styles.feed}>
           <Feed />
         </ScrollView>
         <View style={styles.box}></View>
       </View>
   )
 }
}

const styles = StyleSheet.create({
 container: {
   backgroundColor: '#eee',
   justifyContent: 'center',
   alignItems: 'center',
 },
 headerBar: {
   padding: 20,
   // flex: 1,
   // flexDirection: 'row',
   // justifyContent: 'space-between',
   backgroundColor: '#eee',
   width: '100%',
   height: 80,
 },
 charities: {
   padding: 20,
   // flex: 1,
   flexDirection: 'row',
   justifyContent: 'space-between',
   backgroundColor: '#eee',
   width: '100%',
   height: 170,
 },
 feed: {
   backgroundColor: '#ddd',
   width: '100%',
   height: 600,
 },
 box: {
  height: 80
 },
 iconImage: {
  height: 70,
  width: 70,
  position: 'absolute',
  margin: 12
 },
 welcomeText: {
  fontSize: 20,
  padding: 12,
  backgroundColor: 'transparent'
 }
});

