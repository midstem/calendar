import { MonthEventProps } from './types'

export const MonthEvent = ({
  event,
  onClickEvent,
  isCollapsedEvent = false,
}: MonthEventProps): JSX.Element => {
  return (
    <div className="event event-line" onClick={() => onClickEvent(event)}>
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
