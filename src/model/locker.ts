import { ILockerCluster } from "./locker-cluster";

export interface ILocker {
  id: string
  idInCluster: string
  closed: boolean
  busy: boolean
  locked: boolean
  alarm: boolean
  cluster: ILockerCluster
}
