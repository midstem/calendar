import { CalendarEventType, MonthCellType, UserEvents } from '../../types'

export type MonthViewProps = UserEvents<MonthCellType> & {
  events: CalendarEventType[]
  selectDateHandler: (date: Date) => void
}
