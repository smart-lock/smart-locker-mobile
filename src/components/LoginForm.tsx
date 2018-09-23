import React from 'react'
import { View, Alert, Image, KeyboardAvoidingView, Dimensions } from 'react-native';
import { Kaede } from 'react-native-textinput-effects';
import { Text } from './Text';
import AwesomeButton from 'react-native-really-awesome-button'
import { disabledTheme } from './LockButton';
import { Colors } from '../resources/colors';


export interface ILoginFormValues {
  login: string
  password: String
}
export interface ILoginFormState {
  login: string
  password: string
}

const { width: windowWidth } = Dimensions.get('window')

const enabledTheme = {
  backgroundColor: '#fd9644',
  backgroundActive: '#fa8231',
  backgroundDarker: '#fa8231',
}

export interface ILoginFormProps {
  onSubmit: (values: ILoginFormValues) => Promise<void>
}
export class LoginForm extends React.Component<ILoginFormProps, ILoginFormState> {
  public state = {
    login: '',
    password: ''
  }

  private setFormValue = (name: keyof ILoginFormState) => (value: string) => this.setState({
    [name]: value,
  } as any)

  private handleLoginPress = () => {
    this.props.onSubmit(this.state)
  }
  render() {
    const {
      login,
      password
    } = this.state
    const disabled = !login || !password
    const theme = disabled ? disabledTheme : enabledTheme

    return (
      <KeyboardAvoidingView style={{alignSelf: 'stretch', flex: 1}} behavior="padding" enabled keyboardVerticalOffset={0}>
        <Image
          resizeMode="contain"
          style={{width: 150, height: 150, alignSelf: 'center', marginVertical: 20}}
          source={{uri: 'https://freeiconshop.com/wp-content/uploads/edd/lock-outline-filled.png'}}
        />
        
        <View style={{flex: 1, alignSelf: 'stretch'}}>
          <Text style={{textAlign: 'center', fontSize: 32, marginBottom: 20}}>
            Smart Locker
          </Text>
          <Kaede
            style={{overflow: 'hidden'}}
            label="E-mail"
            textContentType="emailAddress"
            autoCapitalize="none"
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
            label="Password"
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            labelStyle={{
              fontWeight: '100',
            }}
            inputStyle={{
              fontWeight: '100',
            }}
            value={password}
            onChangeText={this.setFormValue('password')}
          />
        </View>
        <AwesomeButton
          backgroundColor={theme.backgroundColor}
          backgroundActive={theme.backgroundActive}
          backgroundDarker={theme.backgroundDarker}
          height={50}
          width={windowWidth}
          onPress={this.handleLoginPress}
          disabled={disabled}>
          <Text style={{fontWeight: '400', color: '#fff', fontSize: 20}}>LOGIN</Text>
        </AwesomeButton>
      </KeyboardAvoidingView>
    )
  }
}