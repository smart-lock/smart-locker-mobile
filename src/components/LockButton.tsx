import React from 'react'
import AwesomeButton from 'react-native-really-awesome-button'
import { View, Text, ViewStyle } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export interface LockButtonProps {
  onPress: () => void;
  locked: boolean;
  disabled: boolean;
  style?: ViewStyle
}

const unlockedTheme = {
  backgroundColor:"#fc5c65",
  backgroundActive:"#26de81",
  backgroundDarker:"#eb3b5a",
  
}

const lockedTheme = {
  backgroundColor:"#26de81",
  backgroundActive:"#fc5c65",
  backgroundDarker:"#20bf6b",
}

export const disabledTheme = {
  backgroundColor:"#d1d8e0",
  backgroundActive:"#d1d8e0",
  backgroundDarker:"#a5b1c2",
}

const getTheme = (locked: boolean, disabled: boolean) => {
  if (disabled) {
    return disabledTheme
  }

  return locked ? lockedTheme : unlockedTheme
}
export const LockButton: React.SFC<LockButtonProps> = ({
  onPress,
  locked,
  disabled,
  style,
}) => {

  const theme = getTheme(locked, disabled)
  const text = locked ? 'UNLOCK' : 'LOCK'
  const iconName = locked ? 'unlock' : 'unlock'

  return (
    <AwesomeButton
      backgroundColor={theme.backgroundColor}
      backgroundActive={theme.backgroundActive}
      backgroundDarker={theme.backgroundDarker}
      onPress={onPress}
      disabled={disabled}
      borderRadius={100}
      height={200}
      width={200}
      style={style}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <EvilIcons name={iconName} size={60} color="#FFF" />
        <Text style={{fontWeight: '400', color: '#fff', fontSize: 20}}>{text}</Text>
      </View>
    </AwesomeButton>
  )
  
}