import { createStackNavigator } from 'react-navigation'
import { MyLockersScreen } from '../screens/MyLockersScreen';

export const MyLockersScreens = {
  MyLockers: 'MyLockers/MyLockers',
}
export const MyLockersNavigator = createStackNavigator({
  [MyLockersScreens.MyLockers]: {
    screen: MyLockersScreen,
  }
})
