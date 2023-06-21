import { CalendarEventType, MonthCellType, UserClickEvent } from '../../types'

export type MonthEventProps = UserClickEvent<MonthCellType> & {
  event: CalendarEventType
  isCollapsedEvent?: boolean
}
