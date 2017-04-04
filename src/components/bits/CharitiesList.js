import React from 'react';
import Checkbox from 'react-native-checkbox';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';

export default class CharitiesList extends React.Component {
  render() {
    return (
      <View>
        <Checkbox
          label="PP (1)"
          checked={this.props.pp}
          onChange={this.props.updatePP}
        />
        <Checkbox
          label="UNICEF (2)"
          checked={this.props.unicef}
          onChange={this.props.updateUNICEF}
        />
        <Checkbox
          label="ACLU (3)"
          checked={this.props.aclu}
          onChange={this.props.updateACLU}
        />
      </View>
    );
  }
}
