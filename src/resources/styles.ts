import { Colors } from './colors'

export interface BasicStackScreenNavigationOptions {
  title: string
}

export const basicStackScreenNavigationOptions = ({
  title,
}: BasicStackScreenNavigationOptions) => ({
  title,
  headerStyle: {
    backgroundColor: Colors.PRIMARY,
  },
  headerTintColor: Colors.WHITE,
  headerTitleStyle: {
    fontWeight: '100',
  },
});
