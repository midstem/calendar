import { FunctionComponent } from 'react'

import { EventComponentProps, WeekCellType, WeekRowsType } from '../../types'

export type WeekSlotsProps = {
  eventsByDay: WeekCellType[][]
  renderRows: WeekRowsType[]
  selectedEvent?: string
  renderEventComponent?: FunctionComponent<EventComponentProps>
  onClickEvent?: (data?: string) => void
}
