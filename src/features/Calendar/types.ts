import { FunctionComponent } from 'react'

import {
  CalendarEventType,
  DayCellType,
  EventComponentProps,
  WeekCellType,
} from '../../types'

export type CalendarProps = {
  events?: CalendarEventType[]
  currentDay?: Date | string
  selectedEvent?: string
  onClickEvent?: (event: DayCellType | WeekCellType) => void
  onClickCell?: (time: string, day: Date) => void
  onChangeDate?: (start: Date, end: Date) => void
  renderEventComponent?: FunctionComponent<EventComponentProps>
}

export type UseCalendarProps = CalendarProps & {
  currentDay: Date
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
