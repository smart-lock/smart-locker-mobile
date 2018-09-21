import React, { Component, Fragment } from 'react';
import { StyleSheet, View, TouchableOpacity, Button, Alert, StatusBar } from 'react-native';
import { client, clientPrisma } from './apollo';
import gql from 'graphql-tag';
import { LockButton } from './components/LockButton';
import { Text } from './components/Text';
import { LoginForm } from './components/LoginForm';
import { LockerGrid } from './components/LockerGrid';
import { RootNavigator } from './navigation/RootNavigator';


export interface IClaimMutationResponse {
  claimLocker: {
    id: string
  }
}

const CLAIM_MUTATION = gql`
mutation claimLocker($lockerId: ID!) {
	claimLocker(lockerId: $lockerId) {
    id
  }
}`

export interface IUnclaimMutationResponse {
  unclaimLocker: {
    id: string
  }
}
const UNCLAIM_MUTATION = gql`
mutation unclaimLocker($lockerId: ID!) {
  unclaimLocker(lockerId: $lockerId) {
    id
  }
}`

export interface ILockMutationResponse {
  lockLocker: {
    id: string
  }
}

const LOCK_MUTATION = gql`
mutation lockLocker($lockerId: ID!) {
  lockLocker(lockerId:$lockerId) {
    id
  }
}`


export interface IUnlockMutationResponse {
  unlockLocker: {
    id: string
  }
}
const UNLOCK_MUTATION = gql`
mutation unlockLocker($lockerId: ID!) {
  unlockLocker(lockerId:$lockerId) {
    id
  }
}`

export interface IGetLockerQueryResponse {
  locker: {
    closed: boolean,
    locked: boolean,
    busy: boolean,
    alarm: boolean,
  }
}
const GET_LOCKER_QUERY = gql`
query locker($lockerId: ID!) {
  locker(where: {id: $lockerId}) {
    closed
    locked
    busy
    alarm
  }
}
`
const BooleanIndicator: React.SFC<{
  label: string,
  value: boolean
}> = ({
  label,
  value
}) => (
  <View style={{flex: 1, backgroundColor: value ? 'lightgreen' : 'tomato', padding: 30, alignItems: 'center'}}>
    <Text style={{fontSize: 32, fontWeight: '200', color: '#FFF'}}>{label}</Text>
  </View>
)
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
      <Fragment>
        <StatusBar barStyle='light-content' />
        <RootNavigator />
      </Fragment>
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
