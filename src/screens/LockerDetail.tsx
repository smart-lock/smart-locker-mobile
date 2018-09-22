import React from 'react'
import { ScreenWrapper } from '../components/ScreenWrapper';
import { basicStackScreenNavigationOptions } from '../resources/styles';
import { LockButton } from '../components/LockButton';
import MapView, { Marker } from 'react-native-maps';
import { Colors } from '../resources/colors';
import { View, StyleSheet, InteractionManager } from 'react-native';
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
  static navigationOptions = basicStackScreenNavigationOptions({
    title: 'Armário'
  })
  
  render() {
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
            {/* <ListItem>
              <Text style={{color: '#999'}}>Empresa</Text>
              <Text>Smartfit</Text>
            </ListItem> */}
            <ListItem>
              <Text style={{color: '#999'}}>Endereço</Text>
              <Text>R. Dr. Samuel de castro Neves, 72</Text>
            </ListItem>
            <ListItem>
              <Text style={{color: '#999'}}>Alugado em</Text>
              <Text>{moment().format('DD/MM/YYYY HH:mm:ss')}</Text>
            </ListItem>
            <ListItem>
              <Text style={{color: '#999'}}>Cobrança</Text>
              <Text>R$ 20,00</Text>
            </ListItem>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center', padding: 10, flex: 1}}>
            <LockButton
              onPress={() => {}}
              locked
              disabled={false}
            />
          </View>
        {/* </ScrollView> */}
      </ScreenWrapper>
    )
  }
}