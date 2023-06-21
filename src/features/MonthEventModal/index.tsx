import { format } from 'date-fns'

import { MonthEvent } from '../MonthEvent'
import colors from '../../theme/colors'
import { DateFormat } from '../../constants'
import './style.css'
import Cross from '../../components/Cross'

import { MonthEventModalProps } from './types'

const MonthEventModal = ({
  cell,
  closeModalHandler,
  onClickEvent,
}: MonthEventModalProps): JSX.Element => {
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
          sx={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            width: '24px',
            cursor: 'pointer',
          }}
          color={colors.dimGrey}
          onClick={() => closeModalHandler(false)}
        />
      </div>
      {slots.map(slot => {
        const event = {
          ...slot,
          date: format(new Date(slot.start), DateFormat.HOUR_MERIDIEM),
        }

        return (
          <MonthEvent key={slot.id} event={event} onClickEvent={onClickEvent} />
        )
      })}
    </div>
  )
}

export default MonthEventModal
