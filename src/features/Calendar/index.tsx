import '../../theme/colors.css'
import './styles.css'

import { format } from 'date-fns'

import WeekView from '../WeekView'
import DayView from '../DayView'
import Button from '../Button'
import colors from '../../theme/colors'
import { DateFormat, Views } from '../../constants'
import Text from '../../components/Text'
import RightArrow from '../../components/RightArrow'
import LeftArrow from '../../components/LeftArrow'
import IconButton from '../../components/IconButton'
import Flex from '../../components/Flex'

import { useCalendar } from './useCalendar'
import { CalendarProps } from './types'
import { mockEvents } from './mockData'

const Calendar = ({
  events = mockEvents,
  onClickEvent = () => {},
  currentDay = new Date(),
  selectedEvent,
  onChangeDate = () => {},
  renderEventComponent,
}: CalendarProps): JSX.Element => {
  const {
    viewMode,
    handleClickEvent,
    startDate,
    endDate,
    currentYear,
    next,
    previous,
    renderRows,
    selectedDate,
    selectDateHandler,
    goToday,
    isDisabledNext,
    isDisabledPrevious,
  } = useCalendar({
    currentDay: new Date(currentDay),
    events,
    onClickEvent,
    onChangeDate,
  })

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
        <Flex>
          {/* <Select
            disableUnderline
            variant="standard"
            IconComponent={ExpandMoreIcon}
            value={viewMode === Views.MONTH ? Views.MONTH : Views.WEEK}
            onChange={handleChangeView}
          >
            <MenuItem value={viewMode.DAY}>Day View</MenuItem>
            <MenuItem value={Views.WEEK}>Week View</MenuItem>
            <MenuItem value={Views.MONTH}>Month View</MenuItem>
          </Select> */}
        </Flex>
      </Flex>
      <div className="calendar">
        {viewMode === Views.WEEK ? (
          <WeekView
            events={events}
            renderRows={renderRows}
            startDate={startDate}
            selectedDate={selectedDate}
            selectedEvent={selectedEvent}
            selectDateHandler={selectDateHandler}
            onClickEvent={handleClickEvent}
            renderEventComponent={renderEventComponent}
          />
        ) : (
          <DayView
            events={events}
            renderRows={renderRows}
            startDate={startDate}
            selectedEvent={selectedEvent}
            onClickEvent={handleClickEvent}
            renderEventComponent={renderEventComponent}
          />
        )}
      </div>
    </Flex>
  )
}

export default Calendar
