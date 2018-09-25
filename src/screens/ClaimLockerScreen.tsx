import React from 'react'
import { ScreenWrapper } from '../components/ScreenWrapper';
import { basicStackScreenNavigationOptions } from '../resources/styles';
import { ClaimLockerContainer } from '../containers/ClaimLocker';
import { MyLockersScreens } from '../navigation/MyLockersNavigator';
import { NavigationInjectedProps, NavigationEvents } from 'react-navigation';

export class ClaimLockerScreen extends React.Component<NavigationInjectedProps> {
  static navigationOptions = basicStackScreenNavigationOptions({
    title: 'Alugar armário'
  })

  private navigateToSessionDetail = (lockerSessionId: string) => {
    this.props.navigation.navigate(MyLockersScreens.SessionDetail, {
      lockerSessionId,
    })
  }

  public state = {
    focused: false,
  }

  private handleFocus = () => {
    this.setState({
      focused: true,
    })
  }
  private handleBlur= () => {
    this.setState({
      focused: false
    })
  }
  render() {
    return (
      <ScreenWrapper>
        <NavigationEvents
          onDidFocus={this.handleFocus}
          onDidBlur={this.handleBlur}
        />
        <ClaimLockerContainer
          navigateToSessionDetail={this.navigateToSessionDetail}
          focused={this.state.focused}
        />
      </ScreenWrapper>
    )
  }
}