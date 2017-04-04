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
      series: [1, 2, 3],
      pp: true,
      unicef: true,
      aclu: true,
      total: 3
    };
  }

  updatePP(e) {
    if (this.state.pp === true) {
      this.setState({ series: this.state.series.slice(1) }, () =>
        console.log(this.state));
    } else {
      let secSer = this.state.series;
      secSer.unshift(1);
      this.setState({ series: secSer }, () =>
        console.log(this.state));
    }
    let bool = this.state.pp;
    this.setState({
      pp: !bool
    });
  }

  updateUNICEF(e) {
    if (this.state.unicef === true) {
      if (this.state.pp === true && this.state.aclu === true) {
        let secSer = [this.state.series[0], this.state.series[2]];
        this.setState({ series: secSer }, () => console.log(this.state.series));
      } else if (this.state.pp === true) {
        let secSer = this.state.series.pop();
        this.setState({ series: secSer }, () => console.log(this.state.series));
      } else if (!this.state.pp && this.state.aclu === true) {
        let secSer = [this.state.series[1]];
        console.log('here', secSer);
        this.setState({ series: secSer }, () => console.log(this.state.series));
      }
    } else {
      if (this.state.pp === true && this.state.aclu === true) {
        let secSer = [this.state.series[0], 2, this.state.series[1]];
        this.setState({ series: secSer }, () => console.log(this.state.series));
      } else if (this.state.pp === true) {
        let secSer = this.state.series.push(2);
        this.setState({ series: secSer }, () => console.log(this.state.series));
      } else if (!this.state.pp && this.state.aclu === true) {
        let secSer = [2, this.state.series[0]];
        this.setState({ series: secSer }, () => console.log(this.state.series));
      }
    }
    let bool = this.state.unicef;
    this.setState({
      unicef: !bool
    });
  }

  updateACLU(e) {
    if (this.state.aclu === true) {
      let secSer = this.state.series
      secSer.pop()
      this.setState({series: secSer})
    } else {
      let secSer = this.state.series
      secSer.push(3)
      this.setState({series: secSer})
    }
    let bool = this.state.aclu;
    this.setState({
      aclu: !bool
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Graph series={this.state.series} />
        <Slider />
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
