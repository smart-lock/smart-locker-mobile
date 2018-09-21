import React from 'react'
import { TextInput, View, Alert, Image } from 'react-native';
import { Kaede } from 'react-native-textinput-effects';
import { Text } from './Text';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AwesomeButton from 'react-native-really-awesome-button'

export interface ILoginFormState {
  login: string
  password: string
}

export class LoginForm extends React.Component<{}, ILoginFormState> {
  public state = {
    login: '',
    password: ''
  }

  private setFormValue = (name: keyof ILoginFormState) => (value: string) => this.setState({
    [name]: value,
  } as any)

  private handleLoginPress = () => {
    Alert.alert(JSON.stringify(this.state))
  }
  render() {
    const {
      login,
      password
    } = this.state
    const disabled = !login || !password
    return (
      <View style={{alignSelf: 'stretch'}}>
        <Image
          resizeMode="contain"
          style={{width: 150, height: 150, alignSelf: 'center', marginBottom: 40}}
          source={{uri: 'https://freeiconshop.com/wp-content/uploads/edd/lock-outline-filled.png'}}
        />
        <Kaede
          style={{overflow: 'hidden'}}
          label={'Login'}
          value={login}
          labelStyle={{
            fontWeight: '100',
          }}
          inputStyle={{
            fontWeight: '100',
          }}
          onChangeText={this.setFormValue('login')}
        />
        <Kaede
          style={{overflow: 'hidden'}}
          label={'Password'}
          labelStyle={{
            fontWeight: '100',
          }}
          inputStyle={{
            fontWeight: '100',
          }}
          value={password}
          onChangeText={this.setFormValue('password')}
        />
        <AwesomeButton
          style={{alignSelf: 'center', marginTop: 40}}
          backgroundColor={'#fd9644'}
          backgroundActive={'#fa8231'}
          backgroundDarker={'#fa8231'}
          onPress={this.handleLoginPress}
          disabled={disabled}>
          <Text style={{fontWeight: '400', color: '#fff', fontSize: 20}}>LOGIN</Text>
        </AwesomeButton>
      </View>
    )
  }
}