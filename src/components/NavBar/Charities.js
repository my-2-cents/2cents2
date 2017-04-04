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
      total: 3,
      sliceColor: ['#F44336', '#2196F3', '#FFEB3B']
    };
  }

  updatePP(e) {
    if (this.state.pp === true) {
      this.setState({
        series: this.state.series.slice(1),
        sliceColor: this.state.sliceColor.slice(1)
    }, () =>
        console.log(this.state));
    } else {
      let secSer = this.state.series;
      let secSli = this.state.sliceColor;
      secSer.unshift(1);
      secSli.unshift('#F44336')
      this.setState({
        series: secSer,
        sliceColor: secSli
      }, () =>
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
        let secSli = [this.state.sliceColor[0], this.state.sliceColor[2]];
        this.setState({
          series: secSer,
          sliceColor: secSli
        }, () => console.log(this.state.series));
      } else if (this.state.pp === true) {
        let secSer = this.state.series
        let secSli = this.state.sliceColor
        secSer.pop();
        secSli.pop();
        this.setState({
          series: secSer,
          sliceColor: secSli
        }, () => console.log(this.state.series));
      } else if (!this.state.pp && this.state.aclu === true) {
        let secSer = [this.state.series[1]];
        let secSli = [this.state.sliceColor[1]];
        this.setState({
          series: secSer,
          sliceColor: secSli
        }, () => console.log(this.state.series));
      }
    } else {
      if (this.state.pp === true && this.state.aclu === true) {
        let secSer = [this.state.series[0], 2, this.state.series[1]];
        let secSli = [this.state.sliceColor[0], '#2196F3', this.state.sliceColor[1]];
        this.setState({
          series: secSer,
          sliceColor: secSli
        }, () => console.log(this.state.series));
      } else if (this.state.pp === true) {
        let secSer = this.state.series
        let secSli = this.state.sliceColor
        secSer.push(2);
        secSli.push('#2196F3');
        this.setState({
          series: secSer,
          sliceColor: secSli
        }, () => console.log(this.state.series));
      } else if (!this.state.pp && this.state.aclu === true) {
        let secSer = [2, this.state.series[0]];
        let secSli = ['#2196F3', this.state.sliceColor[0]];
        this.setState({
          series: secSer,
          sliceColor: secSli
        }, () => console.log(this.state.series));
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
        <Graph
          series={this.state.series}
          sliceColor={this.state.sliceColor}
        />
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
