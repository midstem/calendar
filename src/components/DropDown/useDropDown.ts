import { useRef, useState } from 'react'

import useClickOutside from '../../hooks/useClickOutside'
import { Views } from '../../constants'

export const useDropDown = (setViewMode: (a: Views) => void) => {
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false)
  const dropDownRef = useRef<HTMLDivElement>(null)

  const handleIsShowDropdown = (): void => {
    setIsShowDropdown(!isShowDropdown)
  }

  const handleViewChange = (view: Views): void => setViewMode(view)

  useClickOutside(isShowDropdown, dropDownRef, handleIsShowDropdown)

  return { isShowDropdown, dropDownRef, handleIsShowDropdown, handleViewChange }
}
