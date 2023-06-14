import {
  addDays,
  subWeeks,
  format,
  intervalToDuration,
  startOfWeek,
  endOfWeek,
  addWeeks,
  subDays,
  startOfDay,
  endOfDay,
} from 'date-fns'

import {
  CalendarEventType,
  ConfigT,
  DayRowsType,
  ViewsT,
  WeekRowsType,
} from '../../types'
import { getScreenWidth } from '../../helpers'
import {
  DAY_IN_HOURS,
  DaysOfTheWeek,
  END_DAY,
  MERIDIEM,
  START_DAY,
  DateFormat,
  daysOfWeek,
  Views,
} from '../../constants'

import { HoursColumnT, RowsInfoT, DateRangeT } from './types'

export const getStartOfWeek = (date: Date | number): Date =>
  addDays(startOfWeek(date, { weekStartsOn: 1 }), 0)

export const getEndOfWeek = (date: Date | number): Date =>
  addDays(endOfWeek(date, { weekStartsOn: 1 }), 0)

export const getStartDate = (viewMode: ViewsT, currentDate: Date): Date => {
  switch (viewMode) {
    case Views.WEEK:
      return getStartOfWeek(currentDate)
    case Views.DAY:
      return startOfDay(currentDate)
    default:
      return currentDate
  }
}

export const getEndDate = (viewMode: ViewsT, currentDate: Date): Date => {
  switch (viewMode) {
    case Views.WEEK:
      return getEndOfWeek(currentDate)
    case Views.DAY:
      return endOfDay(currentDate)
    default:
      return currentDate
  }
}

const generateHoursColumn = (): HoursColumnT[] => {
  return [...Array(DAY_IN_HOURS)].map((_, hour) => {
    const ampm = hour < 12 ? MERIDIEM.BEFORE_MIDDAY : MERIDIEM.AFTER_MIDDAY
    const displayHour = hour % 12 || 12

    return {
      time: `${displayHour}:00 ${ampm}`,
    }
  })
}

export const generateEmptyWeekRows = (): WeekRowsType[] => {
  return generateHoursColumn().map(({ time }) => ({
    time,
    cells: daysOfWeek.map(() => []),
  }))
}

export const generateEmptyDayRows = (): DayRowsType[] => {
  return generateHoursColumn().map(({ time }) => ({
    time,
    cells: [[]],
  }))
}

export const getCalendarRowsInfo = (
  events: CalendarEventType[],
): RowsInfoT[] => {
  return events.map(event => {
    const startEvent = new Date(event.start)
    const endEvent = new Date(event.end)

    const duration = intervalToDuration({ start: startEvent, end: endEvent })
    const startTime = format(startEvent, DateFormat.HOUR)
    const currentDateTime = startEvent.getTime()

    return { event, duration, startTime, startEvent, currentDateTime }
  })
}

export const generateCalendarWeekRows = (
  events: CalendarEventType[],
  startWeek: number,
  endWeek: number,
): WeekRowsType[] => {
  const rows = generateEmptyWeekRows()

  getCalendarRowsInfo(events).forEach(
    ({ currentDateTime, duration, startTime, event, startEvent }) => {
      const dayIndex = daysOfWeek.indexOf(
        format(startEvent, DateFormat.DAY_LONG) as DaysOfTheWeek,
      )

      const isValid = currentDateTime >= startWeek && currentDateTime <= endWeek

      if (isValid) {
        rows[+startTime].cells[dayIndex].push({
          ...event,
          duration,
        })
      }
    },
  )

  return rows.slice(START_DAY, END_DAY)
}

export const generateCalendarDayRows = (
  events: CalendarEventType[],
  startDay: number,
  endDay: number,
): DayRowsType[] => {
  const rows = generateEmptyDayRows()

  getCalendarRowsInfo(events).forEach(
    ({ currentDateTime, duration, startTime, event }) => {
      const isValid = currentDateTime >= startDay && currentDateTime <= endDay

      if (isValid) {
        rows[+startTime].cells[0].push({
          ...event,
          duration,
        })
      }
    },
  )

  return rows.slice(START_DAY, END_DAY)
}

// export const updateCalendarRow = (
//   rows: any[],
//   index: number,
//   updatedRow: any,
// ): any[] => {
//   const updatedCells = [...updatedRow.cells]

//   return rows.map((row, i) => {
//     if (i !== index) {
//       return row
//     }

//     return {
//       ...updatedRow,
//       cells: updatedCells,
//     }
//   })
// }

export const getRenderRows = (
  start: Date,
  end: Date,
  viewMode: ViewsT,
  events: CalendarEventType[],
): WeekRowsType[] | DayRowsType[] => {
  const startDate = start.getTime()
  const endDate = end.getTime()

  switch (viewMode) {
    case Views.WEEK: {
      return generateCalendarWeekRows(events, startDate, endDate)
    }
    case Views.DAY: {
      return generateCalendarDayRows(events, startDate, endDate)
    }
    default: {
      return []
    }
  }
}

export const getPreviousDateRange = (
  currentDate: Date,
  viewMode: ViewsT,
): DateRangeT => {
  switch (viewMode) {
    case Views.WEEK: {
      const previousDate = subWeeks(currentDate, 1)

      return {
        startDate: getStartOfWeek(previousDate),
        endDate: getEndOfWeek(previousDate),
      }
    }
    case Views.DAY: {
      const prev = subDays(currentDate, 1)

      return {
        startDate: prev,
        endDate: prev,
      }
    }
    default: {
      const now = new Date()

      return {
        startDate: now,
        endDate: now,
      }
    }
  }
}

export const getNextDateRange = (
  currentDate: Date,
  viewMode: ViewsT,
): DateRangeT => {
  switch (viewMode) {
    case Views.WEEK: {
      const nexDate = addWeeks(currentDate, 1)

      return {
        startDate: getStartOfWeek(nexDate),
        endDate: getEndOfWeek(nexDate),
      }
    }
    case Views.DAY: {
      const nexDate = addDays(currentDate, 1)

      return {
        startDate: nexDate,
        endDate: nexDate,
      }
    }
    default: {
      const now = new Date()

      return {
        startDate: now,
        endDate: now,
      }
    }
  }
}

export const returnDayDate = (currentDate: Date, dayNumber: number): string => {
  const currentWeekDay = currentDate.getDay()
  const offset = dayNumber - currentWeekDay

  const targetDate = new Date(currentDate)
  targetDate.setDate(currentDate.getDate() + offset)

  return targetDate.toISOString().substring(0, 10)
}

export const getModeFromConfig = (
  config: ConfigT[],
  defaultMode: ViewsT,
): ViewsT => {
  const suitableWidths = config.filter(
    ({ maxWidth }) => getScreenWidth() > maxWidth,
  )

  return suitableWidths.at(-1)?.mode || defaultMode
}
