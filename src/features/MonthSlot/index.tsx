import { format } from 'date-fns'

import { getSlotAttributes } from '../MonthSlots/helpers'
import { MAX_DISPLAYED_SLOTS } from '../MonthSlots/constants'
import MonthEventModal from '../MonthEventModal'
import Button from '../Button'
import { DateFormat } from '../../constants'

import { useMonthSlot } from './useMonthSlot'
import { MonthSlotProps } from './types'

export const MonthSlot = ({
  cell,
  index,
  onSelectDate,
}: MonthSlotProps): JSX.Element => {
  const { date, isCurrentMonth, slots } = cell

  const { modalOpen, openModalHandler, closeModalHandler } = useMonthSlot()

  return (
    <div
      className={`cell month-cell ${!isCurrentMonth ? 'month-cell--prev' : ''}`}
      key={date.toLocaleDateString() + index}
    >
      <div className="month-cell-week">
        {index < 7 && format(date, DateFormat.DAY_OF_WEEK)}
      </div>
      <div className="month-cell-day-wrapper">
        <Button className="month-cell-day" onClick={() => onSelectDate(date)}>
          {date.getDate() === 1 && format(date, DateFormat.MONTH_SHORT)}{' '}
          {date.getDate()}
        </Button>
      </div>
      {slots.slice(0, MAX_DISPLAYED_SLOTS + 1).map((slot, index) => {
        const { slotTime, slotTitle, isCollapsedSlot } = getSlotAttributes({
          slot,
          index,
          length: slots.length,
        })

        return (
          <div
            key={slot.id}
            className="slot slot-line"
            onClick={() => openModalHandler(isCollapsedSlot)}
          >
            {!isCollapsedSlot && (
              <div
                className="slot-line-circle"
                style={{
                  backgroundColor: slot.color ?? 'brown',
                }}
              />
            )}
            <span>{slotTime}</span>
            <span className="slot-title">{slotTitle}</span>
          </div>
        )
      })}
      {modalOpen && (
        <MonthEventModal cell={cell} closeModalHandler={closeModalHandler} />
      )}
    </div>
  )
}
