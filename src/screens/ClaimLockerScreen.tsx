import React from 'react'
import { ScreenWrapper } from '../components/ScreenWrapper';
import { Text } from '../components/Text';
import { basicStackScreenNavigationOptions } from '../resources/styles';
import { RNCamera } from 'react-native-camera';

export class ClaimLockerScreen extends React.Component {
  static navigationOptions = basicStackScreenNavigationOptions({
    title: 'Alugar armário'
  })

  render() {
    return (
      <ScreenWrapper>
        <RNCamera
          style={{flex: 1}}
        />
      </ScreenWrapper>
    )
  }
}