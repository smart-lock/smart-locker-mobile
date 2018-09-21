import React from 'react'
import { ScreenWrapper } from '../components/ScreenWrapper';
import { basicStackScreenNavigationOptions } from '../resources/styles';
import { LockButton } from '../components/LockButton';
import MapView from 'react-native-maps';
import { Colors } from '../resources/colors';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from '../components/Text';
import moment from 'moment'

const ListItem: React.SFC = ({
  children,
}) => (
  <View style={{
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#d3d3d3',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }}>
    {children}
  </View>
)
export class LockerDetailScreen extends React.Component {
  static navigationOptions = basicStackScreenNavigationOptions({
    title: 'Armário'
  })
  
  render() {
    return (
      <ScreenWrapper>
        <ScrollView>
          <MapView
            style={{height: 200, alignSelf: 'stretch'}}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          />
          <View style={{backgroundColor: Colors.WHITE}}>
            <ListItem>
              <Text style={{color: '#999'}}>Empresa</Text>
              <Text>Smartfit</Text>
            </ListItem>
            <ListItem>
              <Text style={{color: '#999'}}>Endereço</Text>
              <Text>R. Dr. Samuel de castro Neves, 72</Text>
            </ListItem>
            <ListItem>
              <Text style={{color: '#999'}}>Alugado em</Text>
              <Text>{moment().format('DD/MM/YYYY HH:mm:ss')}</Text>
            </ListItem>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center', padding: 10}}>
            <LockButton
              onPress={() => {}}
              locked
              disabled={false}
            />
          </View>
        </ScrollView>
      </ScreenWrapper>
    )
  }
}