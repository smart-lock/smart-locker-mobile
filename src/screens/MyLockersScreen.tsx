import React from 'react'
import { ScreenWrapper } from '../components/ScreenWrapper';
import { basicStackScreenNavigationOptions } from '../resources/styles';
import { LockerGrid } from '../components/LockerGrid';
import { NavigationInjectedProps } from 'react-navigation';
import { MyLockersScreens } from '../navigation/MyLockersNavigator';

export class MyLockersScreen extends React.Component<NavigationInjectedProps> {
  static navigationOptions = basicStackScreenNavigationOptions({
    title: 'Meus armários'
  })
  
  private handlePressLocker = (lockerId: string) => {
    this.props.navigation.navigate(MyLockersScreens.LockerDetail)
  }
  render() {
    return (
      <ScreenWrapper>
        <LockerGrid
          lockers={[]}
          onPressLocker={this.handlePressLocker}
        />
      </ScreenWrapper>
    )
  }
}