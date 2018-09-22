import React from 'react'
import { ScreenWrapper } from '../components/ScreenWrapper';
import { Text } from '../components/Text';
import { NavigationInjectedProps } from 'react-navigation';
import { basicStackScreenNavigationOptions } from '../resources/styles';
import MapView, { Marker } from 'react-native-maps';

export class LockersMapScreen extends React.Component<NavigationInjectedProps> {
  static navigationOptions = basicStackScreenNavigationOptions({
    title: 'Meus armários'
  })
  
  render() {
    return (
      <ScreenWrapper>
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: -23.632783,
            longitude: -46.713885,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          <Marker
            image={{uri: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-128.png'}}
            coordinate={{
              latitude: -23.632783,
              longitude: -46.713885,
            }}
          />
        </MapView>
      </ScreenWrapper>
    )
  }
}