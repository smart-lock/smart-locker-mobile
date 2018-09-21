import React from 'react'
import { ScreenWrapper } from '../components/ScreenWrapper';
import { basicStackScreenNavigationOptions } from '../resources/styles';
import { LockButton } from '../components/LockButton';

export class LockerDetailScreen extends React.Component {
  static navigationOptions = basicStackScreenNavigationOptions({
    title: 'Armário'
  })
  
  render() {
    return (
      <ScreenWrapper>
        <LockButton
          onPress={() => {}}
          locked
          disabled={false}
        />
      </ScreenWrapper>
    )
  }
}