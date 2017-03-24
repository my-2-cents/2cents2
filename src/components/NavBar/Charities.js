import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Navigator,
  Image
} from 'react-native';

import Nav from './Nav.js'

export default class Charities extends React.Component {

  render() {
    return(
      <View style={styles.charityBoxContainer}>
          <Image
            style={styles.charityBox}
            source={{uri: 'https://images.duckduckgo.com/iur/?f=1&image_host=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fa%2Faa%2FTiny_Tickers_Logo_Square.png&u=https://upload.wikimedia.org/wikipedia/en/a/aa/Tiny_Tickers_Logo_Square.png'}}
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
          <Image
            style={styles.charityBox}
            source={{uri: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.vancouvercharity.ca%2Fimages%2FGlow-Women-Society-Logo-Square-White-bg2983.png&f=1'}}
          />
          <Image
            style={styles.charityBox}
            source={{uri: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ffiresafetydogs.com%2Fsitebuilder%2Fimages%2Fkeep_kids_fire_safe_foundation_new_logo_square-239x252.jpg&f=1'}}
          />
          <Image
            style={styles.charityBox}
            source={{uri: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.womeninediscovery.org%2Fresources%2FPictures%2Faspca-logo-square.png&f=1'}}
          />
          <Image
            style={styles.charityBox}
            source={{uri: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ftxvalues.org%2Fwp-content%2Fuploads%2F2013%2F10%2Fplanned-parenthood-logo-square.jpg&f=1'}}
          />
          <Image
            style={styles.charityBox}
            source={{uri: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2F800pressrelease.com%2Fwp-content%2Fuploads%2F2013%2F10%2FGreenwater-Technologies-Logo-Square.jpg&f=1'}}
          />
          <Image
            style={styles.charityBox}
            source={{uri: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ftxvalues.org%2Fwp-content%2Fuploads%2F2013%2F10%2Fplanned-parenthood-logo-square.jpg&f=1'}}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  charityBoxContainer: {
    backgroundColor: 'rgba(100,149,237, 0.2)',
    // flex: 1,
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    height: 250,
  },
  charityBox: {
    margin: 5,
    flexWrap: 'wrap',
    marginTop: 40,
    height: 60,
    width: 60,
  }
})
