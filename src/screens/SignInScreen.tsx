import React from 'react'
import { ScreenWrapper } from '../components/ScreenWrapper';
import { Colors } from '../resources/colors';
import { LoginForm, ILoginFormValues } from '../components/LoginForm';
import { NavigationInjectedProps } from 'react-navigation';
import { RootScreens } from '../navigation/RootNavigator';

export class SignInScreen extends React.Component<NavigationInjectedProps> {
  private handleSubmit = async (values: ILoginFormValues) => {
    this.props.navigation.navigate(RootScreens.Main)
  }
  render() {
    return (
      <ScreenWrapper style={{backgroundColor: Colors.WHITE}}>
        <LoginForm onSubmit={this.handleSubmit}/>
      </ScreenWrapper>
    )
  }
}