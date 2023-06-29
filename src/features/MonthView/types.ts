import { Cell } from '../MonthSlots/types'
import { MonthCellType, UserEvents } from '../../types'

export type MonthViewProps = UserEvents<MonthCellType> & {
  renderRows: Cell[]
  selectDateHandler: (date: Date) => void
  selectedDate: Date
}
