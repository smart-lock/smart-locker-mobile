import React from 'react'
import { ScreenWrapper } from '../components/ScreenWrapper';
import { basicStackScreenNavigationOptions } from '../resources/styles';
import { LockButton } from '../components/LockButton';
import MapView, { Marker } from 'react-native-maps';
import { Colors } from '../resources/colors';
import { View, InteractionManager, ScrollView, Dimensions } from 'react-native';
import { Text } from '../components/Text';
import moment from 'moment'
import { BasicListItem } from './BasicListItem';
import { ILockerSession } from '../model/session';
import { getChargeBetweenDates } from '../logic/charge';
import { formatReais } from '../logic/money';
import { Clock } from './Clock';

export interface ILockerSessionDetailProps extends ILockerSession {
  onPressLock: () => void
  onPressUnlock: () => void
  onPressUnclaim: () => void
  lockLoading: boolean
  unlockLoading: boolean
  unclaimLoading: boolean
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
      onPressUnclaim,
      locker,
      startedAt,
      lockLoading,
      unlockLoading,
      unclaimLoading
    } = this.props

    return (
      <ScreenWrapper>
        {/* <ScrollView> */}
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
              <Clock>
                {(now) => (
                  <Text style={{color: Colors.SUCCESS}}>{formatReais(getChargeBetweenDates(now, startedAt))}</Text>
                )}
              </Clock>
            </BasicListItem>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 1, flexDirection: 'row'}}>
            <LockButton
              onPress={locker.locked ? onPressUnlock : onPressLock}
              locked={locker.locked}
              activeLabel="UNLOCK"
              inactiveLabel="LOCK"
              activeIcon="unlock"
              inactiveIcon="lock"
              disabled={!locker.closed || lockLoading || unlockLoading}
              loading={lockLoading || unlockLoading}
              width={150}
              height={150}
            />
            <LockButton
              onPress={onPressUnclaim}
              locked={false}
              activeLabel="Finalizar"
              inactiveLabel="Finalizar"
              activeIcon="check"
              inactiveIcon="check"
              disabled={!locker.closed || !locker.locked || unclaimLoading}
              loading={unclaimLoading}
              width={150}
              height={150}
            />
          </View>
          {!locker.closed && (
            <Text style={{textAlign: 'center', fontWeight: '700'}}>
              O armário está aberto. Feche-o para travar
            </Text>  
          )}
          
        {/* </ScrollView> */}
      </ScreenWrapper>
    )
  }
}