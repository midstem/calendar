import { FunctionComponent } from 'react'

import {
  EventComponentProps,
  UserEvents,
  WeekCellType,
  WeekRowsType,
} from '../../types'

export type WeekViewProps = UserEvents<WeekCellType> & {
  events: WeekCellType[]
  startDate: Date
  selectedDate: Date
  renderRows: WeekRowsType[]
  selectDateHandler: (data: Date) => void
  selectedEvent?: string
  renderEventComponent?: FunctionComponent<EventComponentProps>
}
