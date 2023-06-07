import {
  addDays,
  subWeeks,
  format,
  intervalToDuration,
  startOfWeek,
  endOfWeek,
  addWeeks
} from 'date-fns'

import { CalendarEventType, WeekRowsType } from '../../types'
import {
  DAY_IN_HOURS,
  DaysOfTheWeek,
  END_DAY,
  MERIDIEM,
  START_DAY,
  DateFormat,
  daysOfWeek,
  Views
} from '../../constants'

export const getStartOfWeek = (date: Date | number) =>
  addDays(startOfWeek(date, { weekStartsOn: 1 }), 0)

export const getEndOfWeek = (date: Date | number) =>
  addDays(endOfWeek(date, { weekStartsOn: 1 }), 0)

export const generateEmptyWeekRows = (): WeekRowsType[] =>
  [...Array(DAY_IN_HOURS)].map((_, hour) => {
    const ampm = hour < 12 ? MERIDIEM.BEFORE_MIDDAY : MERIDIEM.AFTER_MIDDAY
    const displayHour = hour % 12 || 12

    return {
      time: `${displayHour}:00 ${ampm}`,
      cells: daysOfWeek.map(() => [])
    }
  })

export const generateCalendarWeekRows = (
  events: CalendarEventType[],
  startWeek: number,
  endWeek: number
): WeekRowsType[] => {
  const rows = generateEmptyWeekRows()

  events.forEach(({ start, end, ...rest }) => {
    const startEvent = new Date(start)
    const endEvent = new Date(end)
    const dayIndex = daysOfWeek.indexOf(
      format(startEvent, DateFormat.DAY_LONG) as DaysOfTheWeek
    )

    const duration = intervalToDuration({ start: startEvent, end: endEvent })
    const startTime = format(startEvent, DateFormat.HOUR)
    const currentDateTime = startEvent.getTime()

    const isVlid = currentDateTime >= startWeek && currentDateTime <= endWeek

    if (isVlid) {
      rows[+startTime].cells[dayIndex].push({
        start,
        end,
        duration,
        ...rest
      })
    }
  })

  return rows.slice(START_DAY, END_DAY)
}

export const updateCalendarRow = (
  rows: any[],
  index: number,
  updatedRow: any
) => {
  const updatedCells = [...updatedRow.cells]

  return rows.map((row, i) => {
    if (i !== index) {
      return row
    }

    return {
      ...updatedRow,
      cells: updatedCells
    }
  })
}

export const getRenderRows = (
  start: Date,
  end: Date,
  viewMode: Views,
  events: CalendarEventType[]
) => {
  switch (viewMode) {
    case Views.WEEK: {
      return generateCalendarWeekRows(events, start.getTime(), end.getTime())
    }
    default: {
      return []
    }
  }
}

export const getPreviousDateRange = (currentDate: Date, viewMode: Views) => {
  switch (viewMode) {
    case Views.WEEK: {
      const previousDate = subWeeks(currentDate, 1)

      return {
        startDate: getStartOfWeek(previousDate),
        endDate: getEndOfWeek(previousDate)
      }
    }
    default: {
      const now = new Date()

      return {
        startDate: now,
        endDate: now
      }
    }
  }
}

export const getNextDateRange = (currentDate: Date, viewMode: Views) => {
  switch (viewMode) {
    case Views.WEEK: {
      const nexDate = addWeeks(currentDate, 1)

      return {
        startDate: getStartOfWeek(nexDate),
        endDate: getEndOfWeek(nexDate)
      }
    }
    default: {
      const now = new Date()

      return {
        startDate: now,
        endDate: now
      }
    }
  }
}
