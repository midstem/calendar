import IconButton from '../IconButton'

import { NavigationButtonProps } from './types'

export const NavigationButton = ({
  isDisabled,
  onClick,
  customButton,
  hoverBG,
  ariaLabel,
  defaultButton,
  defaultStyles,
}: NavigationButtonProps): JSX.Element =>
  customButton ? (
    <IconButton
      isDisabled={isDisabled}
      onClick={onClick}
      resetDefaultStyles
      ariaLabel={ariaLabel}
    >
      {customButton}
    </IconButton>
  ) : (
    <IconButton
      isDisabled={isDisabled}
      onClick={onClick}
      className={defaultStyles}
      outlined
      hoverBG={hoverBG}
      ariaLabel={ariaLabel}
    >
      {defaultButton}
    </IconButton>
  )
