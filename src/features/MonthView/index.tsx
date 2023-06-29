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
      <MonthSlots
        renderRows={renderRows}
        onSelectDate={selectDateHandler}
        onClickEvent={onClickEvent}
        onClickCell={onClickCell}
      />
    </>
  )
}

export default MonthView
