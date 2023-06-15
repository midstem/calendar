import Flex from '../Flex'
import Button from '../../features/Button'
import ChevronDown from '../../components/ChevronDown'

import { useDropDown } from './useDropDown'
import { DropDownProps } from './types'

const DropDown = ({ onChange, value, list }: DropDownProps): JSX.Element => {
  const { isShowDropdown, dropDownRef, handleIsShowDropdown } = useDropDown()

  return (
    <Flex
      sx={{ position: 'relative' }}
      refObject={dropDownRef}
      onClick={handleIsShowDropdown}
    >
      <Button className="view-selection">
        {value} <ChevronDown />
      </Button>
      {isShowDropdown && (
        <ul className="dropdown">
          {list.map(view => (
            <li key={view} className="menu-item" onClick={() => onChange(view)}>
              {view}
            </li>
          ))}
        </ul>
      )}
    </Flex>
  )
}

export default DropDown
