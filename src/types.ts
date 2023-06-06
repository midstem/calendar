import { CSSProperties } from 'react'

import { IconSizes } from './constants'

export type ValueOF<T extends string> = `${T}`

export type ButtonStylesT = 'primary' | 'secondary'

export type IconsT = {
  sx?: CSSProperties
  color?: string
  size?: ValueOF<IconSizes>
}
