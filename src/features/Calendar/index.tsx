import '../../theme/colors.css'
import './styles.css'

import { format } from 'date-fns'

import Button from '../Button'
import colors from '../../theme/colors'
import { DateFormat, Views } from '../../constants'
import Text from '../../components/Text'
import RightArrow from '../../components/RightArrow'
import LeftArrow from '../../components/LeftArrow'
import IconButton from '../../components/IconButton'
import Flex from '../../components/Flex'
import ChevronDown from '../../components/ChevronDown'

import { useCalendar } from './useCalendar'
import { CalendarProps } from './types'
import { mockEvents } from './mockData'
import { VIEW_MODES } from './constants'

const Calendar = ({
  events = mockEvents,
  currentDay = new Date(),
  selectedEvent,
  renderEventComponent,
  onClickEvent = () => {},
  onChangeDate = () => {},
}: CalendarProps): JSX.Element => {
  const {
    viewMode,
    startDate,
    endDate,
    currentYear,
    renderRows,
    selectedDate,
    isDisabledNext,
    isDisabledPrevious,
    isShowDropdown,
    dropDownRef,
    setViewMode,
    next,
    previous,
    handleClickEvent,
    selectDateHandler,
    goToday,
    setIsShowDropdown,
  } = useCalendar({
    currentDay: new Date(currentDay),
    events,
    onClickEvent,
    onChangeDate,
  })

  const View = VIEW_MODES[viewMode]

  return (
    <Flex direction="column" spacing={16} sx={{ margin: 16 }}>
      <Flex justify="space-between">
        <Flex align="center" spacing={16}>
          <Button onClick={goToday}>Today</Button>
          <Flex spacing={16}>
            <IconButton
              isDisabled={isDisabledPrevious}
              onClick={previous}
              className="arrow-button"
              outlined
              hoverBG={colors.powderBlue}
            >
              <LeftArrow color={colors.teal} />
            </IconButton>
            <IconButton
              isDisabled={isDisabledNext}
              onClick={next}
              className="arrow-button"
              outlined
              hoverBG={colors.powderBlue}
            >
              <RightArrow color={colors.teal} />
            </IconButton>
          </Flex>

          <Text sx={{ marginRight: 8 }}>
            {format(startDate, DateFormat.MONTH_LONG)}
            {startDate.getMonth() !== endDate.getMonth() &&
              `-${format(endDate, DateFormat.MONTH_LONG)}`}
          </Text>

          <Text>{currentYear}</Text>
        </Flex>
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
      </Flex>
      <div className="calendar">
        <View
          events={events}
          renderRows={renderRows}
          startDate={startDate}
          selectedDate={selectedDate}
          selectedEvent={selectedEvent}
          selectDateHandler={selectDateHandler}
          onClickEvent={handleClickEvent}
          renderEventComponent={renderEventComponent}
        />
      </div>
    </Flex>
  )
}

export default Calendar
