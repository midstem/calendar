import MonthSlots from '../MonthSlots'

import './styles.css'
import { MonthViewProps } from './types'

const MonthView = ({
  selectDateHandler,
  onClickEvent,
  onClickCell,
  renderRows,
}: MonthViewProps): JSX.Element => {
  return (
    <>
      <div className="body">
        <MonthSlots
          renderRows={renderRows}
          onSelectDate={selectDateHandler}
          onClickEvent={onClickEvent}
          onClickCell={onClickCell}
        />
      </div>
    </>
  )
}

export default MonthView
