import MonthSlots from '../MonthSlots'
import MonthHeader from '../MonthHeader'

import './styles.css'
import { MonthViewProps } from './types'

const MonthView = ({
  events,
  selectDateHandler,
  onClickEvent,
  onClickCell,
}: MonthViewProps): JSX.Element => {
  return (
    <>
      <div className="header">
        <MonthHeader slotsFirstDateInList={events[0].date} />
      </div>
      <div className="body">
        <MonthSlots
          slotsData={events}
          onSelectDate={selectDateHandler}
          onClickEvent={onClickEvent}
          onClickCell={onClickCell}
        />
      </div>
    </>
  )
}

export default MonthView
