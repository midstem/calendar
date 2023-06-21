import { Cell } from '../MonthSlots/types'
import { MonthCellType, UserEvents } from '../../types'

export type MonthSlotProps = UserEvents<MonthCellType> & {
  cell: Cell
  index: number
  onSelectDate: (date: Date) => void
}
