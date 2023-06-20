import { Cell } from '../MonthSlots/types'

export type MonthSlotProps = {
  cell: Cell
  index: number
  onSelectDate: (date: Date) => void
}
