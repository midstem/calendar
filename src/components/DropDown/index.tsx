import Flex from '../Flex'
import Button from '../../features/Button'
import { Views } from '../../constants'
import ChevronDown from '../../components/ChevronDown'

import { useDropDown } from './useDropDown'
import { DropDownProps } from './types'

const DropDown = ({ viewMode, setViewMode }: DropDownProps): JSX.Element => {
  const {
    isShowDropdown,
    dropDownRef,
    handleIsShowDropdown,
    handleViewChange,
  } = useDropDown(setViewMode)

  return (
    <Flex
      sx={{ position: 'relative' }}
      refObject={dropDownRef}
      onClick={handleIsShowDropdown}
    >
      <Button className="view-selection">
        {viewMode} <ChevronDown />
      </Button>
      {isShowDropdown && (
        <ul className="dropdown">
          {Object.values(Views).map(view => (
            <li
              key={view}
              className="menu-item"
              onClick={() => handleViewChange(view)}
            >
              {view}
            </li>
          ))}
        </ul>
      )}
    </Flex>
  )
}

export default DropDown
