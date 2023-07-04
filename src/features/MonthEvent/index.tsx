import { MonthEventProps } from './types'

export const MonthEvent = ({
  event,
  onClick,
  isCollapsedEvent = false,
}: MonthEventProps): JSX.Element => {
  return (
    <div className="event event-line" onClick={onClick}>
      {!isCollapsedEvent && (
        <div
          className="event-line-circle"
          style={{
            backgroundColor: event.color ?? 'brown',
          }}
        />
      )}
      <span>{event.date}</span>
      <span className="event-title">{event.title}</span>
    </div>
  )
}
