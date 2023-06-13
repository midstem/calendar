import { memo } from 'react'

import DaySlots from '../DaySlots'
import DayHeader from '../DayHeader'

import { DayViewProps } from './types'
import { getEventsByDay } from './helpers'

const DayView = ({
  events,
  startDate,
  selectedEvent,
  onClickEvent,
  renderRows,
  renderEventComponent,
}: DayViewProps): JSX.Element => {
  return (
    <>
      <div className="header">
        <DayHeader day={startDate} />
      </div>
      <div className="body">
        <DaySlots
          eventsByDay={getEventsByDay(events, startDate)}
          selectedEvent={selectedEvent}
          renderRows={renderRows}
          onClickEvent={onClickEvent}
          renderEventComponent={renderEventComponent}
        />
      </div>
    </>
  )
}

export default memo(DayView)
