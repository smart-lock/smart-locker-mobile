import gql from "graphql-tag";
import { buildMutation } from "../../logic/apollo";

export interface IClaimMutationResponse {
  claimLocker: {
    id: string
  }
}
export interface IClaimMutationVariables {
  lockerId: string
}
export const CLAIM_MUTATION = gql`
mutation claimLocker($lockerId: ID!) {
	claimLocker(lockerId: $lockerId) {
    id
  }
}`

export const ClaimMutation = buildMutation<IClaimMutationResponse, IClaimMutationVariables>(CLAIM_MUTATION)