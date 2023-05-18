import { generateSlotsForDaysOfMonth } from '../helpers'
import { useStyles } from '../styles'

const MonthSlots = ({ slotsData }: any) => {
  const classes = useStyles()

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
        <div
          className={`${classes.cell} ${classes.monthCell}`}
          key={`empty-${String(index)}`}
        ></div>
      ))}
      {slotCells.map(({ date, slots }) => (
        <div
          className={`${classes.cell} ${classes.monthCell}`}
          key={date.toLocaleString()}
        >
          <div>{date.getDate()}</div>
          {slots.map(({ slot, type }: any) => (
            <div
              key={slot.start}
              className={`${classes.slot} ${
                type === 'member' ? classes.slotRight : ''
              }`}
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
