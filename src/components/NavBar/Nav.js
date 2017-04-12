import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Navigator
} from 'react-native';

import Home from './Home';
import Charities from './Charities';
import Activity from './Activity';
import Profile from './Profile';


export default class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 'Charities',
      series: [33, 33, 33],
      pp: true,
      unicef: true,
      aclu: true,
      sliceColor: ['#F44336', '#2196F3', '#FFEB3B'],
      sliderOneValue: [33, 66],
      value: 50,
      disabled: false
    };
  }

  onHomePress() {
    this.setState({
      selected: 'Home'
    });
  }

  onCharitiesPress() {
    this.setState({
      selected: 'Charities'
    });
  }

  onActivityPress() {
    this.setState({
      selected: 'Activity'
    });
  }

  onProfilePress() {
    this.setState({
      selected: 'Profile'
    });
  }

  updatePP() {
    let bool = this.state.pp;
    if (this.state.pp === true) {
      if (this.state.series.length === 1) {
        return;
      }
      this.setState({
        series: this.state.series.slice(1),
        sliceColor: this.state.sliceColor.slice(1)
      }, () => {
        let sum = this.state.series.reduce((total, n) => {return total + n}, 0);
        this.setSliderValue((this.state.series[0]/sum) * 100)
      });
    } else {
      let secSer = this.state.series;
      let secSli = this.state.sliceColor;
      let sum = secSer.reduce((total, n) => {return total + n}, 0)
      secSer.unshift(sum/3);
      secSli.unshift('#F44336');
      this.setState({
        series: secSer,
        sliceColor: secSli,
      }, () => {
        let sum = this.state.series.reduce((total, n) => {return total + n}, 0);
        this.setSliderValue((this.state.series[0]/sum) * 100)
      });
    }
    this.setState({
      pp: !bool
    });
  }

  updateUNICEF() {
    if (this.state.unicef === true) {
      if (this.state.series.length === 1) {
        let disBool = this.state.disabled
        this.setState({
          disabled: !disBool
        })
        return;
      }
      if (this.state.pp === true && this.state.aclu === true) {
        let secSer = [this.state.series[0], this.state.series[2]];
        let secSli = [this.state.sliceColor[0], this.state.sliceColor[2]];
        let disBool = this.state.disabled
        this.setState({
          series: secSer,
          sliceColor: secSli,
          disabled: !disBool
        }, () => {
          let sum = this.state.series.reduce((total, n) => {return total + n}, 0);
          console.log(this.state.series[0], sum)
          this.setSliderValue((this.state.series[0]/sum) * 100)
        });
      } else if (this.state.pp === true) {
        let secSer = this.state.series;
        let secSli = this.state.sliceColor;
        secSer.pop();
        secSli.pop();
        let disBool = this.state.disabled
        this.setState({
          series: secSer,
          sliceColor: secSli,
          disabled: !disBool
        }, () => {
          let sum = this.state.series.reduce((total, n) => {return total + n}, 0);
          console.log(this.state.series[0], sum)
          this.setSliderValue((this.state.series[0]/sum) * 100)
        });
      } else if (!this.state.pp && this.state.aclu === true) {
        let secSer = [this.state.series[1]];
        let secSli = [this.state.sliceColor[1]];
        this.setState({
          series: secSer,
          sliceColor: secSli
        }, () => {
          let sum = this.state.series.reduce((total, n) => {return total + n}, 0);
          console.log(this.state.series[0], sum)
          this.setSliderValue((this.state.series[0]/sum) * 100)
        });
      }
    } else {
      if (this.state.pp === true && this.state.aclu === true) {
        let sum = this.state.series.reduce((total, n) => {return total + n}, 0)
        let secSer = [
          this.state.series[0],
          33,
          this.state.series[1]
        ];
        console.log(secSer)
        let secSli = [
          this.state.sliceColor[0],
          '#2196F3',
          this.state.sliceColor[1]
        ];
        this.setState({
          series: secSer,
          sliceColor: secSli
        });
      } else if (this.state.pp === true) {
        let secSer = this.state.series;
        let secSli = this.state.sliceColor;
        let sum = secSer.reduce((total, n) => {return total + n}, 0)
        secSer.push(sum/3);
        secSli.push('#2196F3');
        this.setState({
          series: secSer,
          sliceColor: secSli
        });
      } else if (!this.state.pp && this.state.aclu === true) {
        let half = this.state.series[0]/2
        let secSer = [half, half];
        let secSli = ['#2196F3', this.state.sliceColor[0]];
        this.setState({
          series: secSer,
          sliceColor: secSli
        });
      }
    }
    let bool = this.state.unicef;
    this.setState({
      unicef: !bool
    });
  }

  updateACLU() {
    let secSer = this.state.series;
    let secSli = this.state.sliceColor;
    let bool = this.state.aclu;
    if (this.state.aclu === true) {
      if (this.state.series.length === 1) {
        return;
      }
      secSer.pop();
      secSli.pop();
      this.setState({
        series: secSer,
        sliceColor: secSli
      }, () => {
        let sum = this.state.series.reduce((total, n) => {return total + n}, 0);
        console.log(this.state.series[0], sum)
        this.setSliderValue((this.state.series[0]/sum) * 100)
      });
    } else {
      let sum = secSer.reduce((total, n) => {return total + n}, 0)
      secSer.push(sum/secSer.length);
      secSli.push('#FFEB3B');
      this.setState({
        series: secSer,
        sliceColor: secSli
      });
    }
    this.setState({
      aclu: !bool
    });
  }

  adjustThirds(arr) {
    let serUp = this.state.series;
    this.setState({
      series: [arr[0], arr[1] - arr[0], 99 - arr[1]]
    });
  }

  adjustHalves(n) {
    this.setState({
      series: [n, 99 - n]
    });
  }

  setSliderValue(n) {
    this.setState({
      value: n
    })
  }

  renderNavContent() {
    if (this.state.selected === 'Home') {
      return <Home />;
    } else if (this.state.selected === 'Charities') {
      return (
        <Charities
          updatePP={this.updatePP.bind(this)}
          updateACLU={this.updateACLU.bind(this)}
          updateUNICEF={this.updateUNICEF.bind(this)}
          pp={this.state.pp}
          aclu={this.state.aclu}
          unicef={this.state.unicef}
          sliceColor={this.state.sliceColor}
          series={this.state.series}
          adjustThirds={this.adjustThirds.bind(this)}
          adjustHalves={this.adjustHalves.bind(this)}
          sliderOneValue={this.state.sliderOneValue}
          onHomePress={this.onHomePress.bind(this)}
          value={this.state.value}
          setSliderValue={this.setSliderValue.bind(this)}
        />
      );
    } else if (this.state.selected === 'Activity') {
      return <Activity />;
    } else if (this.state.selected === 'Profile') {
      return <Profile />;
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View>
          {this.renderNavContent()}
        </View>
        <View style={styles.navBar}>
          <TouchableHighlight
            onPress={this.onHomePress.bind(this)}
            style={[styles.navBarItem, styles.one]}
          >
            <Text>home</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.onCharitiesPress.bind(this)}
            style={[styles.navBarItem, styles.two]}
          >
            <Text>charities</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.onProfilePress.bind(this)}
            style={[styles.navBarItem, styles.three]}
          >
            <Text>profile</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.onActivityPress.bind(this)}
            style={[styles.navBarItem, styles.four]}
          >
            <Text>activity</Text>
          </TouchableHighlight>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa'
  },
  navBar: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    height: 80,
    width: '100%',
    bottom: 0
  },
  navBarItem: {
    width: '25%'
  },
  one: {
    backgroundColor: 'green'
  },
  two: {
    backgroundColor: 'yellow'
  },
  three: {
    backgroundColor: 'blue'
  },
  four: {
    backgroundColor: 'purple'
  }
});
