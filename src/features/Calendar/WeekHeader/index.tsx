import { memo } from 'react'
import { IconButton } from '@mui/material'
import { format, isSameDay } from 'date-fns'

import { dateFormat } from '../constants'
import { useStyles } from '../styles'
import { WeekHeaderProps } from '../types'

const WeekHeader = ({
  weekDays,
  selectedDay,
  onSelectDate,
  formatOfDay = dateFormat.DAY_LONG
}: WeekHeaderProps) => {
  const classes = useStyles()

  return (
    <>
      <div className={`${classes.day} ${classes.time}`}></div>
      {weekDays.map((day) => {
        return (
          <div className={classes.day} key={day.toLocaleString()}>
            <div>{format(day, formatOfDay)}</div>
            <div>
              <IconButton
                onClick={() => onSelectDate(day)}
                sx={{
                  width: '35px',
                  height: '35px',
                  fontSize: '16px',
                  backgroundColor: isSameDay(day, selectedDay)
                    ? 'secondary.light'
                    : 'transparent',
                  '&:hover': { backgroundColor: 'secondary.light' }
                }}
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
