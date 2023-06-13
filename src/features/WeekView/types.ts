import { FunctionComponent } from 'react'

import { EventComponentProps, WeekCellType, WeekRowsType } from '../../types'

export type WeekViewProps = {
  events: WeekCellType[]
  startDate: Date
  selectedDate: Date
  renderRows: WeekRowsType[]
  selectDateHandler: (data: Date) => void
  selectedEvent?: string
  onClickEvent: (event: WeekCellType) => void
  onClickCell: (time: string, day: Date) => void
  renderEventComponent?: FunctionComponent<EventComponentProps>
}
