import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight,
  Image
} from 'react-native';

export class MonthlyCap extends React.Component {
  constructor(props) {
    super(props);
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
            <Text style={{ fontSize: 40 }}>
              {this.props.monthlyCap}
            </Text>
          </View>
          <View>
            <TouchableHighlight onPress={this.props.handleIncreaseCap}>
              <Text>Boost It!</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.props.handleDecreaseCap}>
              <Text>Decrease It!</Text>
            </TouchableHighlight>
          </View>
          <TouchableHighlight onPress={this.props.onDoneMonthlyCapPress} style={styles.save}>
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
    width: '100%'
  },
  save: {
    padding: 20,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(100,34,86, 1)'
  }
});
