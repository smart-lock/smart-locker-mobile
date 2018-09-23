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
        pollInterval={500}>
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
}