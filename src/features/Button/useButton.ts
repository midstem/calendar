import { MouseEvent, useRef, useState } from 'react'

import { RippleT } from './types'
import { ANIMATION_DURATION } from './constants'

export const useButton = () => {
  const [ripples, setRipples] = useState<RippleT[]>([])
  const timeout = useRef<NodeJS.Timeout>()

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    clearTimeout(timeout.current)

    const container = event.currentTarget
    const { offsetX, offsetY } = event.nativeEvent
    const radius = Math.max(container.offsetWidth, container.offsetHeight) / 2

    const newRipple = {
      x: offsetX - radius,
      y: offsetY - radius,
      size: radius * 2,
    }

    setRipples([...ripples, newRipple])

    timeout.current = setTimeout(() => {
      setRipples([])
    }, ANIMATION_DURATION)
  }

  return { handleClick, ripples }
}
