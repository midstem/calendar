import { FunctionComponent } from 'react'

import { CalendarEventType, EventComponentProps } from '../../types'

export type CalendarProps = {
  events?: CalendarEventType[]
  currentDay?: Date | string
  selectedEvent?: string
  onClickEvent?: (data?: string) => void
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
