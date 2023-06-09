import { addDays } from 'date-fns'

import { daysOfWeek } from '../../constants'

export const getWeekDays = (startDate: Date): Date[] =>
  daysOfWeek.map((_, index) => addDays(startDate, index))
