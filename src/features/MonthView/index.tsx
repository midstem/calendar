import MonthSlots from '../MonthSlots'
import MonthHeader from '../MonthHeader'

const MonthView = ({ events }: any): JSX.Element => {
  return (
    <>
      <div className="header">
        <MonthHeader slotsFirstDateInList={events[0].date} />
      </div>
      <div className="body">
        <MonthSlots slotsData={events} />
      </div>
    </>
  )
}

export default MonthView
