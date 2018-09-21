import { createStackNavigator } from 'react-navigation'
import { ClaimLockerScreen } from '../screens/ClaimLockerScreen';

export const ClaimLockerScreens = {
  ClaimLocker: 'ClaimLocker/ClaimLocker',
}
export const ClaimLockerNavigator = createStackNavigator({
  [ClaimLockerScreens.ClaimLocker]: {
    screen: ClaimLockerScreen,
  }
})