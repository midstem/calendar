import EventItem from '../EventItem'
import EventContainer from '../EventContainer'
import {
  checkSelected,
  getDateOfWeekday,
  handleClicKOnCell,
} from '../../helpers'

import { WeekSlotsProps } from './types'

const WeekSlots = ({
  startDate,
  eventsByDay,
  renderRows,
  onClickEvent,
  onClickCell,
  selectedEvent,
  renderEventComponent: Component = EventItem,
}: WeekSlotsProps): JSX.Element => {
  return (
    <>
      {renderRows.map(({ time, cells }) => (
        <div className="row" key={time}>
          <div className="cell time">{time}</div>
          {cells.map((events, index) => {
            const dayEvents = eventsByDay[index]

            return (
              <div
                className="cell"
                onClick={event =>
                  handleClicKOnCell({
                    event,
                    time,
                    day: getDateOfWeekday(++index, startDate),
                    onClick: onClickCell,
                  })
                }
                key={`cell-${String(index)}`}
              >
                {events.map(event => {
                  const isSelected = checkSelected(event.id, selectedEvent)
                  const eventIndex = dayEvents.findIndex(
                    day => day.id === event.id,
                  )

                  return (
                    <EventContainer
                      onClick={() => onClickEvent(event)}
                      key={event.id}
                      index={eventIndex}
                      overlapping={event?.overlapping}
                      start={event.start}
                      numberOfEvents={eventsByDay.length}
                      width={event?.width}
                      duration={event?.duration}
                      isSelected={isSelected}
                      position={event?.position}
                    >
                      <Component event={event} isSelected={isSelected} />
                    </EventContainer>
                  )
                })}
              </div>
            )
          })}
        </div>
      ))}
    </>
  )
}

export default WeekSlots
