import React from 'react'
import AwesomeButton from 'react-native-really-awesome-button'
import { Text } from './Text';
import { Dimensions, View } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Clock } from './Clock';
import moment from 'moment'

export interface ILocker {
  id: string
  onPress: () => void
}

const { width } = Dimensions.get('window')

export const lockerSpacing = 8
export const lockersPerRow = 2
export const lockerWidth = (width / lockersPerRow) - (lockerSpacing * lockersPerRow)


export const Locker: React.SFC<ILocker> = ({
  id,
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
    <Text style={{color: '#778ca3', fontWeight: '600', textAlign: 'right', marginBottom: 20}}>Locker #{id}</Text>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <EvilIcons name="lock" size={24} color={'#20bf6b'} />
      <Text style={{color: '#4b6584', marginLeft: 6}}>Travado</Text>
    </View>
    
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <EvilIcons name="check" size={24} color={'#20bf6b'} />
      <Text style={{color: '#4b6584', marginLeft: 6}}>Fechado</Text>
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <EvilIcons name="bell" size={24} color={'#20bf6b'} />
      <Text style={{color: '#4b6584', marginLeft: 6}}>Alarme</Text>
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <EvilIcons name="clock" size={24} color={'#20bf6b'} />
      <Clock>
        {now => (
          <Text style={{color: '#4b6584', marginLeft: 6, fontSize: 10}}>
          {moment(now).subtract('2days').format('HH:mm:ss')}
          </Text>
        )}
      </Clock>
      
    </View>
    </View>
    
  </AwesomeButton>
)