import {
  addDays,
  subWeeks,
  format,
  intervalToDuration,
  Duration,
  startOfWeek,
  endOfWeek,
  addWeeks
} from 'date-fns'

import { CalendarEventType, Views, WeekRowsType } from './types'
import {
  CELL_HEIGHT,
  CalendarSlotType,
  DAY_IN_HOURS,
  DaysOfTheWeek,
  END_DAY,
  HOUR_IN_MINUTES,
  MERIDIEM,
  START_DAY,
  dateFormat,
  daysOfWeek
} from './constants'

export const getStartOfWeek = (date: Date | number) =>
  addDays(startOfWeek(date, { weekStartsOn: 1 }), 0)

export const getEndOfWeek = (date: Date | number) =>
  addDays(endOfWeek(date, { weekStartsOn: 1 }), 0)

export const checkSelected = (eventId: string, selectedEventId?: string) =>
  eventId === selectedEventId

export const getWeekDays = (startDate: Date) =>
  daysOfWeek.map((_, index) => addDays(startDate, index))

export const getStartPosition = (startDate: Date | string) => {
  const minutes = format(addDays(new Date(startDate), 0), dateFormat.MINUTE)

  return (CELL_HEIGHT / HOUR_IN_MINUTES) * +minutes
}

export const getBlockHeight = (duration?: Duration) => {
  const hours = duration?.hours ?? 1
  const minutes = duration?.minutes ?? 0

  return hours * CELL_HEIGHT + minutes * (CELL_HEIGHT / HOUR_IN_MINUTES)
}

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
      format(startEvent, dateFormat.DAY_LONG) as DaysOfTheWeek
    )

    const duration = intervalToDuration({ start: startEvent, end: endEvent })
    const startTime = format(startEvent, dateFormat.HOUR)
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

export const generateSlotsForDaysOfMonth = (
  currentYear: any,
  daysInMonth: any,
  currentMonth: any,
  slotsData: any
) => {
  const cells = Array.from({ length: daysInMonth }, (_, day) => ({
    date: new Date(currentYear, currentMonth, day + 1),
    slots: []
  }))

  const newCells = cells.map((cell) => {
    const matchingSlotData = slotsData.find(({ date }: any) => {
      const slotDate = new Date(date)

      return (
        slotDate.getMonth() === currentMonth &&
        slotDate.getFullYear() === currentYear &&
        slotDate.getDate() === cell.date.getDate()
      )
    })

    if (matchingSlotData) {
      return {
        ...cell,
        slots: matchingSlotData.slots
      }
    }

    return cell
  })

  return newCells
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

export const applyOpacity = (hexColor: string, opacity: number): string => {
  hexColor = hexColor.replace('#', '')

  const r: number = parseInt(hexColor.substring(0, 2), 16)
  const g: number = parseInt(hexColor.substring(2, 4), 16)
  const b: number = parseInt(hexColor.substring(4, 6), 16)

  const newR: number = Math.round((1 - opacity) * 255 + r * opacity)
  const newG: number = Math.round((1 - opacity) * 255 + g * opacity)
  const newB: number = Math.round((1 - opacity) * 255 + b * opacity)

  const modifiedHexColor = `#${newR.toString(16).padStart(2, '0')}${newG
    .toString(16)
    .padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`

  return modifiedHexColor
}

export const isClientEvent = (type: string): boolean =>
  type === CalendarSlotType.CLIENT_APPOINTMENT ||
  type === CalendarSlotType.CLIENT_AVAILABILITY

export const generateUniqueID = (): string => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'

  return characters
    .split('')
    .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
    .join('')
}
