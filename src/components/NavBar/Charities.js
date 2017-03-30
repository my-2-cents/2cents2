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
      series: [1, 1, 1],
      pp: false,
      aclu: false,
      unicef: false,
    };
  }

  updatePP(e) {
    this.setState({
      pp: !this.state.pp
    })
  }

  updateACLU(e) {
    this.setState({
      aclu: !this.state.aclu
    })
  }

  updateUNICEF(e) {
    this.setState({
      unicef: !this.state.unicef
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Graph
          series={this.state.series}
        />
        <Slider
        />
        <CharitiesList
          updatePP={this.updatePP.bind(this)}
          updateACLU={this.updateACLU.bind(this)}
          updateUNICEF={this.updateUNICEF.bind(this)}
          pp={this.state.pp}
          aclu={this.state.aclu}
          unicef={this.state.unicef}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
