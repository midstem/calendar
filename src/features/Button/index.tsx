import './styles.css'
import colors from '../../theme/colors'

import { useButton } from './useButton'
import { ButtonProps } from './types'

const Button = ({
  children,
  className = '',
  sx = {},
  rippleColor = colors.transparentGreen,
  onClick = () => {},
  ariaLabel,
}: ButtonProps): JSX.Element => {
  const { handleClick, ripples } = useButton()

  return (
    <button
      style={sx}
      aria-label={ariaLabel}
      className={`button ${className}`}
      onClick={event => {
        onClick(event)
        handleClick(event)
      }}
    >
      {children}
      {ripples.map((ripple, index) => (
        <div
          key={index}
          className="ripple"
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
            background: rippleColor,
          }}
        ></div>
      ))}
    </button>
  )
}

export default Button
