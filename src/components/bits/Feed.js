import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Linking,
  Image } from 'react-native';


export class Feed extends React.Component {
  render() {
    return (
      <ScrollView style={styles.feedBox}>
      <View style={styles.article}>
        <Text
          style={styles.links}
          onPress={() => Linking.openURL('http://www.redcross.org/')}>
          American Red Cross | Help Those Affected by Di...
        </Text>
        <Text>
          Every 8 minutes the American Red Cross responds to an emergency. Support the Red Cross. Join us to...
        </Text>
      </View>
      <View style={styles.article}>
        <Text
          style={styles.links}
          onPress={() => Linking.openURL('https://www.plannedparenthood.org/')}>
          Texas cannot exclude Planned Parenthood...
        </Text>
        <Text>
          A federal judge on Monday temporarily blocked a new Texas rule that would have excluded...
        </Text>
      </View>
      <View style={styles.article}>
        <Text
          style={styles.links}
          onPress={() => Linking.openURL('https://www.kyfb.com/')}>
          KFB 2017 CONGRESSIONAL TOUR: AN ANNUAL...
        </Text>
        <Text>
          Each year, Kentucky Farm Bureau (KFB) members make their way to Washington, D.C. to meet...
        </Text>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  links: {
    color: 'rgb(100,149,237)',
    fontWeight: '700',
    textDecorationLine: "underline",
  },

  article: {
    margin: 5,
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});



