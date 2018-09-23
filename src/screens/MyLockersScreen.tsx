import React from 'react'
import { ScreenWrapper } from '../components/ScreenWrapper';
import { basicStackScreenNavigationOptions } from '../resources/styles';
import { NavigationInjectedProps } from 'react-navigation';
import { MyLockersScreens } from '../navigation/MyLockersNavigator';
import { MyLockersContainer } from '../containers/MyLockers';

export class MyLockersScreen extends React.Component<NavigationInjectedProps> {
  static navigationOptions = basicStackScreenNavigationOptions({
    title: 'Meus armários'
  })
  
  private navigateToSessionDetail = (lockerSessionId: string) => {
    this.props.navigation.navigate(MyLockersScreens.SessionDetail, {
      lockerSessionId,
    })
  }
  render() {
    return (
      <ScreenWrapper>
        <MyLockersContainer
          navigateToSessionDetail={this.navigateToSessionDetail}
        />
      </ScreenWrapper>
    )
  }
}