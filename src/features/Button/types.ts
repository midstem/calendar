import { CSSProperties, ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
  className?: string
  sx?: CSSProperties
  rippleColor?: string
  onClick?: () => void
}

export type RippleT = {
  x: number
  y: number
  size: number
}
