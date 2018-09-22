import React from 'react'
import { Subscription } from 'react-apollo'
import { LOCKER_SUBSCRIPTION } from '../graphql/subscriptions';
import { View } from 'react-native';
import { Text } from '../components/Text';

const variables = {
  lockerId: 'cjmdtr3q3000s0a5842xwqcy1'
}

export class LockerDetailContainer extends React.Component {
  render() {
    return (
      <Subscription
        subscription={LOCKER_SUBSCRIPTION}
        variables={variables}
      >
        {({ data, loading }) => {
          if (loading) {
            return (
              <Text>{loading ? 'LOADING' : 'DONE LOADING'}</Text>
            )
          }
          const { lockerState } = data
          return (
            <View>
              <Text>
                CLOSED: {lockerState.closed.toString()}
              </Text>
              <Text>
                LOCKED: {lockerState.locked.toString()}
              </Text>
              <Text>
                BUSY: {lockerState.busy.toString()}
              </Text>
              <Text>
                ALARM: {lockerState.alarm.toString()}
              </Text>
            </View>
          )
        }}
      </Subscription>
    )
  }
}