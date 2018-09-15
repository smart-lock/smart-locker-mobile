import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import HCE from 'react-native-nfc-hce';

export default class App extends Component {
  componentDidMount() {
    console.log('here')
    const { support, enabled } = HCE.supportNFC();
    console.log(support)
    console.log(enabled)

    HCE.listenNFCStatus((enabled) => {
      console.log("NFC enabled: ", enabled)
    });
  };
  
  _onChangeText = text => {
    if (text.length > 0) {
      HCE.setCardContent(text);
    }
  };

  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button
          title="SET TEXT"
          onPress={() => this._onChangeText('teste')}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
