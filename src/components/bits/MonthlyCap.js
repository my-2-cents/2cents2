import React from 'react';
import {
  Navigator,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight,
  Image } from 'react-native';

export class MonthlyCap extends React.Component {

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
    this.setState ({
      cap: cap +1
    });
  }

  handleDecreaseCap = ()=> {
    let cap = this.state.cap;
    if (this.state.cap > 0) {
      this.setState(prevState => ({
        cap: prevState.cap - 1})
      );
      this.setState ({
        cap: cap -1
      });
    }
  }

  saveCap = () => {
    let cap = this.state.cap;
    // some code
    this.props.navigator.push({
    id: 'Monthly Cap'
    });
  }

  render() {
    return (
      <View>
          <TouchableHighlight onPress={this.props.goBack}>
            <Text>
              go back!
            </Text>
          </TouchableHighlight>
        <Text>
          Monthly Cap
        </Text>

        <View style={styles.counter}>
          <View>
            <Text style={{fontSize: 40}}>
              ${this.state.cap}
            </Text>
          </View>
          <View>
            <Button title="Boost It!" color="black" onPress={this.handleIncreaseCap}/>
            <Button title="Decrease It" color="black" onPress={this.handleDecreaseCap}/>
          </View>
          <TouchableHighlight onPress={this.saveCap} style={styles.save}>
            <Text>Save New Cap</Text>
          </TouchableHighlight>
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
  },
  save: {
    padding: 20,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(100,34,86, 1)',
  },

});
