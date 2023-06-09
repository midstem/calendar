import { ReactNode } from 'react'

export type NavigationButtonProps = {
  isDisabled: boolean
  onClick: () => void
  customButton: ReactNode
  hoverBG?: string
  ariaLabel: string
  defaultStyles?: string
  defaultButton: ReactNode
}
