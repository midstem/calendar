import { CSSProperties, ReactNode } from 'react'

export type IconButtonProps = {
  children: ReactNode
  sx?: CSSProperties
  className?: string
  hoverBG?: string
  outlined?: boolean
  isDisabled?: boolean
  activeColor?: string
  onClick?: () => void
}

export type UseIconButtonT = {
  hoverBG: string
  activeColor: string
  onClick: () => void
}
