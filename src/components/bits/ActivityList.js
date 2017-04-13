import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image } from 'react-native';

export class ActivityList extends React.Component {
  render() {
    return (

      <View>
        <Text>
          Activity:
        </Text>
      <View style={styles.totalBox}>
        <Text style={styles.totalHeading}>My Donations</Text>
        <Text style={styles.totalParagraph}>Current Monthly Cycle Donations</Text>
        <Text style={styles.totalText}>$ 7.43</Text>

      </View>
        <ScrollView>
          <Text style={styles.item}>
            -$0.37 3/17/17 Amazon.com
          </Text>
          <Text style={styles.item}>
            -$0.63 3/15/17 Rite-Aid- Elizabeth, NJ
          </Text>
          <Text style={styles.item}>
            -$0.22 3/15/17 NYCTAXI
          </Text>
          <Text style={styles.item}>
            -$0.11 3/14/17 SOHOHouseNYC
          </Text>
          <Text style={styles.item}>
            -$0.74 3/14/17 Starbucks- 23rd St. New York, NY
          </Text>
          <Text style={styles.item}>
            -$0.02 3/11/17 NYC Transit
          </Text>
          <Text style={styles.item}>
            -$0.55 3/10/17 Amazon.com
          </Text>
          <Text style={styles.item}>
            -$0.37 3/9/17 NETFLIX
          </Text>
          <Text style={styles.item}>
            -$0.37 3/17/17 Amazon.com
          </Text>
          <Text style={styles.item}>
            -$0.63 3/15/17 Rite-Aid- Elizabeth, NJ
          </Text>
          <Text style={styles.item}>
            -$0.22 3/15/17 NYCTAXI
          </Text>
          <Text style={styles.item}>
            -$0.11 3/14/17 SOHOHouseNYC
          </Text>
          <Text style={styles.item}>
            -$0.74 3/14/17 Starbucks- 23rd St. New York, NY
          </Text>
          <Text style={styles.item}>
            -$0.02 3/11/17 NYC Transit
          </Text>
          <Text style={styles.item}>
            -$0.55 3/10/17 Amazon.com
          </Text>
          <Text style={styles.item}>
            -$0.37 3/9/17 NETFLIX
          </Text>
          <Text style={styles.item}>
            -$0.74 3/14/17 Starbucks- 23rd St. New York, NY
          </Text>
          <Text style={styles.item}>
            -$0.02 3/11/17 NYC Transit
          </Text>
          <Text style={styles.item}>
            -$0.55 3/10/17 Amazon.com
          </Text>
          <Text style={styles.item}>
            -$0.02 3/11/17 NYC Transit
          </Text>
          <Text style={styles.item}>
            -$0.55 3/10/17 Amazon.com
          </Text>
        </ScrollView>
      <View style={styles.box}></View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  totalBox: {
    width: '100%',
    height: 160,
    backgroundColor: '#eee',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  totalHeading: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700'
  },
  totalParagraph: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 12
  },
  totalText: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  item: {
    width: '100%',
    height: 35,
    padding: 10,
    borderColor: '#eee',
    borderWidth: 0.5
  },
  box: {
    height: 80
  }
});

