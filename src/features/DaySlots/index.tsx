import './styles.css'

import EventItem from '../EventItem'
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
                    <div
                      key={`${event.id}`}
                      className={`slot-container ${isSelected && 'selected'} `}
                      style={{
                        zIndex: event?.overlapping ? event.overlapping + 1 : 1,
                        top: `${getStartPosition(event.start)}px`,
                        height: `${getBlockHeight(event?.duration)}px`,
                        left:
                          event?.position ??
                          `calc(${100 / eventsByDay.length}% * ${index})`,
                        width:
                          event?.width ??
                          `calc(${100 / eventsByDay.length}% - ${EVENT_GAP}px)`,
                      }}
                    >
                      <Component
                        event={event}
                        isSelected={isSelected}
                        onClick={onClickEvent}
                      />
                    </div>
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
