import Flex from '../Flex'
import Button from '../../features/Button'
import { Views } from '../../constants'
import ChevronDown from '../../components/ChevronDown'

import { useDropDown } from './useDropDown'
import { DropDownProps } from './types'

const DropDown = ({ viewMode, setViewMode }: DropDownProps): JSX.Element => {
  const { isShowDropdown, dropDownRef, setIsShowDropdown } = useDropDown()

  return (
    <Flex
      sx={{ position: 'relative' }}
      onClick={() => setIsShowDropdown(!isShowDropdown)}
    >
      <Button className="view-selection">
        {viewMode} <ChevronDown />
      </Button>
      {isShowDropdown && (
        <ul className="dropdown" ref={dropDownRef}>
          <li className="menu-item" onClick={() => setViewMode(Views.DAY)}>
            Day
          </li>
          <li className="menu-item" onClick={() => setViewMode(Views.WEEK)}>
            Week
          </li>
          <li className="menu-item">Month</li>
        </ul>
      )}
    </Flex>
  )
}

export default DropDown
