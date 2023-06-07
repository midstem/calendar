import { CSSProperties, ReactNode } from 'react'

type FlexProps = {
  children: ReactNode
  sx?: CSSProperties
  className?: string
  onClick?: () => void
  direction?: CSSProperties['flexDirection']
  justify?: CSSProperties['justifyContent']
  align?: CSSProperties['alignItems']
  spacing?: CSSProperties['gap']
}

const Flex = ({
  children,
  sx = {},
  className = '',
  onClick = () => {},
  direction = 'row',
  align = 'normal',
  justify = 'normal',
  spacing = 0
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
        ...sx
      }}
    >
      {children}
    </div>
  )
}

export default Flex
