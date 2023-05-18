import { useStyles } from '../styles'

const MonthHeader = ({ slotsFirstDateInList }: any) => {
  const classes = useStyles()
  const startDate = new Date(slotsFirstDateInList)
  const startMonth = startDate.toLocaleString('default', { month: 'long' })
  const endMonth = new Date(
    startDate.getFullYear(),
    startDate.getMonth() + 1,
    0
  ).toLocaleString('default', { month: 'long' })

  return (
    <div className={classes.monthHeader}>
      <div>{startMonth}</div>
      {startMonth !== endMonth && <div>- {endMonth}</div>}
    </div>
  )
}

export default MonthHeader
