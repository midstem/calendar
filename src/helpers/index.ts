import { addDays, startOfWeek } from 'date-fns'
import { format } from 'date-fns'

import { HandleClicKOnCellT } from 'src/types'

import { CELL_HEIGHT, HOUR_IN_MINUTES, DateFormat } from '../constants'

export const getStartPosition = (startDate: Date | string): number => {
  const minutes = format(addDays(new Date(startDate), 0), DateFormat.MINUTE)

  return (CELL_HEIGHT / HOUR_IN_MINUTES) * +minutes
}

export const getBlockHeight = (duration?: Duration): number => {
  const hours = duration?.hours ?? 1
  const minutes = duration?.minutes ?? 0

  return hours * CELL_HEIGHT + minutes * (CELL_HEIGHT / HOUR_IN_MINUTES)
}

export const checkSelected = (
  eventId: string,
  selectedEventId?: string,
): boolean => eventId === selectedEventId

export const handleClicKOnCell = ({
  event,
  day,
  time,
  onClick,
}: HandleClicKOnCellT): void => {
  const isChildren = event.currentTarget.hasChildNodes()

  if (!isChildren) onClick(time, day)
}

export const getDateOfWeekday = (
  weekdayNumber: number,
  startDay: Date = new Date(),
): Date => {
  const startOfWeekDate = startOfWeek(startDay)
  const targetDate = addDays(startOfWeekDate, weekdayNumber)

  return targetDate
}
