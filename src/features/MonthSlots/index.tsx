import { generateSlotsForDaysOfMonth } from './helpers'

const MonthSlots = ({ slotsData }: any): JSX.Element => {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  const slotCells = generateSlotsForDaysOfMonth(
    currentYear,
    daysInMonth,
    currentMonth,
    slotsData,
  )
  const numGhostCells = 7 - (slotCells.length % 7)
  const arrGhostCells = new Array(numGhostCells).fill('')

  return (
    <>
      {[...Array(firstDayOfMonth)].map((_, index) => (
        <div className="cell month-cell" key={`empty-${String(index)}`}></div>
      ))}
      <div className="month-cell-wrapper">
        {slotCells.map(({ date, slots }) => (
          <div className="cell month-cell" key={date.toLocaleString()}>
            <div className="month-cell-day">{date.getDate()}</div>
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
        {arrGhostCells.map((_, index) => (
          <div
            className="cell month-cell ghost-cell"
            key={`ghost-${String(index)}`}
          />
        ))}
      </div>
    </>
  )
}

export default MonthSlots
