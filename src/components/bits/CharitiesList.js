import React from 'react';
import Checkbox from 'react-native-checkbox';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';

export default class CharitiesList extends React.Component {
  render() {
    return (
      <View>
        <Checkbox
          label="PP"
          checked={this.props.pp}
          onChange={this.props.updatePP}
        />
        <Checkbox
          label="ACLU"
          checked={this.props.aclu}
          onChange={this.props.updateACLU}
        />
        <Checkbox
          label="UNICEF"
          checked={this.props.unicef}
          onChange={this.props.updateUNICEF}
        />
      </View>
    );
  }
}
