import { Cell, CreateCells, GenerateSlotsForDaysOfMonth } from './types'
import { countCells } from './constants'

export const createCells = ({
  currentYear,
  currentMonth,
  countCells,
  isCurrentMonth,
  daysInPrevMonth,
}: CreateCells): Cell[] =>
  Array.from({ length: countCells }, (_, day) => {
    return {
      date: new Date(
        currentYear,
        currentMonth,
        daysInPrevMonth ? daysInPrevMonth - day : day + 1,
      ),
      isCurrentMonth,
      slots: [],
    }
  })

export const generateSlotsForDaysOfMonth = ({
  currentYear,
  daysInMonth,
  currentMonth,
  slotsData,
  firstDayOfMonth,
}: GenerateSlotsForDaysOfMonth): Cell[] => {
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate()

  const cells = createCells({
    countCells: daysInMonth,
    currentYear,
    currentMonth,
    isCurrentMonth: true,
  })

  const prevMonthCells = createCells({
    countCells: firstDayOfMonth,
    currentYear,
    currentMonth: currentMonth - 1,
    isCurrentMonth: false,
    daysInPrevMonth,
  }).reverse()

  const nextMonthCells = createCells({
    countCells: countCells - daysInMonth - firstDayOfMonth,
    currentYear,
    currentMonth: currentMonth + 1,
    isCurrentMonth: false,
  })

  const allCells = [prevMonthCells, cells, nextMonthCells].flat()

  const newCells = allCells.map(cell => {
    const matchingSlotData = slotsData.filter(({ date }) => {
      const slotDate = new Date(date)

      return (
        slotDate.getMonth() === currentMonth &&
        slotDate.getFullYear() === currentYear &&
        slotDate.getDate() === cell.date.getDate()
      )
    })

    if (matchingSlotData) {
      return {
        ...cell,
        slots: matchingSlotData,
      }
    }

    return cell
  })

  return newCells
}
