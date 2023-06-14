import { useCallback, useMemo, useState } from 'react'
import { addDays, subDays, isBefore, isAfter } from 'date-fns'

import { ViewsT } from '../../types'
import { useScreenResize } from '../../hooks/useScreenResize'
import { DAYS_IN_YEAR } from '../../constants'

import { UseCalendarProps } from './types'
import {
  getEndOfWeek,
  getRenderRows,
  getStartOfWeek,
  getPreviousDateRange,
  getNextDateRange,
  getStartDate,
  getEndDate,
  getModeFromConfig,
} from './helpers'

export const useCalendar = ({
  currentDay,
  events = [],
  onChangeDate = () => {},
  config = [],
  mode,
}: UseCalendarProps) => {
  const [viewMode, setViewMode] = useState<ViewsT>(mode)
  const [currentDate, setCurrentDate] = useState<Date>(currentDay)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  const currentYear = useMemo(() => currentDate.getFullYear(), [currentDate])
  const startDate = useMemo(
    () => getStartDate(viewMode, currentDate),
    [viewMode, currentDate],
  )

  const endDate = useMemo(() => {
    return getEndDate(viewMode, currentDate)
  }, [viewMode, currentDate])

  const isDisabledNext = useMemo(() => {
    const { endDate } = getNextDateRange(currentDate, viewMode)

    return !isBefore(endDate, addDays(new Date(), DAYS_IN_YEAR))
  }, [currentDate, viewMode])

  const isDisabledPrevious = useMemo(() => {
    const { startDate } = getPreviousDateRange(currentDate, viewMode)

    return !isAfter(startDate, subDays(new Date(), DAYS_IN_YEAR))
  }, [currentDate, viewMode])

  const renderRows = useMemo(
    () => getRenderRows(startDate, endDate, viewMode, events),
    [endDate, events, startDate, viewMode],
  )

  const next = useCallback(() => {
    const { startDate, endDate } = getNextDateRange(currentDate, viewMode)

    setCurrentDate(startDate)
    onChangeDate(startDate, endDate)
  }, [currentDate, onChangeDate, viewMode])

  const previous = useCallback(() => {
    const { startDate, endDate } = getPreviousDateRange(currentDate, viewMode)
    setCurrentDate(startDate)
    onChangeDate(startDate, endDate)
  }, [currentDate, onChangeDate, viewMode])

  const goToday = useCallback(() => {
    const now = new Date()

    setSelectedDate(now)
    setCurrentDate(now)

    if (onChangeDate) onChangeDate(getStartOfWeek(now), getEndOfWeek(now))
  }, [onChangeDate])

  const selectDateHandler = useCallback((date: Date) => {
    setSelectedDate(date)
    // setViewMode(Views.MONTH)
  }, [])

  useScreenResize(() => setViewMode(getModeFromConfig(config, mode)))

  return {
    viewMode,
    startDate,
    endDate,
    currentYear,
    selectedDate,
    renderRows,
    isDisabledNext,
    isDisabledPrevious,
    setViewMode,
    next,
    previous,
    goToday,
    selectDateHandler,
  }
}
