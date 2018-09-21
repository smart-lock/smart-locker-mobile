import React from 'react'
import { View, StyleSheet, ViewProperties } from 'react-native';

export const ScreenWrapper: React.SFC<ViewProperties> = ({
  children,
  style,
  ...otherProps
}) => (
  <View style={[styles.wrapper, style]} {...otherProps}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  }
})