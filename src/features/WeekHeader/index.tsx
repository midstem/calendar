import { memo } from 'react'
import { format, isSameDay } from 'date-fns'

import colors from '../../theme/colors'
import { DateFormat } from '../../constants'
import IconButton from '../../components/IconButton'

import { WeekHeaderProps } from './types'

const WeekHeader = ({
  weekDays,
  selectedDay,
  onSelectDate,
  formatOfDay = DateFormat.DAY_LONG,
}: WeekHeaderProps): JSX.Element => {
  return (
    <>
      <div className="day time"></div>
      {weekDays.map(day => {
        return (
          <div className="day" key={day.toLocaleString()}>
            <div>{format(day, formatOfDay)}</div>
            <div>
              <IconButton
                onClick={() => onSelectDate(day)}
                sx={{
                  width: '35px',
                  height: '35px',
                  fontSize: '16px',
                  backgroundColor: isSameDay(day, selectedDay)
                    ? colors.powderBlue
                    : 'transparent',
                }}
                hoverBG={colors.powderBlue}
                activeColor={colors.powderBlue}
                className="selected-day-button"
              >
                {format(day, DateFormat.DAY_NUMBER)}
              </IconButton>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default memo(WeekHeader)
