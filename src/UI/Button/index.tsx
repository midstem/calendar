import { CSSProperties, ReactNode } from 'react'

import './styles.css'
import { useButton } from './useButton'

type ButtonProps = {
  onClick?: () => void
  children: ReactNode
  className?: string
  sx?: CSSProperties
  rippleColor?: string
}

const Button = ({
  onClick = () => {},
  children,
  className = '',
  sx = {},
  rippleColor = '#17b37c1f'
}: ButtonProps): JSX.Element => {
  const { handleClick, ripples } = useButton()

  return (
    <button
      style={sx}
      className={`button ${className}`}
      onClick={(event) => {
        onClick()
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
            background: rippleColor
          }}
        ></div>
      ))}
    </button>
  )
}

export default Button
