import gql from "graphql-tag";

export interface IGetLockerQueryResponse {
  locker: {
    closed: boolean,
    locked: boolean,
    busy: boolean,
    alarm: boolean,
  }
}
const GET_LOCKER_QUERY = gql`
query locker($lockerId: ID!) {
  locker(where: {id: $lockerId}) {
    closed
    locked
    busy
    alarm
  }
}
`
const MY_LOCKERS_QUERY = gql`
query myLockers {
	myLockers {
    id
    busy
    locked
    alarm
    closed
  }
}
`

export const MY_SESSIONS_QUERY = gql`
query mySessions {
  mySessions {
    id
    startedAt
    locker {
      id
      idInCluster
      busy
      locked
      alarm
      closed
      cluster {
        macAddress
      }
    }
  }
}
`

export const LOCKER_SESSION_QUERY = gql`
  query lockerSession($lockerSessionId: ID!) {
    lockerSession(id: $lockerSessionId) {
      id
      startedAt
      locker {
        id
        idInCluster
        busy
        locked
        alarm
        closed
        cluster {
          macAddress
        }
      }
    }
  }
`