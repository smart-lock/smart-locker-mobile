import React from 'react'
import { basicStackScreenNavigationOptions } from '../resources/styles';
import { SessionDetailContainer } from '../containers/SessionDetail';
import { NavigationInjectedProps } from 'react-navigation';
import { MyLockersScreens } from '../navigation/MyLockersNavigator';

export class SessionDetailScreen extends React.Component<NavigationInjectedProps> {
  static navigationOptions = basicStackScreenNavigationOptions({
    title: 'Armário'
  })
  
  private navigateToMyLockers = () => {
    this.props.navigation.navigate(MyLockersScreens.MyLockers)
  }
  render() {
    const lockerSessionId = this.props.navigation.getParam('lockerSessionId')
    return (
      <SessionDetailContainer
        navigateToMyLockers={this.navigateToMyLockers}
        lockerSessionId={lockerSessionId}
      />
    )
  }
}