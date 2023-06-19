import { CalendarEventType } from '../../types'

export type MonthSlotsProps = { slotsData: CalendarEventType[] }

export type Cell = {
  date: Date
  isCurrentMonth: boolean
  slots: CalendarEventType[]
}
