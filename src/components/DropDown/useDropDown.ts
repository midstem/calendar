import { useRef, useState } from 'react'

import useClickOutside from '../../hooks/useClickOutside'

export const useDropDown = () => {
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false)
  const dropDownRef = useRef<HTMLDivElement>(null)

  const handleIsShowDropdown = (): void => {
    setIsShowDropdown(!isShowDropdown)
  }

  useClickOutside(isShowDropdown, dropDownRef, handleIsShowDropdown)

  return { isShowDropdown, dropDownRef, handleIsShowDropdown }
}
