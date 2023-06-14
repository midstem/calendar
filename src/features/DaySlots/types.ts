import { FunctionComponent } from 'react'

import {
  DayCellType,
  DayRowsType,
  EventComponentProps,
  UserEvents,
} from '../../types'

export type DaySlotsProps = UserEvents<DayCellType> & {
  day: Date
  eventsByDay: DayCellType[]
  renderRows: DayRowsType[]
  selectedEvent?: string
  renderEventComponent?: FunctionComponent<EventComponentProps>
}
