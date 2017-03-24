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
              source={{uri: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.eldoradofurniture.com%2Fimages%2Fwebsites%2Fwww.eldoradofurniture.com%2Fcontent%2Fpage%2Fpage-community-logo-american-red-cross.png&f=1'}}
            />
            <Image
              style={styles.charityBox}
              source={{uri: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ftxvalues.org%2Fwp-content%2Fuploads%2F2013%2F10%2Fplanned-parenthood-logo-square.jpg&f=1'}}
            />
            <Image
              style={styles.charityBox}
              source={{uri: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.glassdoor.com%2Fsqll%2F20417%2Fkentucky-farm-bureau-insurance-squarelogo.png&f=1'}}
            />
            <Image
              style={styles.charityBox}
              source={{uri: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.eldoradofurniture.com%2Fimages%2Fwebsites%2Fwww.eldoradofurniture.com%2Fcontent%2Fpage%2Fpage-community-logo-american-red-cross.png&f=1'}}
            />
            <Image
              style={styles.charityBox}
              source={{uri: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ftxvalues.org%2Fwp-content%2Fuploads%2F2013%2F10%2Fplanned-parenthood-logo-square.jpg&f=1'}}
            />
            <Image
              style={styles.charityBox}
              source={{uri: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.glassdoor.com%2Fsqll%2F20417%2Fkentucky-farm-bureau-insurance-squarelogo.png&f=1'}}
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
