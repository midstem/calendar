import { CalendarEventType } from '../../types'

import { Cell } from './types'
import { countCells } from './constants'

export const createCells = (
  currentYear: number,
  currentMonth: number,
  countCells: number,
  isCurrentMonth: boolean,
  daysInPrevMonth?: number,
): Cell[] =>
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

export const generateSlotsForDaysOfMonth = (
  currentYear: number,
  daysInMonth: number,
  currentMonth: number,
  slotsData: CalendarEventType[],
  firstDayOfMonth: number,
): Cell[] => {
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate()

  const cells = createCells(currentYear, currentMonth, daysInMonth, true)

  const prevMonthCells = createCells(
    currentYear,
    currentMonth - 1,
    firstDayOfMonth,
    false,
    daysInPrevMonth,
  ).reverse()

  const nextMonthCells = createCells(
    currentYear,
    currentMonth + 1,
    countCells - daysInMonth - firstDayOfMonth,
    false,
  )

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
