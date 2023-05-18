import MonthHeader from '../MonthHeader'
import MonthSlots from '../MonthSlots'
import { useStyles } from '../styles'

const MonthView = ({ events }: any): JSX.Element => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.header}>
        <MonthHeader slotsFirstDateInList={events[0].date} />
      </div>
      <div className={classes.body}>
        <MonthSlots slotsData={events} />
      </div>
    </>
  )
}

export default MonthView
