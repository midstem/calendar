import './styles.css'

import { ButtonProps } from './types'

const Button = ({
  children,
  className = '',
  sx = {},
  onClick = () => {},
  ariaLabel,
}: ButtonProps): JSX.Element => {
  return (
    <button
      style={sx}
      aria-label={ariaLabel}
      className={`button ${className}`}
      onClick={event => {
        onClick(event)
      }}
    >
      {children}
    </button>
  )
}

export default Button
