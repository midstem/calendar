import { ChangeEvent, useCallback, useMemo, useRef, useState } from 'react'
import { addDays, subDays, isBefore, isAfter } from 'date-fns'

import useClickOutside from '../../hooks/useClickOutside'
import { DAYS_IN_YEAR, Views } from '../../constants'

import { UseCalendarProps } from './types'
import {
  getEndOfWeek,
  getRenderRows,
  getStartOfWeek,
  getPreviousDateRange,
  getNextDateRange,
  getStartDate,
  getEndDate,
} from './helpers'

export const useCalendar = ({
  currentDay,
  events = [],
  onClickEvent = () => {},
  onChangeDate = () => {},
}: UseCalendarProps) => {
  const [viewMode, setViewMode] = useState<Views>(Views.DAY)
  const [currentDate, setCurrentDate] = useState<Date>(currentDay)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false)

  const dropDownRef = useRef<HTMLUListElement>(null)

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

  const handleChangeView = useCallback(
    ({ target: { value } }: ChangeEvent<{ value: Views }>) => {
      setViewMode(value)
    },
    [],
  )

  const handleClickEvent = useCallback(
    (event?: string) => onClickEvent && onClickEvent(event),
    [onClickEvent],
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

  const hideDropDown = () => {
    setIsShowDropdown(false)
  }

  useClickOutside(isShowDropdown, dropDownRef, hideDropDown)

  return {
    viewMode,
    startDate,
    endDate,
    currentYear,
    selectedDate,
    renderRows,
    isDisabledNext,
    isDisabledPrevious,
    isShowDropdown,
    dropDownRef,
    setViewMode,
    next,
    previous,
    goToday,
    setIsShowDropdown,
    handleChangeView,
    handleClickEvent,
    selectDateHandler,
  }
}
