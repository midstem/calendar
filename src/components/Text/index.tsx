import { CSSProperties, ReactNode } from 'react'

import './styles.css'
import { ValueOF } from '../../types'

import { TextVariants } from './types'

type TextProps = {
  children: ReactNode
  sx?: CSSProperties
  variant?: ValueOF<TextVariants> | ''
}

const Text = ({ children, sx = {}, variant = '' }: TextProps): JSX.Element => {
  return (
    <p style={sx} className={`typography ${variant}`}>
      {children}
    </p>
  )
}

export default Text
