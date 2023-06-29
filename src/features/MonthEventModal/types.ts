import { ForwardedRef } from 'react'

import { Cell } from '../MonthSlots/types'
import { MonthCellType, UserClickEvent } from '../../types'

export type MonthEventModalProps = UserClickEvent<MonthCellType> & {
  cell: Cell
  closeModalHandler: (value: boolean) => void
  ref: ForwardedRef<any>
  color: string
}
