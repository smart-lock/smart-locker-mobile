import React from 'react'
import { ScreenWrapper } from '../components/ScreenWrapper';
import { Text } from '../components/Text';
import { basicStackScreenNavigationOptions } from '../resources/styles';

export class SettingsScreen extends React.Component {
  static navigationOptions = basicStackScreenNavigationOptions({
    title: 'Configurações'
  })

  render() {
    return (
      <ScreenWrapper>
        <Text>
          Settings
        </Text>
      </ScreenWrapper>
    )
  }
}