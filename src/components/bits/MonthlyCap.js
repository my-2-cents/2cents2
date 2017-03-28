import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button,
  Image } from 'react-native';

export class MonthlyCap extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     plaidVerification: {}, // bank accounts, address, full name, etc.
  //     cap: 0, // User's monthly cap
  //     currentCharities: [], // User's selected charities
  //     userProfilePic: '', // is this a uri ref? Where is this stored?
  //     percentOfCap: 0, // this will help render the pie chart of monthly giving
  //     notifications: {}, // receive push notifications? Email updates?
  //   }
  // }


  constructor(props) {
    super(props)
    this.state = {
      cap: 15,
    }
  }

  handleIncreaseCap = ()=> {
    let cap = this.state.cap;
    this.setState(prevState => ({
      cap: prevState.cap + 1})
    );
  }

  handleDecreaseCap = ()=> {
    let cap = this.state.cap;
    if (this.state.cap > 0) {
      this.setState(prevState => ({
        cap: prevState.cap - 1})
      );
    }
  }

  render() {
    return (
      <View>

        <Text style={{fontFamily: 'Marker Felt'}}>
          Monthly Cap
        </Text>

        <View style={styles.counter}>
          <View>
            <Text style={{fontFamily: 'Marker Felt', fontSize: 40}}>
              ${this.state.cap}
            </Text>
          </View>
          <View>
            <Button title="Boost It!" color="black" onPress={this.handleIncreaseCap}/>
            <Button title="Decrease It" color="black" onPress={this.handleDecreaseCap}/>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    padding: 20,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(100,149,237, 1)',
    width: '100%',
  }
});
