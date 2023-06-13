import { memo, useMemo } from 'react'
import { format } from 'date-fns'

import WeekSlots from '../WeekSlots'
import WeekHeader from '../WeekHeader'
import { DateFormat } from '../../constants'

import { WeekViewProps } from './types'
import { getWeekDays } from './helpers'

const WeekView = ({
  events,
  startDate,
  selectedDate,
  selectedEvent,
  renderRows,
  renderEventComponent,
  onClickEvent,
  selectDateHandler,
}: WeekViewProps): JSX.Element => {
  const weekDays = useMemo(() => getWeekDays(startDate), [startDate])

  const eventsByDay = useMemo(
    () =>
      weekDays.map(day =>
        events.filter(
          event =>
            format(new Date(event.start), DateFormat.YEAR_MONTH_DAY) ===
            format(day, DateFormat.YEAR_MONTH_DAY),
        ),
      ),
    [events, weekDays],
  )

  return (
    <>
      <div className="header">
        <WeekHeader
          weekDays={weekDays}
          selectedDay={selectedDate}
          onSelectDate={selectDateHandler}
        />
      </div>
      <div className="body">
        <WeekSlots
          eventsByDay={eventsByDay}
          selectedEvent={selectedEvent}
          renderRows={renderRows}
          onClickEvent={onClickEvent}
          renderEventComponent={renderEventComponent}
        />
      </div>
    </>
  )
}

export default memo(WeekView)
