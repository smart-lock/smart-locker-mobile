import React from 'react'
import { basicStackScreenNavigationOptions } from '../resources/styles';
import { SessionDetailContainer } from '../containers/SessionDetail';
import { NavigationInjectedProps } from 'react-navigation';

export class SessionDetailScreen extends React.Component<NavigationInjectedProps> {
  static navigationOptions = basicStackScreenNavigationOptions({
    title: 'Armário'
  })
  
  render() {
    const lockerSessionId = this.props.navigation.getParam('lockerSessionId')
    return (
      <SessionDetailContainer
        lockerSessionId={lockerSessionId}
      />
    )
  }
}