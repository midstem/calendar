import { FlexProps } from './types'

const Flex = ({
  children,
  sx = {},
  className = '',
  onClick = () => {},
  direction = 'row',
  align = 'normal',
  justify = 'normal',
  spacing = 0,
}: FlexProps): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        gap: spacing,
        ...sx,
      }}
    >
      {children}
    </div>
  )
}

export default Flex
