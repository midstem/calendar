import { FunctionComponent } from 'react'

import { DayCellType, DayRowsType, EventComponentProps } from '../../types'

export type DayViewProps = {
  events: DayCellType[]
  startDate: Date
  renderRows: DayRowsType[]
  selectedEvent?: string
  onClickEvent: (event: DayCellType) => void
  onClickCell: (time: string, day: Date) => void
  renderEventComponent?: FunctionComponent<EventComponentProps>
}
