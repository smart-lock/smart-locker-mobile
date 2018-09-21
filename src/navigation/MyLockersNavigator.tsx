import { createStackNavigator } from 'react-navigation'
import { ClaimLockerScreen } from '../screens/ClaimLockerScreen';

export const MyLockersScreens = {
  MyLockers: 'MyLockers/MyLockers',
}
export const MyLockersNavigator = createStackNavigator({
  [MyLockersScreens.MyLockers]: {
    screen: ClaimLockerScreen,
  }
})