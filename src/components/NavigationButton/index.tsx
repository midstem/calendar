import IconButton from '../IconButton'

import { NavigationButtonProps } from './types'

export const NavigationButton = ({
  isDisabled,
  onClick,
  customButton,
  hoverBG,
  ariaLabel,
  defaultButton,
}: NavigationButtonProps): JSX.Element =>
  customButton ? (
    <IconButton
      isDisabled={isDisabled}
      onClick={onClick}
      isDefault
      ariaLabel={ariaLabel}
    >
      {customButton}
    </IconButton>
  ) : (
    <IconButton
      isDisabled={isDisabled}
      onClick={onClick}
      className="button arrow-button"
      outlined
      hoverBG={hoverBG}
      ariaLabel={ariaLabel}
    >
      {defaultButton}
    </IconButton>
  )
