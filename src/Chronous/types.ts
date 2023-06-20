import { FunctionComponent } from 'react'

import {
  CalendarEventType,
  ConfigT,
  DayCellType,
  EventComponentProps,
  UserEvents,
  ViewsT,
  WeekCellType,
} from '../types'

export type CalendarProps = Partial<UserEvents<DayCellType | WeekCellType>> & {
  events?: CalendarEventType[]
  currentDay?: Date | string
  selectedEvent?: string
  onChangeDate?: (start: Date, end: Date) => void
  renderEventComponent?: FunctionComponent<EventComponentProps>
  config?: ConfigT[]
  mode?: ViewsT
}

export type UseCalendarProps = {
  currentDay: Date
  events: CalendarEventType[]
  onChangeDate: (start: Date, end: Date) => void
  config: ConfigT[]
  mode: ViewsT
}

export type HoursColumnT = {
  time: string
}

export type RowsInfoT = {
  startTime: string
  startEvent: Date
  currentDateTime: number
  duration: Duration
  event: CalendarEventType
}

export type DateRangeT = {
  startDate: Date
  endDate: Date
}