import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { MyLockersNavigator } from './MyLockersNavigator';
import { ClaimLockerNavigator } from './ClaimLockerNavigator';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Colors } from '../resources/colors';
import { SettingsNavigator } from './SettingsNavigator';

export const MainScreens = {
  ClaimLocker: 'Main/ClaimLocker',
  MyLockers: 'Main/MyLockers',
  Settings: 'Main/Settings',
}
export const MainNavigator = createBottomTabNavigator({
  [MainScreens.ClaimLocker]: {
    screen: ClaimLockerNavigator,
    navigationOptions: {
      title: 'Alugar'
    }
  },
  [MainScreens.MyLockers]: {
    screen: MyLockersNavigator,
    navigationOptions: {
      title: 'Meus armários',
    }
  },
  [MainScreens.Settings]: {
    screen: SettingsNavigator,
    navigationOptions: {
      title: 'Settings'
    }
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
        case MainScreens.Settings:
          iconName = 'gear'
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