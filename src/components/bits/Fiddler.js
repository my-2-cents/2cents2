import React from 'react';
import MultiSlider from 'react-native-multi-slider';
import Slider from 'react-native-slider';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Label,
  Input
} from 'react-native';

export default class Fiddler extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 0.2
    }
  }


  renderSlider() {
    if (this.props.series.length === 3) {
      return(
        <View>
          <MultiSlider
            values={this.props.sliderOneValue}
            sliderLength={280}
            min={1}
            max={100}
            onValuesChange={this.props.adjustPercentage}
          />
        </View>
      )
    } else {
      return(
        <View>
          <Slider
            style={styles.slider}
            trackStyle={styles.trackStyle}
            thumbStyle={styles.thumbStyle}
            minimumValue={1}
            maximumValue={99}
            value={50}
          />
        </View>
      )
    }
  }

  render() {
    return (
      <View>
        {this.renderSlider()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slider: {
    width: 280,
  },
  trackStyle: {
    height: 8,
    borderRadius: 7
  },
  thumbStyle: {
    top: 23,
    height:30,
    width: 30,
    borderRadius: 15,
    backgroundColor:'#E8E8E8',
    borderWidth: 0.5,
    borderColor: 'grey'
  }
});
