import { FunctionComponent } from 'react'
import { Duration } from 'date-fns'

export enum Views {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month'
}

export type WeekStartsOnType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined

export type CalendarEventType = {
  id: string
  title: string
  start: string
  end: string
  overlapping?: number
  type?: string
  position?: string | number
  width?: string
  color?: string
  textColor?: string
  opacity?: number
  markerColor?: string
}

export type WeekRowsType = {
  time: string
  cells: WeekCellType[][]
}

export type WeekCellType = CalendarEventType & {
  duration?: Duration
}

export type WeekHeaderProps = {
  weekDays: Date[]
  selectedDay: Date
  onSelectDate: (data: Date) => void
  formatOfDay?: string
}

export type WeekSlotsProps = {
  eventsByDay: WeekCellType[][]
  renderRows: WeekRowsType[]
  selectedEvent?: string
  renderEventComponent?: FunctionComponent<EventComponentProps>
  onClickEvent?: (data?: string) => void
}

export type WeekViewProps = {
  events: WeekCellType[]
  startDate: Date
  selectedDate: Date
  renderRows: WeekRowsType[]
  selectDateHandler: (data: Date) => void
  selectedEvent?: string
  onClickEvent: (data?: string) => void
  renderEventComponent?: FunctionComponent<EventComponentProps>
}

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

export type EventComponentProps = {
  event: CalendarEventType
  isSelected: boolean
  onClick?: (data: string) => void
}
