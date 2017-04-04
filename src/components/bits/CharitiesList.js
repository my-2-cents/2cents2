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
          labelStyle={styles.label}
          containerStyle={styles.pp}
        />
        <Checkbox
          label="UNICEF (2)"
          checked={this.props.unicef}
          containerStyle={styles.unicef}
          onChange={this.props.updateUNICEF}
          labelStyle={styles.label}
        />
        <Checkbox
          label="ACLU (3)"
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
    backgroundColor: '#F44336'
  },
  unicef: {
    backgroundColor: '#2196F3'
  },
  aclu: {
    backgroundColor: '#FFEB3B'
  },
  label: {
    color: 'black'
  }
})
