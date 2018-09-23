import gql from "graphql-tag";
import { buildMutation } from "../../logic/apollo";

export interface ILockMutationResponse {
  lockLocker: {
    id: string
  }
}
export interface ILockMutationVariables {
  lockerId: string
}
export const LOCK_MUTATION = gql`
mutation lockLocker($lockerId: ID!) {
  lockLocker(lockerId:$lockerId) {
    id
  }
}`
export const LockMutation = buildMutation<ILockMutationResponse, ILockMutationVariables>(LOCK_MUTATION)