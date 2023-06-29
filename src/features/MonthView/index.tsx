import MonthSlots from '../MonthSlots'

import './styles.css'
import { MonthViewProps } from './types'

const MonthView = ({
  selectDateHandler,
  onClickEvent,
  onClickCell,
  renderRows,
  selectedDate,
}: MonthViewProps): JSX.Element => {
  return (
    <>
      <div className="body">
        <MonthSlots
          renderRows={renderRows}
          onSelectDate={selectDateHandler}
          onClickEvent={onClickEvent}
          onClickCell={onClickCell}
          selectedDate={selectedDate}
        />
      </div>
    </>
  )
}

export default MonthView
