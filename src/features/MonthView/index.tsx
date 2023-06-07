import MonthHeader from '../MonthHeader'
import MonthSlots from '../MonthSlots'

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
