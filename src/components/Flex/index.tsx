import { FlexProps } from './types'

const Flex = ({
  children,
  sx = {},
  className = '',
  direction = 'row',
  align = 'normal',
  justify = 'normal',
  spacing = 0,
  refObject,
  onClick = () => {},
  ...props
}: FlexProps): JSX.Element => {
  return (
    <div
      ref={refObject}
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
      {...props}
    >
      {children}
    </div>
  )
}

export default Flex
