import { FunctionComponent } from 'react'

import {
  EventComponentProps,
  UserEvents,
  WeekCellType,
  WeekRowsType,
} from '../../types'

export type WeekSlotsProps = UserEvents<WeekCellType> & {
  startDate: Date
  eventsByDay: WeekCellType[][]
  renderRows: WeekRowsType[]
  selectedEvent?: string
  renderEventComponent?: FunctionComponent<EventComponentProps>
}
