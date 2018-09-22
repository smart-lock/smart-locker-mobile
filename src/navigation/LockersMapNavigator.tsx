import { createStackNavigator } from 'react-navigation'
import { LockersMapScreen } from '../screens/LockersMapScreen';

export const LockersMapScreens = {
  LockersMap: 'LockersMap/LockersMap',
}
export const LockersMapNavigator = createStackNavigator({
  [LockersMapScreens.LockersMap]: {
    screen: LockersMapScreen,
  }
})