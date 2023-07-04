import { MouseEventHandler } from 'react'

import { CalendarEventType } from '../../types'

export type MonthEventProps = {
  event: CalendarEventType
  isCollapsedEvent?: boolean
  onClick: MouseEventHandler<HTMLDivElement>
}
