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

import Nav from './Nav.js';

import { ChangePassword } from '../bits/ChangePassword';
import { MonthlyCap } from '../bits/MonthlyCap';
import { BankInfo } from '../bits/BankInfo';
import { Notifications } from '../bits/Notifications';
import { TodaysDate } from '../bits/TodaysDate';
import { MonoText } from '../bits/StyledText';
import { ProfilePic } from '../bits/ProfilePic';
import { UserName } from '../bits/UserName';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      picked: 'null',
      profileSelected: 'default',
      showButtons: 'showButtons'
    };
  }

  renderAfterLogout() {
    this.props.onLogoutSubmit();
    this.props.testUsername();
    this.props.navigator.push({
      id: 'Splash'
    });
    console.log(this.props.username)
  };

  // Check to see if navigation buttons have been clicked
  renderProfileSelected() {
    if (this.state.profileSelected === 'default') {
      return (
        <View style={styles.headerBar}>
          <ProfilePic />
          <UserName username={this.props.username} />
          <View style={styles.buttonBox}>
            <TouchableHighlight
              onPress={this.handleMonthlyCap.bind(this)}
              style={styles.buttonStyle}
            >
              <Text>
                Monthly Cap
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.handleBankInfo.bind(this)}
              style={styles.buttonStyle}
            >
              <Text>
                Bank Info
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.handleChangePassword.bind(this)}
              style={styles.buttonStyle}
            >
              <Text>
                Change Password
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.handleNotifications.bind(this)}
              style={styles.buttonStyle}
            >
              <Text>
                Notifications
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.renderAfterLogout.bind(this)}
              style={styles.buttonStyle}
            >
              <Text>Logout</Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    } else if (this.state.profileSelected === 'monthlyCap') {
      return (
        <MonthlyCap
          monthlyCap={this.props.monthlyCap}
          goBack={this.goBack.bind(this)}
          onDoneMonthlyCapPress={this.props.onDoneMonthlyCapPress}
          handleIncreaseCap={this.props.handleIncreaseCap}
          handleDecreaseCap={this.props.handleDecreaseCap}
        />
      )
    } else if (this.state.profileSelected === 'bankInfo') {
      return <BankInfo goBack={this.goBack.bind(this)} />;
    } else if (this.state.profileSelected === 'notifications') {
      return <Notifications goBack={this.goBack.bind(this)} />;
    } else if (this.state.profileSelected === 'changePassword') {
      return <ChangePassword goBack={this.goBack.bind(this)} />;
    }
  }

  goBack() {
    this.setState({
      profileSelected: 'default'
    });
  }

  handleChangePassword() {
    this.setState({
      profileSelected: 'changePassword'
    });
  }

  handleMonthlyCap() {
    this.setState({
      profileSelected: 'monthlyCap'
    });
  }

  handleBankInfo() {
    this.setState({
      profileSelected: 'bankInfo'
    });
  }

  handleNotifications() {
    this.setState({
      profileSelected: 'notifications'
    });
  }

  showStyle() {
    console.log(this.state.showButtons);
  }

  showState() {
    console.log(this.state.isNavClicked);
  }

  buttonStyle() {
    return {
      color: 'red'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderProfileSelected()}
        <View style={styles.footerBox} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  headerBar: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: 10
  },
  footerBox: {
    height: 80
  },
  hidden: {
    height: 0
  },
  buttonStyle: {
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 0.5,
    width: '100%',
    height: 40,
    paddingLeft: 20
  },
  buttonBox: {
    marginTop: 80
  }
});
