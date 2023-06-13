import { FunctionComponent } from 'react'

import { EventComponentProps, WeekCellType, WeekRowsType } from '../../types'

export type WeekSlotsProps = {
  startDate: Date
  eventsByDay: WeekCellType[][]
  renderRows: WeekRowsType[]
  selectedEvent?: string
  renderEventComponent?: FunctionComponent<EventComponentProps>
  onClickCell: (time: string, day: Date) => void
  onClickEvent: (event: WeekCellType) => void
}
