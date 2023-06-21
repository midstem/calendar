import { MonthSlot } from '../MonthSlot'

import { MonthSlotsProps } from './types'
import { generateSlotsForDaysOfMonth } from './helpers'

const MonthSlots = ({
  slotsData,
  onSelectDate,
  onClickEvent,
  onClickCell,
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
  }).map(cell => ({ ...cell, modalOpen: false }))

  return (
    <>
      <div className="month-cell-wrapper">
        {slotCells.map((cell, index) => (
          <MonthSlot
            key={cell.date.toDateString()}
            cell={cell}
            index={index}
            onSelectDate={onSelectDate}
            onClickEvent={onClickEvent}
            onClickCell={onClickCell}
          />
        ))}
      </div>
    </>
  )
}

export default MonthSlots
