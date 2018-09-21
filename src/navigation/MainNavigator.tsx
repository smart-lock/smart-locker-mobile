import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { MyLockersNavigator } from './MyLockersNavigator';
import { ClaimLockerNavigator } from './ClaimLockerNavigator';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Colors } from '../resources/colors';

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
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch (routeName) {
        case MainScreens.ClaimLocker:
          iconName = 'camera'
          break;
        case MainScreens.MyLockers:
          iconName = 'lock'
          break;
      }
      if (!iconName) return null

      return (
        <EvilIcons
          name={iconName}
          size={25}
          color={tintColor || Colors.PRIMARY}
        />
      )
    },
  }),
  tabBarOptions: {
    activeTintColor: Colors.PRIMARY,
    inactiveTintColor: 'gray',
  },
})