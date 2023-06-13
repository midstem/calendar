import { FunctionComponent } from 'react'

import { DayCellType, DayRowsType, EventComponentProps } from '../../types'

export type DayViewProps = {
  events: DayCellType[]
  startDate: Date
  renderRows: DayRowsType[]
  selectedEvent?: string
  onClickEvent: (data?: string) => void
  renderEventComponent?: FunctionComponent<EventComponentProps>
}
