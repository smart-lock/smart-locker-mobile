import { createSwitchNavigator } from 'react-navigation'
import { LoadingScreen } from '../screens/LoadingScreen';
import { SignInNavigator } from './SignInNavigator';
import { MainNavigator } from './MainNavigator';

export const RootScreens = {
  Loading: 'Root/Loading',
  SignIn: 'Root/SignIn',
  Main: 'Root/Main'
}
export const RootNavigator = createSwitchNavigator({
  [RootScreens.Loading]: {
    screen: LoadingScreen,
  },
  [RootScreens.SignIn]: {
    screen: SignInNavigator
  },
  [RootScreens.Main]: {
    screen: MainNavigator,
  }
})