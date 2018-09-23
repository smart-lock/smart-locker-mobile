import React from 'react'
import { ScreenWrapper } from '../components/ScreenWrapper';
import { basicStackScreenNavigationOptions } from '../resources/styles';
import { LockButton } from '../components/LockButton';
import MapView, { Marker } from 'react-native-maps';
import { Colors } from '../resources/colors';
import { View, InteractionManager, ScrollView } from 'react-native';
import { Text } from '../components/Text';
import moment from 'moment'
import { BasicListItem } from './BasicListItem';
import { ILockerSession } from '../model/session';
import { getChargeBetweenDates } from '../logic/charge';

export interface ILockerSessionDetailProps extends ILockerSession {
  onPressLock: () => void
  onPressUnlock: () => void
}

export class LockerSessionDetail extends React.Component<ILockerSessionDetailProps> {
  static navigationOptions = basicStackScreenNavigationOptions({
    title: 'Armário'
  })

  public state = {
    renderMap: false,
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        renderMap: true
      })
    });
  }

  render() {
    const {
      onPressLock,
      onPressUnlock,
      locker,
      startedAt,
    } = this.props

    return (
      <ScreenWrapper>
        <ScrollView>
          {this.state.renderMap ? (
            <MapView
              style={{height: 200, alignSelf: 'stretch'}}
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
          ) : (
            <View style={{height: 200, alignSelf: 'stretch', backgroundColor: '#d3d3d3'}} />
          )}
          <View style={{backgroundColor: Colors.WHITE}}>
            <BasicListItem>
              <Text style={{color: '#999'}}>Endereço</Text>
              <Text>{locker.cluster.macAddress}</Text>
            </BasicListItem>
            <BasicListItem>
              <Text style={{color: '#999'}}>Alugado em</Text>
              <Text>{moment(startedAt).format('DD/MM/YYYY HH:mm:ss')}</Text>
            </BasicListItem>
            <BasicListItem>
              <Text style={{color: '#999'}}>Cobrança</Text>
              <Text>{getChargeBetweenDates(new Date(), startedAt)}</Text>
            </BasicListItem>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center', padding: 10, flex: 1}}>
            <LockButton
              onPress={() => locker.locked ? onPressUnlock() : onPressLock()}
              locked={locker.locked}
              disabled={!locker.closed}
            />
          </View>
        </ScrollView>
      </ScreenWrapper>
    )
  }
}