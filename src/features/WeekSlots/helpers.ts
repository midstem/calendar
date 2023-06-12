import { addDays } from 'date-fns'
import { format } from 'date-fns'

import { CELL_HEIGHT, HOUR_IN_MINUTES, DateFormat } from '../../constants'

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
