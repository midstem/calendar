import EventItem from '../EventItem'
import EventContainer from '../EventContainer'
import { checkSelected } from '../../helpers'

import { WeekSlotsProps } from './types'

const WeekSlots = ({
  eventsByDay,
  renderRows,
  onClickEvent,
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
              <div className="cell" key={`cell-${String(index)}`}>
                {events.map(event => {
                  const isSelected = checkSelected(event.id, selectedEvent)
                  const eventIndex = dayEvents.findIndex(
                    day => day.id === event.id,
                  )

                  return (
                    <EventContainer
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
                      <Component
                        event={event}
                        isSelected={isSelected}
                        onClick={onClickEvent}
                      />
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
