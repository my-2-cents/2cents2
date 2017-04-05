import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default class Graph extends React.Component {
  render() {
    return (
      <View>
        <PieChart
          chart_wh={250}
          series={this.props.series}
          sliceColor={this.props.sliceColor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});
