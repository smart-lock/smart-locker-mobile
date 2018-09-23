import React from 'react'
import { ScreenWrapper } from '../components/ScreenWrapper';
import { basicStackScreenNavigationOptions } from '../resources/styles';
import { ClaimLockerContainer } from '../containers/ClaimLocker';
import { MyLockersScreens } from '../navigation/MyLockersNavigator';

export class ClaimLockerScreen extends React.Component {
  static navigationOptions = basicStackScreenNavigationOptions({
    title: 'Alugar armário'
  })

  private navigateToSessionDetail = (lockerSessionId: string) => {
    this.props.navigation.navigate(MyLockersScreens.SessionDetail, {
      lockerSessionId,
    })
  }

  render() {
    return (
      <ScreenWrapper>
        <ClaimLockerContainer navigateToSessionDetail={this.navigateToSessionDetail} />
      </ScreenWrapper>
    )
  }
}