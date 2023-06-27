import { MouseEvent, useState } from 'react'

import { UseIconButtonT } from './types'

export const useIconButton = ({
  hoverBG,
  onClick,
  activeColor,
}: UseIconButtonT) => {
  const [previousBG, setPreviousBG] = useState<string | undefined>(undefined)

  const handleMouseOver = (event: MouseEvent<HTMLButtonElement>): void => {
    if (!previousBG) setPreviousBG(event.currentTarget.style.backgroundColor)

    if (hoverBG) event.currentTarget.style.backgroundColor = hoverBG
  }

  const handleMouseOut = (event: MouseEvent<HTMLButtonElement>): void => {
    if (previousBG !== undefined)
      event.currentTarget.style.backgroundColor = previousBG
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    if (activeColor) event.currentTarget.style.backgroundColor = activeColor

    onClick()
  }

  return { handleMouseOver, handleMouseOut, handleClick }
}
