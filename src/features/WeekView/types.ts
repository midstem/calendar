import { FunctionComponent } from 'react'

import { EventComponentProps, WeekCellType, WeekRowsType } from '../../types'

export type WeekViewProps = {
  events: WeekCellType[]
  startDate: Date
  selectedDate: Date
  renderRows: WeekRowsType[]
  selectDateHandler: (data: Date) => void
  selectedEvent?: string
  onClickEvent: (data?: string) => void
  renderEventComponent?: FunctionComponent<EventComponentProps>
}
