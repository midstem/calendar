import { format } from 'date-fns'

import { DateFormat } from '../../constants'

import { MonthHeaderProps } from './types'

const MonthHeader = ({
  slotsFirstDateInList,
}: MonthHeaderProps): JSX.Element => {
  const startDate = new Date(slotsFirstDateInList)
  const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0)

  const startMonth = format(startDate, DateFormat.MONTH_LONG)
  const endMonth = format(endDate, DateFormat.MONTH_LONG)

  return (
    <div className="monthHeader">
      {startMonth !== endMonth && <div>- {endMonth}</div>}
    </div>
  )
}

export default MonthHeader
