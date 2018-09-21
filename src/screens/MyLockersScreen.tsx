import React from 'react'
import { ScreenWrapper } from '../components/ScreenWrapper';
import { basicStackScreenNavigationOptions } from '../resources/styles';
import { LockerGrid } from '../components/LockerGrid';

export class MyLockersScreen extends React.Component {
  static navigationOptions = basicStackScreenNavigationOptions({
    title: 'Meus armários'
  })
  
  render() {
    return (
      <ScreenWrapper>
        <LockerGrid lockers={[]} />
      </ScreenWrapper>
    )
  }
}