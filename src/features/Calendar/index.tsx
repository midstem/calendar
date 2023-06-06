/* eslint-disable import/order */
import { Box, Stack } from '@mui/material'

import '../../theme/resources/colors.css'
import './styles.css'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { format } from 'date-fns'
import IconButton from '../../componetns/IconButton'
import WeekView from './WeekView'
import { colors, dateFormat } from './constants'
import { Views, CalendarProps } from './types'
import { useCalendar } from './useCalendar'
import { mockEvents } from './mockData'
import Button from '../../componetns/Button'
import Text from '../../componetns/Text'

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
    <Stack m={2} spacing={2}>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={2} alignItems="center">
          <Button onClick={goToday}>Today</Button>
          <Box sx={{ ml: 2 }}>
            <IconButton
              isDisabled={isDisabledPrevious}
              onClick={previous}
              className="arrow-button"
              outlined
              hoverBG={colors.powderBlue}
            >
              <KeyboardArrowLeftIcon sx={{ color: colors.teal }} />
            </IconButton>
          </Box>
          <Box sx={{ ml: 2 }}>
            <IconButton
              isDisabled={isDisabledNext}
              onClick={next}
              className="arrow-button"
              outlined
              hoverBG={colors.powderBlue}
            >
              <KeyboardArrowRightIcon sx={{ color: colors.teal }} />
            </IconButton>
          </Box>
          <Text sx={{ marginRight: 8 }}>
            {format(startDate, dateFormat.MONTH_LONG)}
            {startDate.getMonth() !== endDate.getMonth() &&
              `-${format(endDate, dateFormat.MONTH_LONG)}`}
          </Text>

          <Text>{currentYear}</Text>
        </Stack>
        <Stack direction="row">
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
        </Stack>
      </Stack>
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
    </Stack>
  )
}

export default Calendar
