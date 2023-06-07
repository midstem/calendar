import '../../theme/colors.css'
import './styles.css'

import { format } from 'date-fns'

import IconButton from '../../components/IconButton'
import WeekView from '../WeekView'
import { dateFormat } from '../../constants'
import { CalendarProps } from './types'
import { useCalendar } from './useCalendar'
import { mockEvents } from './mockData'
import Button from '../Button'
import Text from '../../components/Text'
import RightArrow from '../../components/RightArrow'
import LeftArrow from '../../components/LeftArrow'
import Flex from '../../components/Flex'
import colors from '../../theme/colors'
import { Views } from '../../types'

const Calendar = ({
  events = mockEvents,
  onClickEvent = () => {},
  currentDay = new Date(),
  selectedEvent,
  onChangeDate = () => {},
  renderEventComponent
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
    isDisabledPrevious
  } = useCalendar({
    currentDay: new Date(currentDay),
    events,
    onClickEvent,
    onChangeDate
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
            {format(startDate, dateFormat.MONTH_LONG)}
            {startDate.getMonth() !== endDate.getMonth() &&
              `-${format(endDate, dateFormat.MONTH_LONG)}`}
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
        ) : null}
      </div>
    </Flex>
  )
}

export default Calendar
