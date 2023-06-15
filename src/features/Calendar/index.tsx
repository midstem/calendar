import '../../theme/colors.css'
import './styles.css'

import { format } from 'date-fns'

import { ViewsT } from 'src/types'

import Button from '../Button'
import colors from '../../theme/colors'
import { DateFormat, Views } from '../../constants'
import Text from '../../components/Text'
import RightArrow from '../../components/RightArrow'
import LeftArrow from '../../components/LeftArrow'
import IconButton from '../../components/IconButton'
import Flex from '../../components/Flex'
import DropDown from '../../components/DropDown'

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
  onClickCell = () => {},
  onChangeDate = () => {},
  config = [],
  mode = Views.WEEK,
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
        <DropDown
          list={Object.values(Views)}
          value={viewMode}
          onChange={mode => setViewMode(mode as ViewsT)}
        />
      </Flex>
      <div className="calendar">
        <View
          onClickCell={onClickCell}
          events={events}
          renderRows={renderRows}
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
