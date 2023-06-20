import { CommonStylesT, ReactChildrenT } from '../../types'

export type IconButtonProps = ReactChildrenT &
  CommonStylesT & {
    hoverBG?: string
    outlined?: boolean
    isDisabled?: boolean
    activeColor?: string
    ariaLabel?: string
    onClick?: () => void
  }

export type UseIconButtonT = {
  hoverBG: string
  activeColor: string
  onClick: () => void
}
