import React from 'react'
import { Subscription, Query } from 'react-apollo'
import { MY_LOCKERS_SUBSCRIPTION } from '../graphql/subscriptions';
import { MY_SESSIONS_QUERY } from '../graphql/queries';
import { ActivityIndicator, Alert } from 'react-native';
import { LockerSessionsGrid } from '../components/LockerGrid';

export interface MyLockersContainerProps {
  navigateToSessionDetail: (lockerSessionId: string) => void
}

export class MyLockersContainer extends React.Component<MyLockersContainerProps> {
  private handlePressLockerSession = (lockerSessionId: string) => {
    this.props.navigateToSessionDetail(lockerSessionId)
  }

  render() {
    return (
      <Query
        query={MY_SESSIONS_QUERY}
      >
        {({ loading, data }) => {
          if (loading) {
            return (
              <ActivityIndicator />
            )
          }

          if (data) {
            console.log(data)
            return (
              <LockerSessionsGrid
                sessions={data.mySessions}
                onPressLockerSession={this.handlePressLockerSession}
              />
            )
          }
        }}
      </Query>
    )
  }
  // render() {
  //   return (
  //     <Subscription
  //       subscription={MY_LOCKERS_SUBSCRIPTION}>
  //       {({ data, loading }) => {
  //         if (loading) {
  //           return (
  //             <Text>{loading ? 'LOADING' : 'DONE LOADING'}</Text>
  //           )
  //         }
  //         console.log(data)
  //         if (!data) {
  //           return null
  //         }
  //         const { myLockers } = data
          
  //         return (
  //           <View>
  //             <Text>
  //               ID: {myLockers.id.toString()}
  //             </Text>
  //             <Text>
  //               CLOSED: {myLockers.closed.toString()}
  //             </Text>
  //             <Text>
  //               LOCKED: {myLockers.locked.toString()}
  //             </Text>
  //             <Text>
  //               BUSY: {myLockers.busy.toString()}
  //             </Text>
  //             <Text>
  //               ALARM: {myLockers.alarm.toString()}
  //             </Text>
  //           </View>
  //         )
  //       }}
  //     </Subscription>
  //   )
  // }
}