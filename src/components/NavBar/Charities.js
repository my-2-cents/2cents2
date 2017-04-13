import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import Nav from './Nav.js';
import Graph from '../bits/Graph.js';
import Fiddler from '../bits/Fiddler.js';
import CharitiesList from '../bits/CharitiesList.js';

export default class Charities extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.onDonePress} style={styles.check}>
          <Text>done!</Text>
        </TouchableHighlight>
        <Graph
          series={this.props.series}
          sliceColor={this.props.sliceColor}
          user_id={this.props.user_id}
        />
        <Fiddler
          sliderOneValue={this.props.sliderOneValue}
          adjustThirds={this.props.adjustThirds}
          adjustHalves={this.props.adjustHalves}
          series={this.props.series}
          sliceColor={this.props.sliceColor}
          value={this.props.value}
        />
        <CharitiesList
          updatePP={this.props.updatePP}
          updateACLU={this.props.updateACLU}
          updateUNICEF={this.props.updateUNICEF}
          pp={this.props.pp}
          aclu={this.props.aclu}
          unicef={this.props.unicef}
          token={this.props.token}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: '15%',
    paddingBottom: '30%',
  },
  check: {
    position: 'absolute',
    right: 0,
  }
});
