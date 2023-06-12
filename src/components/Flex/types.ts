import { CSSProperties, ReactNode } from 'react'

export type FlexProps = {
  children: ReactNode
  sx?: CSSProperties
  className?: string
  direction?: CSSProperties['flexDirection']
  justify?: CSSProperties['justifyContent']
  align?: CSSProperties['alignItems']
  spacing?: CSSProperties['gap']
  onClick?: () => void
}
