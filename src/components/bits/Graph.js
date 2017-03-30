import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default class Graph extends React.Component {
  render() {
    const chart_wh = 250;
    // const series = {this.props.series};
    const sliceColor = ['#F44336', '#2196F3', '#FFEB3B'];

    return (
      <View>
        <PieChart chart_wh={chart_wh} series={this.props.series} sliceColor={sliceColor} />
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
