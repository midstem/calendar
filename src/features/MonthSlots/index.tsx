import { generateSlotsForDaysOfMonth } from './helpers'

const MonthSlots = ({ slotsData }: any) => {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  const slotCells = generateSlotsForDaysOfMonth(
    currentYear,
    daysInMonth,
    currentMonth,
    slotsData
  )

  return (
    <>
      {[...Array(firstDayOfMonth)].map((_, index) => (
        <div className="cell month-cell" key={`empty-${String(index)}`}></div>
      ))}
      {slotCells.map(({ date, slots }) => (
        <div className="cell month-cell" key={date.toLocaleString()}>
          <div>{date.getDate()}</div>
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
    </>
  )
}

export default MonthSlots
