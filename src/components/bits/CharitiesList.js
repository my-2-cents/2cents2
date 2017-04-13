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
          labelStyle={styles.label}
          containerStyle={styles.pp}
        />
        <Checkbox
          label="UNICEF"
          checked={this.props.unicef}
          containerStyle={styles.unicef}
          onChange={this.props.updateUNICEF}
          labelStyle={styles.label}
        />
        <Checkbox
          label="ACLU"
          checked={this.props.aclu}
          containerStyle={styles.aclu}
          labelStyle={styles.label}
          onChange={this.props.updateACLU}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pp: {
    backgroundColor: '#777'
  },
  unicef: {
    backgroundColor: '#ccc'
  },
  aclu: {
    backgroundColor: '#ddd'
  },
  label: {
    color: 'black'
  }
})
