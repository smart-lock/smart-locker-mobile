import { createStackNavigator } from 'react-navigation'
import { SettingsScreen } from '../screens/Settings'

export const SettingsScreens = {
  Settings: 'Settings/Settings',
}
export const SettingsNavigator = createStackNavigator({
  [SettingsScreens.Settings]: {
    screen: SettingsScreen,
  }
})
