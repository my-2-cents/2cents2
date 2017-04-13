import React from 'react';
import {
 StyleSheet,
 Text,
 TouchableHighlight,
 View,
 Navigator,
 ScrollView
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
           <UserName
            username={this.props.username}
           />
           <TodaysDate />
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
   backgroundColor: '#fff',
   justifyContent: 'center',
   alignItems: 'center',
 },
 headerBar: {
   padding: 20,
   // flex: 1,
   flexDirection: 'row',
   justifyContent: 'space-between',
   backgroundColor: '#ddd',
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
   backgroundColor: '#ccc',
   width: '100%',
   height: 600,
 },
 box: {
  height: 80
 }
});

