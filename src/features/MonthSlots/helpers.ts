import { format } from 'date-fns'

import { DateFormat } from '../../constants'

import {
  Cell,
  CreateCells,
  GenerateSlotsForDaysOfMonth,
  GetSlotAttributes,
  SlotAttributes,
} from './types'
import { COUNT_CELLS, MAX_DISPLAYED_SLOTS } from './constants'

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
    countCells: COUNT_CELLS - daysInMonth - firstDayOfMonth,
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

export const getSlotAttributes = ({
  slot,
  index,
  length,
}: GetSlotAttributes): SlotAttributes => {
  const isCollapsedSlot =
    index >= MAX_DISPLAYED_SLOTS && length > MAX_DISPLAYED_SLOTS

  const slotTitle = isCollapsedSlot
    ? `${length - MAX_DISPLAYED_SLOTS} more`
    : slot.title

  const slotTime = isCollapsedSlot
    ? ''
    : format(new Date(slot.start), DateFormat.HOUR_MERIDIEM)

  return { isCollapsedSlot, slotTitle, slotTime }
}
