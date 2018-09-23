import { createStackNavigator } from 'react-navigation'
import { MyLockersScreen } from '../screens/MyLockersScreen';
import { SessionDetailScreen } from '../screens/SessionDetailScreen';

export const MyLockersScreens = {
  MyLockers: 'MyLockers/MyLockers',
  SessionDetail: 'MyLockers/SessionDetail',
}
export const MyLockersNavigator = createStackNavigator({
  [MyLockersScreens.MyLockers]: {
    screen: MyLockersScreen,
  },
  [MyLockersScreens.SessionDetail]: {
    screen: SessionDetailScreen,
  }
})
