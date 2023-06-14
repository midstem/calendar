import { useEffect } from 'react'

export const useScreenResize = (callback: () => void) => {
  useEffect(() => {
    callback()
    window.addEventListener('resize', callback)

    return () => {
      window.removeEventListener('resize', callback)
    }
  }, [])
}
