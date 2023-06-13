import { format } from 'date-fns'

import { DayCellType } from '../../types'
import { DateFormat } from '../../constants'

export const getEventsByDay = (
  events: DayCellType[],
  startDate: Date,
): DayCellType[] => {
  return events.filter(
    event =>
      format(new Date(event.start), DateFormat.YEAR_MONTH_DAY) ===
      format(startDate, DateFormat.YEAR_MONTH_DAY),
  )
}
