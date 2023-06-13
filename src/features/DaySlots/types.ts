import { FunctionComponent } from 'react'

import { DayCellType, DayRowsType, EventComponentProps } from '../../types'

export type DaySlotsProps = {
  eventsByDay: DayCellType[]
  renderRows: DayRowsType[]
  selectedEvent?: string
  renderEventComponent?: FunctionComponent<EventComponentProps>
  onClickEvent?: (data?: string) => void
}
