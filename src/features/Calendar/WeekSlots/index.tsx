import { Box } from '@mui/material'

import { EVENT_GAP } from '../constants'
import EventItem from '../EventItem'
import { checkSelected, getBlockHeight, getStartPosition } from '../helpers'
import { useStyles } from '../styles'
import { WeekSlotsProps } from '../types'

const WeekSlots = ({
  eventsByDay,
  renderRows,
  onClickEvent,
  selectedEvent,
  renderEventComponent: Component = EventItem
}: WeekSlotsProps): JSX.Element => {
  const classes = useStyles()

  return (
    <>
      {renderRows.map(({ time, cells }) => (
        <div className={classes.row} key={time}>
          <div className={`${classes.cell} ${classes.time}`}>{time}</div>
          {cells.map((events, index) => {
            const dayEvents = eventsByDay[index]

            return (
              <div className={classes.cell} key={`cell-${String(index)}`}>
                {events.map((event) => {
                  const isSelected = checkSelected(event.id, selectedEvent)
                  const eventIndex = dayEvents.findIndex(
                    (day) => day.id === event.id
                  )

                  return (
                    <Box
                      key={`${event.id}`}
                      className={`${classes.slotContainer} ${
                        isSelected && classes.selected
                      } `}
                      sx={{
                        zIndex: event?.overlapping ? event.overlapping + 1 : 1,
                        top: `${getStartPosition(event.start)}px`,
                        height: `${getBlockHeight(event?.duration)}px`,
                        left:
                          event?.position ??
                          `calc(${100 / eventsByDay.length}% * ${eventIndex})`,
                        width:
                          event?.width ??
                          `calc(${100 / eventsByDay.length}% - ${EVENT_GAP}px)`
                      }}
                    >
                      <Component
                        event={event}
                        isSelected={isSelected}
                        onClick={onClickEvent}
                      />
                    </Box>
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
