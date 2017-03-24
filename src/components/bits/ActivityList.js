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
      <View>
        <Text>
          Activity:
        </Text>
      <View style={styles.totalBox}>
        <Text style={styles.totalText}>My Monthly Donation:</Text>
        <Text style={styles.totalText}>$ 7.43</Text>

      </View>
      </View>
        <ScrollView>
          <Text>
            -$0.37 3/17/17 Amazon.com
          </Text>
          <Text>
            -$0.63 3/15/17 Rite-Aid- Elizabeth, NJ
          </Text>
          <Text>
            -$0.22 3/15/17 NYCTAXI
          </Text>
          <Text>
            -$0.11 3/14/17 SOHOHouseNYC
          </Text>
          <Text>
            -$0.74 3/14/17 Starbucks- 23rd St. New York, NY
          </Text>
          <Text>
            -$0.02 3/11/17 NYC Transit
          </Text>
          <Text>
            -$0.55 3/10/17 Amazon.com
          </Text>
          <Text>
            -$0.37 3/9/17 NETFLIX
          </Text>
          <Text>
            -$0.37 3/17/17 Amazon.com
          </Text>
          <Text>
            -$0.63 3/15/17 Rite-Aid- Elizabeth, NJ
          </Text>
          <Text>
            -$0.22 3/15/17 NYCTAXI
          </Text>
          <Text>
            -$0.11 3/14/17 SOHOHouseNYC
          </Text>
          <Text>
            -$0.74 3/14/17 Starbucks- 23rd St. New York, NY
          </Text>
          <Text>
            -$0.02 3/11/17 NYC Transit
          </Text>
          <Text>
            -$0.55 3/10/17 Amazon.com
          </Text>
          <Text>
            -$0.37 3/9/17 NETFLIX
          </Text>
          <Text>
            -$0.74 3/14/17 Starbucks- 23rd St. New York, NY
          </Text>
          <Text>
            -$0.02 3/11/17 NYC Transit
          </Text>
          <Text>
            -$0.55 3/10/17 Amazon.com
          </Text>
          <Text>
            -$0.37 3/9/17 NETFLIX
          </Text>
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  totalBox: {
    width: '100%',
    height: 200,
    backgroundColor: 'rgba(100,149,237, 0.2)',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  totalText: {
    fontSize: 36,
    textAlign: 'center',
    color: '#817D7D'
  }
});

