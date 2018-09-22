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