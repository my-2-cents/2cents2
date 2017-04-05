import React from 'react';
import MultiSlider from 'react-native-multi-slider';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Label,
  Input
} from 'react-native';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PPchecked: false,
      ACLUchecked: false,
      UNICEFchecked: false,
      sliderOneChanging: false,
      sliderOneValue: [33, 66]
    };
  }

  render() {
    return (
      <View>
        <MultiSlider
          values={this.state.sliderOneValue}
          sliderLength={280}
          min={1}
          max={100}
          onValuesChange={this.props.adjustPercentage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  username: {
    fontSize: 20,
    paddingTop: 10,
    color: '#fafafa'
  }
});
