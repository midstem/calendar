import { MouseEvent, useState } from 'react'

type UseIconButtonT = {
  hoverBG: string
  activeColor: string
  onClick: () => void
}

export const useIconButton = ({
  hoverBG,
  onClick,
  activeColor
}: UseIconButtonT) => {
  const [previousBG, setPreviousBG] = useState<string>(hoverBG)

  const handleMouseOver = (event: MouseEvent<HTMLButtonElement>): void => {
    setPreviousBG(event.currentTarget.style.backgroundColor)

    if (hoverBG) event.currentTarget.style.backgroundColor = hoverBG
  }

  const handleMouseOut = (event: MouseEvent<HTMLButtonElement>): void => {
    event.currentTarget.style.backgroundColor = previousBG
  }

  const handleClick = (): void => {
    setPreviousBG(activeColor)
    onClick()
  }

  return { handleMouseOver, handleMouseOut, handleClick }
}
