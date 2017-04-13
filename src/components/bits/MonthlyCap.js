import React from 'react';
import {
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

  render() {
    return (
      <View style={styles.container}>
          <TouchableHighlight onPress={this.props.goBack} style={styles.backArrow}>
            <Text style={styles.arrowText}>
              BACK
            </Text>
          </TouchableHighlight>
        <Text style={styles.capText}>
          Use the buttons below to adjust your monthly donation cap. Your monthly donation will never exceed the amount you specify.
        </Text>

        <View style={styles.counter}>
          <View>
            <Text style={{fontSize: 40}}>
              ${this.state.cap}
            </Text>
          </View>
          <View>
            <Button title="+" color="black" onPress={this.handleIncreaseCap}/>
            <Button title="-" color="black" onPress={this.handleDecreaseCap}/>
          </View>
        </View>
          <TouchableHighlight onPress={this.props.saveCap} style={styles.save}>
            <Text>SAVE</Text>
          </TouchableHighlight>

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
    backgroundColor: '#eee',
    width: '100%',
  },
  save: {
    padding: 20,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#68DEA8',
    borderRadius: 20,
    height: 50,
    width: 200,
    marginTop: 40
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa'
  },
  backArrow: {
    position: 'absolute',
    top: 25,
    left: 25,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#68DEA8',
    height: 30,
    width: 50,
    borderRadius: 20
  },
  arrowText: {
    color: '#fafafa',
    fontSize: 12,
    textAlign: 'center',
    alignSelf: 'center',
  },
  capText: {
    textAlign: 'center',
    width: '80%',
    marginBottom: 40
  }
});
