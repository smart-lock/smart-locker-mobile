import React from 'react'
import { View, StyleSheet } from 'react-native';

export const BasicListItem: React.SFC = ({
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