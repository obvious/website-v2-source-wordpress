import moment from "moment"

export const isInLast30Days = date => {
  if (!date) {
    return false
  }
  return moment()
    .subtract(30, "days")
    .isBefore(date)
}
