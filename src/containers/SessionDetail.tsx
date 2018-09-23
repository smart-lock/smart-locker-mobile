import React from 'react'
import { Query } from 'react-apollo'
import { ActivityIndicator, Alert } from 'react-native';
import { LOCKER_SESSION_QUERY } from '../graphql/queries';
import { LockerSessionDetail } from '../components/SessionDetail';
import { apolloClient } from '../apollo';
import { LockMutation, UnlockMutation, UnclaimMutation } from '../graphql/mutations';


export interface ISessionDetailContainerProps {
  lockerSessionId: string
  navigateToMyLockers: () => void
}


export class SessionDetailContainer extends React.Component<ISessionDetailContainerProps> {
  render() {
    const {
      lockerSessionId
    } = this.props
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
          if (data && data.lockerSession) {
            const { lockerSession } = data
            const { id: lockerId } = lockerSession.locker
            return (
              <LockMutation variables={{lockerId}}>
                {(lockMutation, { loading: lockLoading }) => (
                  <UnlockMutation variables={{lockerId}}>
                    {(unlockMutation, { loading: unlockLoading }) => (
                      <UnclaimMutation variables={{lockerId}}>
                        {(unclaimMutation, { loading: unclaimLoading }) => (
                          <LockerSessionDetail
                            id={lockerSession.id}
                            startedAt={lockerSession.startedAt}
                            locker={lockerSession.locker}
                            onPressLock={() => lockMutation()}
                            onPressUnlock={() => {
                              unlockMutation()
                            }}
                            onPressUnclaim={async () => {
                              await unclaimMutation()
                              this.props.navigateToMyLockers()
                            }}
                            lockLoading={lockLoading}
                            unlockLoading={unlockLoading}
                            unclaimLoading={unclaimLoading}
                          />
                        )}
                      </UnclaimMutation>
                    )}
                  </UnlockMutation>
                )} 
              </LockMutation>
            )
          }
          return null
        }}
      </Query>
    )
  }
}