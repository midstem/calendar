import { MonthSlot } from '../MonthSlot'

import { MonthSlotsProps } from './types'

const MonthSlots = ({
  onSelectDate,
  onClickEvent,
  onClickCell,
  renderRows,
  selectedDate,
  eventModal,
  newEventModal,
}: MonthSlotsProps): JSX.Element => {
  const slotCells = renderRows.map(cell => ({ ...cell, modalOpen: false }))

  return (
    <>
      <div className="month-cell-wrapper">
        {slotCells.map((cell, index) => (
          <MonthSlot
            eventModal={eventModal}
            newEventModal={newEventModal}
            key={cell.date.toDateString()}
            cell={cell}
            index={index}
            onSelectDate={onSelectDate}
            onClickEvent={onClickEvent}
            onClickCell={onClickCell}
            selectedDate={selectedDate}
          />
        ))}
      </div>
    </>
  )
}

export default MonthSlots
