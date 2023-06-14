import { FunctionComponent } from 'react'

import {
  DayCellType,
  DayRowsType,
  EventComponentProps,
  UserEvents,
} from '../../types'

export type DayViewProps = UserEvents<DayCellType> & {
  events: DayCellType[]
  startDate: Date
  renderRows: DayRowsType[]
  selectedEvent?: string
  renderEventComponent?: FunctionComponent<EventComponentProps>
}
