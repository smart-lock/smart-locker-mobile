import React from 'react'
import { ScreenWrapper } from '../components/ScreenWrapper';
import { Text } from '../components/Text';
import { ActivityIndicator } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { RootScreens } from '../navigation/RootNavigator';

export class LoadingScreen extends React.Component<NavigationInjectedProps> {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate(RootScreens.SignIn)
    }, 1500)
  }
  render() {
    return (
      <ScreenWrapper style={{backgroundColor: '#fd9644', alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator color="#FFF" />
      </ScreenWrapper>
    )
  }
}