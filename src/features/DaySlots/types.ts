import { FunctionComponent } from 'react'

import { DayCellType, DayRowsType, EventComponentProps } from '../../types'

export type DaySlotsProps = {
  day: Date
  eventsByDay: DayCellType[]
  renderRows: DayRowsType[]
  selectedEvent?: string
  renderEventComponent?: FunctionComponent<EventComponentProps>
  onClickEvent: (event: DayCellType) => void
  onClickCell: (time: string, day: Date) => void
}
