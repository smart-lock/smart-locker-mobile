import React, { Component } from 'react';
import { StyleSheet, View, Alert, StatusBar } from 'react-native';
import { client } from './apollo';
import { LockButton } from './components/LockButton';
import { Text } from './components/Text';
import { RootNavigator } from './navigation/RootNavigator';
import { ILockMutationResponse, LOCK_MUTATION, IUnlockMutationResponse, UNLOCK_MUTATION, IUnclaimMutationResponse, UNCLAIM_MUTATION, IClaimMutationResponse, CLAIM_MUTATION } from './graphql/mutations';

export default class App extends Component {
  public state = {
    locker: {
      closed: false,
      locked: false,
      busy: false,
      alarm: false,
    }
  }
  
  private handleLogin = async () => {
    Alert.alert('login')
  }

  componentDidMount() {
    // setInterval(async () => {
    //   const response = await clientPrisma.query<IGetLockerQueryResponse>({
    //     query: GET_LOCKER_QUERY,
    //     fetchPolicy: 'network-only',
    //     variables: {
    //       lockerId: 'cjmb42tqu006w0a2019feg6bl'
    //     }
    //   })

    //   if (response.data) {
    //     console.log(response.data.locker)
    //     this.setState({
    //       locker: response.data.locker,
    //     })
    //   } 
    // }, 1000)
  }
  private handleClaim = async () => {
    try {
      const response = await client.mutate<IClaimMutationResponse>({
        mutation: CLAIM_MUTATION,
        variables: {
          lockerId: 'cjmb42tqu006w0a2019feg6bl',
        }
      })
  
      if (response.data) {
        Alert.alert('Success!')
      }  
    } catch (err) {
      Alert.alert(err.toString())
    }
    
  }

  private handleUnclaim = async () => {
    try {
      const response = await client.mutate<IUnclaimMutationResponse>({
        mutation: UNCLAIM_MUTATION,
        variables: {
          lockerId: 'cjmb42tqu006w0a2019feg6bl',
        }
      })
  
      if (response.data) {
        Alert.alert('Success!')
      }
    } catch (err) {
      Alert.alert(err.toString())
    }
    
  }

  private handleLock = async () => {
    return
    try {
      const response = await client.mutate<ILockMutationResponse>({
        mutation: LOCK_MUTATION,
        variables: {
          lockerId: 'cjmb42tqu006w0a2019feg6bl',
        }
      })
  
      if (response.data) {
        Alert.alert('Success!')
      }
    } catch (err) {
      Alert.alert(err.toString())
    }
    
  }

  private handleUnlock = async () => {
    try {
      const response = await client.mutate<IUnlockMutationResponse>({
        mutation: UNLOCK_MUTATION,
        variables: {
          lockerId: 'cjmb42tqu006w0a2019feg6bl',
        }
      })
  
      if (response.data) {
        Alert.alert('Success!')
      }
    } catch (err) {
      Alert.alert(err.toString())
    }
    
  }
  render() {
    const {
      locker: {
        closed,
        locked,
        busy,
        alarm,
      }
    } = this.state
    
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle='light-content' />
        <RootNavigator persistenceKey={"NavigationState5"} />
      </View>
    )
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Smart Locker</Text> */}
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <LockButton
            onPress={this.handleLock}
            locked={!closed}
            disabled={false}
            style={{
              marginBottom: 20,
            }}
          />
          {!closed && (
            <Text>
              Feche a porta para poder trancar o armário
            </Text>
          )}
          
          {/* <Button
            title="LOGIN"
            onPress={this.handleLogin}
          /> */}
          
          {/* <Button
            title="CLAIM"
            onPress={this.handleClaim}
          />
          <Button
            title="UNCLAIM"
            onPress={this.handleUnclaim}
          />
          <Button
            title="LOCK"
            onPress={this.handleLock}
          />
          <Button
            title="UNLOCK"
            onPress={this.handleUnlock}
          /> */}
        </View>
        
        {/* <View style={{alignSelf: 'stretch'}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <BooleanIndicator label="CLOSED" value={closed} />
          </View>

          <View style={{display: 'flex', flexDirection: 'row'}}>
            <BooleanIndicator label="LOCKED" value={locked} />
          </View>
          
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <BooleanIndicator label="BUSY" value={busy} />
          </View>

          <View style={{display: 'flex', flexDirection: 'row'}}>
            <BooleanIndicator label="ALARM" value={alarm} />
          </View>
        </View> */}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
