import { ReactNode } from 'react'

export type DropDownProps = {
  value: string
  onChange: (a: string) => void
  list: string[]
  dropdownArrow: ReactNode
}
