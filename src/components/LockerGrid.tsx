import React from 'react'
import GridView from 'react-native-super-grid';
import { LockerSession, lockerSpacing, lockerWidth, ILockerSession } from './Locker';

export interface ILockerGrid {
  sessions: ILockerSession[]
  onPressLockerSession: (lockerSessionId: string) => void
}
export const LockerSessionsGrid: React.SFC<ILockerGrid> = ({
  sessions,
  onPressLockerSession,
}) => (
  <GridView
    itemDimension={lockerWidth}
    spacing={lockerSpacing}
    items={sessions}
    renderItem={(lockerSession: ILockerSession) => (
      <LockerSession
        {...lockerSession}
        onPress={() => onPressLockerSession(lockerSession.id)}
      />
    )}
  />
)