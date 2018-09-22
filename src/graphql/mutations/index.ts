import gql from "graphql-tag";

export interface IClaimMutationResponse {
  claimLocker: {
    id: string
  }
}

export const CLAIM_MUTATION = gql`
mutation claimLocker($lockerId: ID!) {
	claimLocker(lockerId: $lockerId) {
    id
  }
}`

export interface IUnlockMutationResponse {
  unlockLocker: {
    id: string
  }
}
export const UNLOCK_MUTATION = gql`
mutation unlockLocker($lockerId: ID!) {
  unlockLocker(lockerId:$lockerId) {
    id
  }
}`

export interface ILockMutationResponse {
  lockLocker: {
    id: string
  }
}

export const LOCK_MUTATION = gql`
mutation lockLocker($lockerId: ID!) {
  lockLocker(lockerId:$lockerId) {
    id
  }
}`

export interface IUnclaimMutationResponse {
  unclaimLocker: {
    id: string
  }
}
export const UNCLAIM_MUTATION = gql`
mutation unclaimLocker($lockerId: ID!) {
  unclaimLocker(lockerId: $lockerId) {
    id
  }
}`