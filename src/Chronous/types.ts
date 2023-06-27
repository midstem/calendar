import { FunctionComponent } from 'react'

import {
  CalendarEventType,
  ConfigT,
  DayCellType,
  DayRowsType,
  EventComponentProps,
  MonthCellType,
  UserEvents,
  ViewsT,
  WeekCellType,
  WeekRowsType,
} from '../types'
import { Cell } from '../features/MonthSlots/types'

export type CombinedViewRowsType = WeekRowsType[] & DayRowsType[] & Cell[]

export type CalendarProps = Partial<
  UserEvents<DayCellType | WeekCellType | MonthCellType>
> & {
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
