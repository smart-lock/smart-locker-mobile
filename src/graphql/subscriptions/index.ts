import gql from "graphql-tag";

export const LOCKER_SUBSCRIPTION = gql`
subscription lockerState($lockerId: ID!) {
  lockerState(lockerId: $lockerId) {
		busy
    closed
    alarm
    locked
  }
}
`


export const MY_LOCKERS_SUBSCRIPTION = gql`
subscription myLockers {
  myLockers{
    id
    busy
    locked
    closed
    alarm
  }
}
`