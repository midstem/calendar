import { memo } from 'react'
import { format, isSameDay } from 'date-fns'

import { dateFormat } from '../../constants'
import { WeekHeaderProps } from '../../types'
import IconButton from '../../components/IconButton'
import colors from '../../theme/colors'

const WeekHeader = ({
  weekDays,
  selectedDay,
  onSelectDate,
  formatOfDay = dateFormat.DAY_LONG
}: WeekHeaderProps) => {
  return (
    <>
      <div className="day time"></div>
      {weekDays.map((day) => {
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
                    : 'transparent'
                }}
                hoverBG={colors.powderBlue}
                activeColor={colors.powderBlue}
              >
                {format(day, dateFormat.DAY_NUMBER)}
              </IconButton>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default memo(WeekHeader)
