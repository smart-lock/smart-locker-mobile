import React from 'react'
import AwesomeButton from 'react-native-really-awesome-button'
import { Text } from './Text';
import { Dimensions, View } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Clock } from './Clock';
import moment from 'moment'
import { Colors } from '../resources/colors';
import { ILockerSession } from '../model/session';

export interface ILockerSessionGridItemProps extends ILockerSession {
  onPress: () => void
}

const { width } = Dimensions.get('window')

export const lockerSpacing = 8
export const lockersPerRow = 2
export const lockerWidth = (width / lockersPerRow) - (lockerSpacing * lockersPerRow)


const ternary = (value1: string, value2: string) => (bool: boolean) => bool ? value1 : value2

const displayLocked = ternary('Travado', 'Destravado')
const displayClosed = ternary('Fechado', 'Aberto')
const displayAlarm = ternary('Alarme!', 'Seguro')

const displayColor = ternary(Colors.SUCCESS, Colors.DANGER)

export const LockerSession: React.SFC<ILockerSessionGridItemProps> = ({
  id,
  startedAt,
  locker,
  onPress
}) => (
  <AwesomeButton
    onPress={onPress}
    backgroundColor={'#d1d8e0'}
    // backgroundActive={theme.backgroundActive}
    backgroundDarker={'#a5b1c2'}
    height={lockerWidth}
    width={lockerWidth}
    style={{flex: 1, alignItems: 'flex-start'}}
  > 
    <View style={{flex: 1, paddingTop: 10, alignSelf: 'stretch'}}>
    <Text style={{color: '#778ca3', fontWeight: '600', textAlign: 'right', marginBottom: 20}}>Locker #{locker.idInCluster}</Text>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <EvilIcons name="lock" size={24} color={displayColor(locker.locked)} />
      <Text style={{color: displayColor(locker.locked), marginLeft: 6}}>{displayLocked(locker.locked)}</Text>
    </View>
    
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <EvilIcons name="check" size={24} color={displayColor(locker.closed)} />
      <Text style={{color: displayColor(locker.closed), marginLeft: 6}}>{displayClosed(locker.closed)}</Text>
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <EvilIcons name="bell" size={24} color={displayColor(locker.alarm)} />
      <Text style={{color: displayColor(locker.alarm), marginLeft: 6}}>{displayAlarm(locker.alarm)}</Text>
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <EvilIcons name="clock" size={24} color={Colors.SUCCESS} />
      <Clock>
        {now => (
          <Text style={{color: '#4b6584', marginLeft: 6, fontSize: 10}}>
          {moment(startedAt).utc().fromNow()}
          </Text>
        )}
      </Clock>
      
    </View>
    </View>
    
  </AwesomeButton>
)