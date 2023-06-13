import { CSSProperties } from 'react'

import { CommonStylesT, ReactChildrenT } from 'src/types'

export type FlexProps = ReactChildrenT &
  CommonStylesT & {
    direction?: CSSProperties['flexDirection']
    justify?: CSSProperties['justifyContent']
    align?: CSSProperties['alignItems']
    spacing?: CSSProperties['gap']
    onClick?: () => void
  }
