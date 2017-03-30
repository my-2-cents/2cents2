import React from 'react';
import Checkbox from 'react-native-checkbox';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Label,
  Input
} from 'react-native';

export default class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      PPchecked: false,
      ACLUchecked: false,
      UNICEFchecked: false,
    };
  }

  render() {
    return (
      <View>
        <Text>
          Slider
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  username: {
    fontSize: 20,
    paddingTop: 10,
    color: '#fafafa'
  }
});
