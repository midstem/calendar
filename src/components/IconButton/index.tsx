import './styles.css'
import Flex from '../Flex'

import { useIconButton } from './useIconButton'
import { IconButtonProps } from './types'

const IconButton = ({
  children,
  className = '',
  sx,
  onClick = () => {},
  hoverBG = 'transparent',
  activeColor = 'transparent',
  outlined = false,
  isDisabled = false,
  ariaLabel,
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
      aria-label={ariaLabel}
    >
      <Flex align="center" justify="center">
        {children}
      </Flex>
    </button>
  )
}

export default IconButton
