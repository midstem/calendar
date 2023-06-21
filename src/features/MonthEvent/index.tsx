import { MonthEventProps } from './types'

export const MonthEvent = ({
  event,
  onClickEvent,
  isCollapsedEvent = false,
}: MonthEventProps): JSX.Element => {
  return (
    <div className="slot slot-line" onClick={() => onClickEvent(event)}>
      {!isCollapsedEvent && (
        <div
          className="slot-line-circle"
          style={{
            backgroundColor: event.color ?? 'brown',
          }}
        />
      )}
      <span>{event.date}</span>
      <span className="slot-title">{event.title}</span>
    </div>
  )
}
