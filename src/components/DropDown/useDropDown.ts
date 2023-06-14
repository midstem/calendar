import { useRef, useState } from 'react'

import useClickOutside from '../../hooks/useClickOutside'

export const useDropDown = () => {
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false)
  const dropDownRef = useRef<HTMLUListElement>(null)

  const hideDropDown = () => {
    setIsShowDropdown(false)
  }

  useClickOutside(isShowDropdown, dropDownRef, hideDropDown)

  return { isShowDropdown, dropDownRef, setIsShowDropdown }
}
