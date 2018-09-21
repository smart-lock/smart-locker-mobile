import React from 'react'
import { Text as RNText, TextProps } from 'react-native'

export const Text: React.SFC<TextProps> = ({
  style,
  ...otherProps
}) => (
  <RNText
    {...otherProps}
    style={[{
      fontWeight: '100',
    }, style]}
  />
)