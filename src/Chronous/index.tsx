import '../theme/colors.css'
import './styles.css'

import { format } from 'date-fns'

import { ViewsT } from '../types'
import colors from '../theme/colors'
import Button from '../features/Button'
import { DateFormat, Views } from '../constants'
import Text from '../components/Text'
import RightArrow from '../components/RightArrow'
import { NavigationButton } from '../components/NavigationButton'
import LeftArrow from '../components/LeftArrow'
import Flex from '../components/Flex'
import DropDown from '../components/DropDown'
import ChevronDown from '../components/ChevronDown'

import { useCalendar } from './useCalendar'
import { CalendarProps, CombinedViewRowsType } from './types'
import { mockEvents } from './mockData'
import { VIEW_MODES } from './constants'

const Calendar = ({
  events = mockEvents,
  currentDay = new Date(),
  selectedEvent,
  renderEventComponent,
  config = [],
  mode = Views.WEEK,
  startHour = 1,
  endHour = 24,
  nextButton,
  prevButton,
  customDropdownArrow = <ChevronDown />,
  className,
  onClickEvent = () => {},
  onClickCell = () => {},
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
    setViewMode,
    next,
    previous,
    selectDateHandler,
    goToday,
  } = useCalendar({
    currentDay: new Date(currentDay),
    events,
    onChangeDate,
    config,
    mode,
    startHour,
    endHour,
  })

  const View = VIEW_MODES[viewMode]

  return (
    <Flex
      direction="column"
      className={className}
      spacing={16}
      sx={{ margin: 16 }}
    >
      <Flex
        justify="space-between"
        sx={{
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div className="header-grid">
          <Button
            ariaLabel="Today"
            onClick={goToday}
            className="today-button header-grid-today"
          >
            Today
          </Button>
          <Flex spacing={16} className="header-grid-arrows">
            <NavigationButton
              isDisabled={isDisabledPrevious}
              onClick={previous}
              customButton={prevButton}
              hoverBG={colors.powderBlue}
              ariaLabel="Left Arrow"
              defaultStyles="button arrow-button"
              defaultButton={<LeftArrow color={colors.teal} />}
            />
            <NavigationButton
              isDisabled={isDisabledNext}
              onClick={next}
              customButton={nextButton}
              hoverBG={colors.powderBlue}
              ariaLabel="Right Arrow"
              defaultStyles="button arrow-button"
              defaultButton={<RightArrow color={colors.teal} />}
            />
          </Flex>

          <Text className="header-grid-month">
            {format(startDate, DateFormat.MONTH_LONG)}
            {startDate.getMonth() !== endDate.getMonth() &&
              `-${format(endDate, DateFormat.MONTH_LONG)}`}
          </Text>

          <Text className="header-grid-year">{currentYear}</Text>
        </div>
        <DropDown
          list={Object.values(Views)}
          value={viewMode}
          onChange={mode => setViewMode(mode as ViewsT)}
          dropdownArrow={customDropdownArrow}
        />
      </Flex>
      <div className="calendar">
        <View
          onClickCell={onClickCell}
          events={events}
          renderRows={renderRows as CombinedViewRowsType}
          startDate={startDate}
          selectedDate={selectedDate}
          selectedEvent={selectedEvent}
          selectDateHandler={selectDateHandler}
          onClickEvent={onClickEvent}
          renderEventComponent={renderEventComponent}
        />
      </div>
    </Flex>
  )
}

export default Calendar
