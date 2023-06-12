import { ReactChildrenT } from 'src/types'

export type IconButtonProps = ReactChildrenT & {
  hoverBG?: string
  outlined?: boolean
  isDisabled?: boolean
  activeColor?: string
  onClick?: () => void
}

export type UseIconButtonT = {
  hoverBG: string
  activeColor: string
  onClick: () => void
}
