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
<<<<<<< HEAD
    this.setState(prevState => ({
      cap: prevState.cap + 1})
    );
=======
    this.setState ({
      cap: cap +1
    });
>>>>>>> 35b3425d07680e8d3740efcd0c3b2c3a3c35664a
  }

  handleDecreaseCap = ()=> {
    let cap = this.state.cap;
    if (this.state.cap > 0) {
<<<<<<< HEAD
      this.setState(prevState => ({
        cap: prevState.cap - 1})
      );
=======
      this.setState ({
        cap: cap -1
      });
>>>>>>> 35b3425d07680e8d3740efcd0c3b2c3a3c35664a
    }
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
