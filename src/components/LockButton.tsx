import React from 'react'
import AwesomeButton from 'react-native-really-awesome-button'
import { View, Text, ViewStyle, ActivityIndicator } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export interface LockButtonProps {
  onPress: () => void;
  locked: boolean;
  disabled: boolean;
  activeLabel: string
  inactiveLabel: string
  activeIcon: string
  inactiveIcon: string
  loading: boolean
  width?: number
  height?: number
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
  activeLabel,
  inactiveLabel,
  activeIcon,
  inactiveIcon,
  width,
  height,
  loading
}) => {

  const theme = getTheme(locked, disabled)
  const text = locked ? activeLabel : inactiveLabel
  const iconName = locked ? activeIcon : inactiveIcon

  return (
    <AwesomeButton
      raiseLevel={loading ? 0 : undefined}
      backgroundColor={theme.backgroundColor}
      backgroundActive={theme.backgroundActive}
      backgroundDarker={theme.backgroundDarker}
      onPress={onPress}
      disabled={disabled}
      height={height}
      width={width}
      style={style}>
        {loading ? (
          <ActivityIndicator color='#FFF'/>
        ): (
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <EvilIcons name={iconName} size={60} color="#FFF" />
            <Text style={{fontWeight: '400', color: '#fff', fontSize: 20}}>{text}</Text>
          </View>
        )}
    </AwesomeButton>
  )
  
}