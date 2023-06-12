import { CSSProperties, ReactNode } from 'react'

import './styles.css'
import Flex from '../Flex'

import { useIconButton } from './useIconButton'

type IconButtonProps = {
  children: ReactNode
  sx?: CSSProperties
  className?: string
  onClick?: () => void
  hoverBG?: string
  outlined?: boolean
  isDisabled?: boolean
  activeColor?: string
}

const IconButton = ({
  children,
  className = '',
  sx,
  onClick = () => {},
  hoverBG = 'transparent',
  activeColor = 'transparent',
  outlined = false,
  isDisabled = false,
}: IconButtonProps): JSX.Element => {
  const { handleClick, handleMouseOut, handleMouseOver } = useIconButton({
    hoverBG,
    activeColor,
    onClick,
  })

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ border: outlined ? '' : 'none', ...sx }}
      className={`icon-button ${
        isDisabled ? 'disabled-button' : ''
      } ${className}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Flex align="center" justify="center">
        {children}
      </Flex>
    </button>
  )
}

export default IconButton
