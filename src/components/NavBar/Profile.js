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
  TouchableHighlight,
  View,
  Button
} from 'react-native';

import Nav from './Nav.js'

import { ChangePassword } from '../bits/ChangePassword';
import { MonthlyCap } from '../bits/MonthlyCap';
import { BankInfo } from '../bits/BankInfo';
import { Notifications} from '../bits/Notifications';
import { TodaysDate } from '../bits/TodaysDate';
import { MonoText } from '../bits/StyledText';
import { ProfilePic } from '../bits/ProfilePic';
import { UserName } from '../bits/UserName';
import { NavButtons } from '../bits/NavButtons';


export default class Profile extends React.Component {
  constructor() {
    super();
      this.state = {
        picked: 'null',
        isNavClicked: false,
        showButtons: 'showButtons'
        }
    };

  // Check to see if navigation buttons have been clicked
  navClicked(isNavClicked) {
    if (!isNavClicked) {
      return (
        <View style={styles.headerBar}>
          <ProfilePic />
          <UserName />
          <NavButtons />
        </View>
    )}
  }

  handleChangePassword() {
    this.setState({
      isNavClicked: true,
    });
    console.log(()=> {this.state.isNavClicked});
    return (
      <ChangePassword />
      )
  }

  handleMonthlyCap() {
    this.setState({
      isNavClicked: true,
    });
    console.log(()=> {this.state.isNavClicked});
    return (
      <MonthlyCap />
      )
  }

  handleBankInfo() {
    this.setState({
      isNavClicked: true,
    });
    console.log(()=> {this.state.isNavClicked});
    return (
      <BankInfo />
      )
  }

  handleNotifications() {
    this.setState({
      isNavClicked: true,
    });
    return (
      <Notifications />
      )
  }

  showStyle() {
    console.log(this.state.showButtons);
  }

  showState() {
    console.log(this.state.isNavClicked);
  }

  buttonStyle() {
    return({
      color: 'red'
    })
  }

  render() {
    return(
        <View style={styles.container}>
            {this.navClicked(this.state.isNavClicked)}
            {this.showStyle()}
            {this.showState()}
        <View style={styles.footerBox}></View>
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: 'rgba(100,149,237, 1)',
    backgroundColor: '#fff',
    width: '100%',
    height: 10,
  },
  showButtons: {
    color: 'red',
    backgroundColor: 'gray',
    width: '100%',
    fontSize: 54
  },
  footerBox: {
    height: 80,
  },
  box: {
    height: 400,
    backgroundColor: '#fafafa',
  }

})
