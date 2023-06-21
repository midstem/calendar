import { CommonStylesT, ReactChildrenT } from '../../types'

export type ButtonProps = ReactChildrenT &
  CommonStylesT & {
    rippleColor?: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  }

export type RippleT = {
  x: number
  y: number
  size: number
}
