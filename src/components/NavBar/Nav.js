import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Navigator,
  Image
} from 'react-native';

import Home from './Home';
import Charities from './Charities';
import Activity from './Activity';
import Profile from './Profile';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Home',
      pp: true,
      unicef: true,
      aclu: true,
      sliceColor: ['#777', '#ccc', '#ddd'],
      sliderOneValue: [33, 66],
      value: 50,
      disabled: false
    };
  }

  componentWillMount() {
    this.setState({
      series: this.props.series,
      monthlyCap: this.props.monthlyCap
    });
  }

  handleIncreaseCap = () => {
    let moreCap = this.state.monthlyCap + 1;
    this.setState({
      monthlyCap: moreCap
    });
  };

  handleDecreaseCap = () => {
    let lessCap = this.state.monthlyCap - 1;
    this.setState({
      monthlyCap: lessCap
    });
  };

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

  onDoneGraphPress() {
    return fetch(
      `https://two-cents-server.herokuapp.com/user/${this.props.user_id}/series`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/JSON',
          authorization: `Bearer ${this.props.token}`
        },
        body: JSON.stringify({
          series: this.state.series
        })
      }
    )
      .then(r => r.json())
      .then(data => {
        this.setState({
          series: data.series,
          selected: 'Home'
        });
      });
  }

  onDoneMonthlyCapPress() {
    return fetch(
      `https://two-cents-server.herokuapp.com/user/${this.props.user_id}/monthlyCap`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/JSON',
          authorization: `Bearer ${this.props.token}`
        },
        body: JSON.stringify({
          monthlyCap: this.state.monthlyCap
        })
      }
    )
      .then(r => r.json())
      .then(data => {
        this.setState({
          monthlyCap: data.monthlycap,
          selected: 'Home'
        });
      });
  }

  updatePP() {
    let bool = this.state.pp;
    if (this.state.pp === true) {
      if (this.state.series.length === 1) {
        return;
      }
      this.setState(
        {
          series: this.props.series.slice(1),
          sliceColor: this.state.sliceColor.slice(1)
        },
        () => {
          let sum = this.props.series.reduce(
            (total, n) => {
              return total + n;
            },
            0
          );
          this.setSliderValue(this.props.series[0] / sum * 100);
        }
      );
    } else {
      let secSer = this.props.series;
      let secSli = this.state.sliceColor;
      let sum = secSer.reduce(
        (total, n) => {
          return total + n;
        },
        0
      );
      secSer.unshift(sum / 3);
      secSli.unshift('#777');
      this.setState(
        {
          series: secSer,
          sliceColor: secSli
        },
        () => {
          let sum = this.props.series.reduce(
            (total, n) => {
              return total + n;
            },
            0
          );
          this.setSliderValue(this.props.series[0] / sum * 100);
        }
      );
    }
    this.setState({
      pp: !bool
    });
  }

  updateUNICEF() {
    if (this.state.unicef === true) {
      if (this.state.series.length === 1) {
        return;
      }
      if (this.state.pp === true && this.state.aclu === true) {
        let secSer = [this.props.series[0], this.props.series[2]];
        let secSli = [this.state.sliceColor[0], this.state.sliceColor[2]];
        this.setState(
          {
            series: secSer,
            sliceColor: secSli
          },
          () => {
            let sum = this.props.series.reduce(
              (total, n) => {
                return total + n;
              },
              0
            );
            this.setSliderValue(this.props.series[0] / sum * 100);
          }
        );
      } else if (this.state.pp === true) {
        let secSer = this.props.series;
        let secSli = this.state.sliceColor;
        secSer.pop();
        secSli.pop();
        this.setState(
          {
            series: secSer,
            sliceColor: secSli
          },
          () => {
            let sum = this.props.series.reduce(
              (total, n) => {
                return total + n;
              },
              0
            );
            this.setSliderValue(this.props.series[0] / sum * 100);
          }
        );
      } else if (!this.state.pp && this.state.aclu === true) {
        let secSer = [this.props.series[1]];
        let secSli = [this.state.sliceColor[1]];
        this.setState(
          {
            series: secSer,
            sliceColor: secSli
          },
          () => {
            let sum = this.props.series.reduce(
              (total, n) => {
                return total + n;
              },
              0
            );
            this.setSliderValue(this.props.series[0] / sum * 100);
          }
        );
      }
    } else {
      if (this.state.pp === true && this.state.aclu === true) {
        let sum = this.props.series.reduce(
          (total, n) => {
            return total + n;
          },
          0
        );
        let secSer = [this.props.series[0], 33, this.props.series[1]];
        let secSli = [
          this.state.sliceColor[0],
          '#ccc',
          this.state.sliceColor[1]
        ];
        this.setState({
          series: secSer,
          sliceColor: secSli
        });
      } else if (this.state.pp === true) {
        let secSer = this.props.series;
        let secSli = this.state.sliceColor;
        let sum = secSer.reduce(
          (total, n) => {
            return total + n;
          },
          0
        );
        secSer.push(sum / 3);
        secSli.push('#777');
        this.setState({
          series: secSer,
          sliceColor: secSli
        });
      } else if (!this.state.pp && this.state.aclu === true) {
        let half = this.props.series[0] / 2;
        let secSer = [half, half];
        let secSli = ['#eee', this.state.sliceColor[0]];
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
    let secSer = this.props.series;
    let secSli = this.state.sliceColor;
    let bool = this.state.aclu;
    if (this.state.aclu === true) {
      if (this.props.series.length === 1) {
        return;
      }
      secSer.pop();
      secSli.pop();
      this.setState(
        {
          series: secSer,
          sliceColor: secSli
        },
        () => {
          let sum = this.props.series.reduce(
            (total, n) => {
              return total + n;
            },
            0
          );
          this.setSliderValue(this.props.series[0] / sum * 100);
        }
      );
    } else {
      let sum = secSer.reduce(
        (total, n) => {
          return total + n;
        },
        0
      );
      secSer.push(sum / secSer.length);
      secSli.push('#ddd');
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
    let serUp = this.props.series;
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
    });
  }

  renderNavContent() {
    if (this.state.selected === 'Home') {
      return <Home username={this.props.username} />;
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
          onDoneGraphPress={this.onDoneGraphPress.bind(this)}
          value={this.state.value}
          setSliderValue={this.setSliderValue.bind(this)}
          user_id={this.props.user_id}
          disabled={true}
        />
      );
    } else if (this.state.selected === 'Activity') {
      return <Activity />;
    } else if (this.state.selected === 'Profile') {
      return (
        <Profile
          username={this.props.username}
          monthlyCap={this.state.monthlyCap}
          onDoneMonthlyCapPress={this.onDoneMonthlyCapPress.bind(this)}
          handleDecreaseCap={this.handleDecreaseCap.bind(this)}
          handleIncreaseCap={this.handleIncreaseCap.bind(this)}
          navigator={this.props.navigator}
        />
      );
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
            style={styles.navBarItem}
          >
            <Image
              source={require('../../../assets/icons/home-01.png')}
              style={styles.boxes}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.onCharitiesPress.bind(this)}
            style={styles.navBarItem}
          >
            <Image
              source={require('../../../assets/icons/charities-01.png')}
              style={styles.boxes}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.onProfilePress.bind(this)}
            style={styles.navBarItem}
          >
            <Image
              source={require('../../../assets/icons/profile-01.png')}
              style={styles.boxes}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.onActivityPress.bind(this)}
            style={styles.navBarItem}
          >
            <Image
              source={require('../../../assets/icons/activity-01.png')}
              style={styles.boxes}
            />
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
  boxes: {
    height: 80,
    width: 80
  }
});
