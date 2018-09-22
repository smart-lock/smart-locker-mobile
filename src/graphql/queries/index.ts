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