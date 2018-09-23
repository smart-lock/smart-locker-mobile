import gql from "graphql-tag";
import { buildMutation } from "../../logic/apollo";

export interface IUnlockMutationResponse {
  unlockLocker: {
    id: string
  }
}
export interface IUnlockMutationVariables {
  lockerId: string
}
export const UNLOCK_MUTATION = gql`
mutation unlockLocker($lockerId: ID!) {
  unlockLocker(lockerId:$lockerId) {
    id
  }
}`

export const UnlockMutation = buildMutation<IUnlockMutationResponse, IUnlockMutationVariables>(UNLOCK_MUTATION)