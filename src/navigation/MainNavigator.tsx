import { createBottomTabNavigator } from 'react-navigation'
import { MyLockersNavigator } from './MyLockersNavigator';
import { ClaimLockerNavigator } from './ClaimLockerNavigator';

export const MainScreens = {
  ClaimLocker: 'Main/ClaimLocker',
  MyLockers: 'Main/MyLockers',
}
export const MainNavigator = createBottomTabNavigator({
  [MainScreens.ClaimLocker]: {
    screen: ClaimLockerNavigator,
  },
  [MainScreens.MyLockers]: {
    screen: MyLockersNavigator,
  }
})