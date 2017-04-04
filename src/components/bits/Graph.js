import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default class Graph extends React.Component {
  render() {
    const chart_wh = 250;

    return (
      <View>
        <PieChart
          chart_wh={chart_wh}
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
