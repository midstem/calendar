import './styles.css'

import { TextProps } from './types'

const Text = ({ children, sx = {}, variant = '' }: TextProps): JSX.Element => {
  return (
    <p style={sx} className={`typography ${variant}`}>
      {children}
    </p>
  )
}

export default Text
