import { createStackNavigator } from 'react-navigation'
import { SignInScreen } from '../screens/SignInScreen';
import { SignUpScreen } from '../screens/SignUpScreen';

export const AuthScreens = {
  SignIn: 'Auth/SignIn',
  SignUp: 'Auth/SignUp',
}
export const SignInNavigator = createStackNavigator({
  [AuthScreens.SignIn]: {
    screen: SignInScreen,
  },
  [AuthScreens.SignUp]: {
    screen: SignUpScreen,
  },
}, {
  headerMode: 'none',
})