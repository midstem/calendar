import { CSSProperties } from 'react'

import { ReactChildrenT } from 'src/types'

export type FlexProps = ReactChildrenT & {
  direction?: CSSProperties['flexDirection']
  justify?: CSSProperties['justifyContent']
  align?: CSSProperties['alignItems']
  spacing?: CSSProperties['gap']
  onClick?: () => void
}
