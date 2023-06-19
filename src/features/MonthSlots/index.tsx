import { format } from 'date-fns'
import classNames from 'classnames'

import { DateFormat } from '../../constants'

import { generateSlotsForDaysOfMonth } from './helpers'

const MonthSlots = ({ slotsData }: any): JSX.Element => {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 0).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  const slotCells = generateSlotsForDaysOfMonth(
    currentYear,
    daysInMonth,
    currentMonth,
    slotsData,
    firstDayOfMonth,
  )

  return (
    <>
      {[...Array(firstDayOfMonth + 1)].map((_, index) => (
        <div className="cell month-cell" key={`empty-${String(index)}`}></div>
      ))}
      <div className="month-cell-wrapper">
        {slotCells.map(({ date, slots, isCurrentMonth }, index) => (
          <div
            className={classNames('cell month-cell', {
              'month-cell--prev': !isCurrentMonth,
            })}
            key={date.toLocaleString() + index}
          >
            <div className="month-cell-day">
              {date.getDate()} {'\t'}
              {date.getDate() === 1 && format(date, DateFormat.MONTH_SHORT)}
            </div>
            {slots.map(({ slot, type }: any) => (
              <div
                key={slot.start}
                className={`slot ${type === 'member' ? 'slot-right' : ''}`}
              >
                {slot.start} - {slot.end} - {type}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default MonthSlots
