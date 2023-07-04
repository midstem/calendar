import { Cell } from '../MonthSlots/types'
import { ModalsT, MonthCellType, UserEvents } from '../../types'

export type MonthSlotProps = UserEvents<MonthCellType> &
  ModalsT<MonthCellType> & {
    cell: Cell
    index: number
    selectedDate: Date
    onSelectDate: (date: Date) => void
  }
