import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image } from 'react-native';

export class Charities extends React.Component {
  render() {
    return (




      <View>
      <Text>My Charities:</Text>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          horizontal={true}
        >
          <View style={styles.charityBoxContainer}>
            <Image
              style={styles.charityBox}
              source={require('../../../assets/icons/redcross.jpg')}
            />
            <Image
              style={styles.charityBox}
              source={require('../../../assets/icons/pp.jpg')}
            />
            <Image
              style={styles.charityBox}
              source={require('../../../assets/icons/aclu.jpg')}
            />
            <Image
              style={styles.charityBox}
              source={require('../../../assets/icons/unicef.jpg')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  charityBoxContainer: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  charityBox: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 90,
    width: 90,
  }
});
