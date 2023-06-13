import './styles.css'

import EventItem from '../EventItem'
import EventContainer from '../EventContainer'
import { checkSelected, getBlockHeight, getStartPosition } from '../../helpers'
import { EVENT_GAP } from '../../constants'

import { DaySlotsProps } from './types'

const DaySlots = ({
  eventsByDay,
  renderRows,
  onClickEvent,
  selectedEvent,
  renderEventComponent: Component = EventItem,
}: DaySlotsProps): JSX.Element => {
  return (
    <>
      {renderRows.map(({ time, cells }) => (
        <div className="row" key={time}>
          <div className="cell time">{time}</div>
          {cells.map((events, index) => {
            return (
              <div className="cell day-cell" key="cell">
                {events.map(event => {
                  const isSelected = checkSelected(event.id, selectedEvent)

                  return (
                    <EventContainer
                      key={event.id}
                      index={index}
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

export default DaySlots