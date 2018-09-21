import React from 'react'
import GridView from 'react-native-super-grid';
import { Text } from './Text';
import { View, Dimensions } from 'react-native';
import { Locker, lockerSpacing, lockerWidth } from './Locker';

const { width } = Dimensions.get('window')

export interface ILocker {
  id: string
}
export interface ILockerGrid {
  lockers: ILocker[]
}
export const LockerGrid: React.SFC<ILockerGrid> = ({
  lockers
}) => (
  <GridView
    itemDimension={lockerWidth}
    spacing={lockerSpacing}
    items={['1','2','3','4','5','6']}
    renderItem={(item: string) => (
      <Locker id={item} />
    )}
  />
)