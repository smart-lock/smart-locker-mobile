import { createStackNavigator } from 'react-navigation'
import { MyLockersScreen } from '../screens/MyLockersScreen';
import { LockerDetailScreen } from '../screens/LockerDetail';

export const MyLockersScreens = {
  MyLockers: 'MyLockers/MyLockers',
  LockerDetail: 'MyLockers/LockerDetail',
}
export const MyLockersNavigator = createStackNavigator({
  [MyLockersScreens.MyLockers]: {
    screen: MyLockersScreen,
  },
  [MyLockersScreens.LockerDetail]: {
    screen: LockerDetailScreen,
  }
})
