import { format } from 'date-fns'

import Button from '../Button'
import { DateFormat } from '../../constants'

import { MonthSlotsProps } from './types'
import { generateSlotsForDaysOfMonth, getSlotAttributes } from './helpers'
import { MAX_DISPLAYED_SLOTS } from './constants'

const MonthSlots = ({
  slotsData,
  onSelectDate,
}: MonthSlotsProps): JSX.Element => {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 0).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  const slotCells = generateSlotsForDaysOfMonth({
    currentYear,
    daysInMonth,
    currentMonth,
    slotsData,
    firstDayOfMonth,
  })

  return (
    <>
      <div className="month-cell-wrapper">
        {slotCells.map(({ date, slots, isCurrentMonth }, index) => (
          <div
            className={`cell month-cell ${
              !isCurrentMonth ? 'month-cell--prev' : ''
            }`}
            key={date.toLocaleString() + index}
          >
            <div className="month-cell-week">
              {index < 7 && format(date, DateFormat.DAY_OF_WEEK)}
            </div>
            <div className="month-cell-day-wrapper">
              <Button
                className="month-cell-day"
                onClick={() => onSelectDate(date)}
              >
                {date.getDate() === 1 && format(date, DateFormat.MONTH_SHORT)}{' '}
                {date.getDate()}
              </Button>
            </div>
            {slots.slice(0, MAX_DISPLAYED_SLOTS + 1).map((slot, index) => {
              const { slotTime, slotTitle, isCollapsedSlot } =
                getSlotAttributes({
                  slot,
                  index,
                  length: slots.length,
                })

              return (
                <div key={slot.start + index} className="slot slot-line">
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
          </div>
        ))}
      </div>
    </>
  )
}

export default MonthSlots
