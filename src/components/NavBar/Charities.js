import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Nav from './Nav.js';
import Graph from '../bits/Graph.js';
import Fiddler from '../bits/Fiddler.js';
import CharitiesList from '../bits/CharitiesList.js';

export default class Charities extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Graph
          series={this.props.series}
          sliceColor={this.props.sliceColor}
        />
        <Fiddler
          sliderOneValue={this.props.sliderOneValue}
          adjustPercentage={this.props.adjustPercentage}
          series={this.props.series}
        />
        <CharitiesList
          updatePP={this.props.updatePP}
          updateACLU={this.props.updateACLU}
          updateUNICEF={this.props.updateUNICEF}
          pp={this.props.pp}
          aclu={this.props.aclu}
          unicef={this.props.unicef}
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
  }
});
