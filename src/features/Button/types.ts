import { MouseEvent } from 'react'

import { CommonStylesT, ReactChildrenT } from '../../types'

export type ButtonProps = ReactChildrenT &
  CommonStylesT & {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
    ariaLabel: string
  }

export type RippleT = {
  x: number
  y: number
  size: number
}
