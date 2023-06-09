import './styles.css'

import { TextProps } from './types'

const Text = ({
  children,
  sx = {},
  variant = '',
  className,
}: TextProps): JSX.Element => {
  return (
    <p style={sx} className={`${variant} ${className}`}>
      {children}
    </p>
  )
}

export default Text
