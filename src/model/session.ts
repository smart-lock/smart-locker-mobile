import { ILocker } from "./locker";

export interface ILockerSession {
  id: string
  startedAt: Date
  locker: ILocker
}
