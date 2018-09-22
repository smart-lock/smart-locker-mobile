import React from 'react'
import { ScreenWrapper } from '../components/ScreenWrapper';
import { Text } from '../components/Text';
import { basicStackScreenNavigationOptions } from '../resources/styles';
import AwesomeButton from 'react-native-really-awesome-button'
import { NavigationInjectedProps } from 'react-navigation';
import { RootScreens } from '../navigation/RootNavigator';

export class SettingsScreen extends React.Component<NavigationInjectedProps> {
  static navigationOptions = basicStackScreenNavigationOptions({
    title: 'Configurações'
  })

  private handlePress = () => {
    this.props.navigation.navigate(RootScreens.SignIn)
  }
  render() {
    return (
      <ScreenWrapper>
        <AwesomeButton
          onPress={this.handlePress}
          style={{marginTop: 20, alignSelf: 'center'}}
          backgroundColor='#fc5c65'
          backgroundDarker="#eb3b5a">
          <Text style={{fontWeight: '400', color: '#fff', fontSize: 20}}>SAIR</Text>
        </AwesomeButton>
      </ScreenWrapper>
    )
  }
}