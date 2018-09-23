import React from 'react'
import { Query } from 'react-apollo'
import { ActivityIndicator, Alert } from 'react-native';
import { LOCKER_SESSION_QUERY } from '../graphql/queries';
import { LockerSessionDetail } from '../components/SessionDetail';

export interface ISessionDetailContainerProps {
  lockerSessionId: string
}

export class SessionDetailContainer extends React.Component<ISessionDetailContainerProps> {
  private handlePressLock = () => {
    Alert.alert('lock!')
  }

  private handlePressUnlock = () => {
    Alert.alert('unlock!')
  }

  render() {
    const {
      lockerSessionId
    } = this.props
    console.log(lockerSessionId)
    return (
      <Query
        query={LOCKER_SESSION_QUERY}
        pollInterval={1000}
        variables={{
          lockerSessionId
        }}>
        {({ data, loading }) => {
          if (loading) {
            return (
              <ActivityIndicator />
            )
          }
          console.log(data)
          if (data) {
            const { lockerSession } = data
            return (
              <LockerSessionDetail
                id={lockerSession.id}
                startedAt={lockerSession.startedAt}
                locker={lockerSession.locker}
                onPressLock={this.handlePressLock}
                onPressUnlock={this.handlePressUnlock}
              />
            )
          }
          return null
        }}
      </Query>
    )
  }
}