import { CSSProperties, ReactNode } from 'react'

type FlexProps = {
  children: ReactNode
  sx?: CSSProperties
  className?: string
}

const Flex = ({
  children,
  sx = {},
  className = ''
}: FlexProps): JSX.Element => {
  return (
    <div
      className={className}
      style={{ display: 'flex', flexDirection: 'row', ...sx }}
    >
      {children}
    </div>
  )
}

export default Flex
