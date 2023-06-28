import { IconsT } from '../../types'
import { IconSizes } from '../../constants'

const Cross = ({
  sx = {},
  color = 'black',
  size = IconSizes.md,
  onClick,
}: IconsT): JSX.Element => {
  return (
    <svg
      style={sx}
      width={size}
      height={size}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="modal-cross"
      onClick={onClick}
    >
      <path
        fill={color}
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
      ></path>
    </svg>
  )
}

export default Cross
