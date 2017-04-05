import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Nav from './Nav.js';
import Graph from '../bits/Graph.js';
import Slider from '../bits/Slider.js';
import CharitiesList from '../bits/CharitiesList.js';

export default class Charities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [33, 33, 33],
      total: 3,
    };
  }




  render() {
    return (
      <View style={styles.container}>
        <Graph
          series={this.props.series}
          sliceColor={this.props.sliceColor}
        />
        <Slider
          adjustPercentage={this.props.adjustPercentage}
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
