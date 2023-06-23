import { CalendarEventType, MonthCellType, UserEvents } from '../../types'

export type MonthSlotsProps = UserEvents<MonthCellType> & {
  renderRows: Cell[]
  onSelectDate: (date: Date) => void
}

export type CreateCells = {
  currentYear: number
  currentMonth: number
  countCells: number
  isCurrentMonth: boolean
  daysInPrevMonth?: number
}

export type GenerateSlotsForDaysOfMonth = {
  date: number
  slotsData: CalendarEventType[]
}

export type Cell = {
  date: Date
  isCurrentMonth: boolean
  slots: CalendarEventType[]
}

export type GetSlotAttributes = {
  slot: CalendarEventType
  index: number
  length: number
}

export type SlotAttributes = {
  isCollapsedSlot: boolean
  slotTitle: string
  slotTime: string
}
