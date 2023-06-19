import { CalendarEventType } from '../../types'

export type MonthViewProps = {
  events: CalendarEventType[]
  selectDateHandler: (date: Date) => void
}
