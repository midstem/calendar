import { IconsT } from '../../types'
import { IconSizes } from '../../constants'

const RightArrow = ({
  sx = {},
  color = 'black',
  size = IconSizes.md,
}: IconsT): JSX.Element => {
  return (
    <>
      <svg
        style={sx}
        width={size}
        height={size}
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path
          fill={color}
          d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
        ></path>
      </svg>
    </>
  )
}

export default RightArrow
