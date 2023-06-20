import { format } from 'date-fns'

import { Cell } from '../MonthSlots/types'
import { DateFormat } from '../../constants'
import { ReactComponent as Cross } from '../../assets/cross.svg'
import './style.css'

const MonthEventModal = ({
  cell,
  closeModalHandler,
}: {
  cell: Cell
  closeModalHandler: (value: boolean) => void
}): JSX.Element => {
  const { slots, date } = cell

  return (
    <div className="modal-event">
      <div className="modal-event-info">
        <span className="modal-event-info-weekday">
          {format(date, DateFormat.DAY_OF_WEEK)}
        </span>
        <span className="modal-event-info-day">
          {format(date, DateFormat.DAY_NUMBER)}
        </span>
        <Cross
          className="cross-icon"
          onClick={() => closeModalHandler(false)}
        />
      </div>
      {slots.map(slot => (
        <div key={slot.id} className="slot slot-line">
          <div
            className="slot-line-circle"
            style={{
              backgroundColor: slot.color ?? 'brown',
            }}
          />
          <span>{format(new Date(slot.start), DateFormat.HOUR_MERIDIEM)}</span>
          <span className="slot-title">{slot.title}</span>
        </div>
      ))}
    </div>
  )
}

export default MonthEventModal
