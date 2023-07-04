import MonthSlots from '../MonthSlots'

import './styles.css'
import { MonthViewProps } from './types'

const MonthView = ({
  selectDateHandler,
  onClickEvent,
  onClickCell,
  renderRows,
  selectedDate,
  eventModal,
  newEventModal,
}: MonthViewProps): JSX.Element => {
  return (
    <MonthSlots
      eventModal={eventModal}
      newEventModal={newEventModal}
      renderRows={renderRows}
      onSelectDate={selectDateHandler}
      onClickEvent={onClickEvent}
      onClickCell={onClickCell}
      selectedDate={selectedDate}
    />
  )
}

export default MonthView
