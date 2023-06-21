import { format } from 'date-fns'

import { getSlotAttributes } from '../MonthSlots/helpers'
import { MAX_DISPLAYED_SLOTS } from '../MonthSlots/constants'
import MonthEventModal from '../MonthEventModal'
import { MonthEvent } from '../MonthEvent'
import Button from '../Button'
import { DateFormat } from '../../constants'

import { useMonthSlot } from './useMonthSlot'
import { MonthSlotProps } from './types'

export const MonthSlot = ({
  cell,
  index,
  onSelectDate,
  onClickEvent,
  onClickCell,
}: MonthSlotProps): JSX.Element => {
  const { date, isCurrentMonth, slots } = cell

  const { modalOpen, onEventClickHandler, closeModalHandler } = useMonthSlot()

  return (
    <div
      onClick={() => {
        if (!slots.length) {
          onClickCell(`${Date.now()}`, date)
        }
      }}
      className={`cell month-cell ${!isCurrentMonth ? 'month-cell--prev' : ''}`}
      key={date.toLocaleDateString() + index}
    >
      <div className="month-cell-week">
        {index < 7 && format(date, DateFormat.DAY_OF_WEEK)}
      </div>
      <div className="month-cell-day-wrapper">
        <Button
          ariaLabel="day"
          className="month-cell-day"
          onClick={() => {
            onSelectDate(date)
          }}
        >
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
        const event = { ...slot, date: slotTime, title: slotTitle }

        return (
          <MonthEvent
            key={slot.id}
            event={event}
            isCollapsedEvent={isCollapsedSlot}
            onClickEvent={() =>
              onEventClickHandler(isCollapsedSlot, () => onClickEvent(slot))
            }
          />
        )
      })}
      {modalOpen && (
        <MonthEventModal
          cell={cell}
          closeModalHandler={closeModalHandler}
          onClickEvent={onClickEvent}
        />
      )}
    </div>
  )
}
