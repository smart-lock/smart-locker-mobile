import moment from 'moment'

export const hoursPassedSince = (final: Date, since: Date) => {
  return moment.duration(moment(final).diff(since)).asHours()
}