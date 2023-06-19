import { CalendarEventType } from 'src/types'

export type MonthSlotsProps = {
  slotsData: CalendarEventType[]
  onSelectDate: (date: Date) => void
}

export type CreateCells = ({
  currentYear,
  currentMonth,
  countCells,
  isCurrentMonth,
  daysInPrevMonth,
}: {
  currentYear: number
  currentMonth: number
  countCells: number
  isCurrentMonth: boolean
  daysInPrevMonth?: number | undefined
}) => {
  date: Date
  isCurrentMonth: boolean
  slots: CalendarEventType[]
}[]

export type GenerateSlotsForDaysOfMonth = (
  currentYear: number,
  daysInMonth: number,
  currentMonth: number,
  slotsData: CalendarEventType[],
  firstDayOfMonth: number,
) => {
  slots: CalendarEventType[]
  date: Date
  isCurrentMonth: boolean
}[]
