import { buildMutation } from "../../logic/apollo";
import gql from "graphql-tag";

export interface IUnclaimMutationResponse {
  unclaimLocker: {
    id: string
  }
}
export interface IUnclaimMutationVariables {
  lockerId: string
}
export const UNCLAIM_MUTATION = gql`
mutation unclaimLocker($lockerId: ID!) {
  unclaimLocker(lockerId: $lockerId) {
    id
  }
}`

export const UnclaimMutation = buildMutation<IUnclaimMutationResponse, IUnclaimMutationVariables>(UNCLAIM_MUTATION)