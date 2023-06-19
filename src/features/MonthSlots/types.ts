import { CalendarEventType } from '../../types'

export type MonthSlotsProps = {
  slotsData: CalendarEventType[]
  onSelectDate: (date: Date) => void
}

export type CreateCells = {
  currentYear: number
  currentMonth: number
  countCells: number
  isCurrentMonth: boolean
  daysInPrevMonth?: number
}

export type GenerateSlotsForDaysOfMonth = {
  currentYear: number
  daysInMonth: number
  currentMonth: number
  slotsData: CalendarEventType[]
  firstDayOfMonth: number
}

export type Cell = {
  date: Date
  isCurrentMonth: boolean
  slots: CalendarEventType[]
}
