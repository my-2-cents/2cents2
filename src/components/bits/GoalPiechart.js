import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image } from 'react-native';
  import PieChart from 'react-native-pie-chart';

export class GoalPiechart extends React.Component {
  render() {
    const chart_wh = 250
    const series = [123, 321, 123 ]
    const sliceColor = ['#F44336','#2196F3','#FFEB3B']

    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.title}>Contribution Breakdown</Text>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 10
  }
});
