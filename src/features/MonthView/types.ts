import { Cell } from '../MonthSlots/types'
import { ModalsT, MonthCellType, UserEvents } from '../../types'

export type MonthViewProps = UserEvents<MonthCellType> &
  ModalsT<MonthCellType> & {
    renderRows: Cell[]
    selectDateHandler: (date: Date) => void
    selectedDate: Date
  }
