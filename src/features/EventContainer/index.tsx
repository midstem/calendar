import { getBlockHeight, getStartPosition } from '../../helpers'
import { EVENT_GAP } from '../../constants'

import { EventContainerProps } from './types'

const EventContainer = ({
  duration,
  index,
  isSelected,
  overlapping,
  position,
  start,
  width,
  numberOfEvents,
  children,
  onClick,
}: EventContainerProps): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className={`slot-container ${isSelected && 'selected'} `}
      style={{
        zIndex: overlapping ? overlapping + 1 : 1,
        top: `${getStartPosition(start)}px`,
        height: `${getBlockHeight(duration)}px`,
        left: position ?? `calc(${100 / numberOfEvents}% * ${index})`,
        width: width ?? `calc(${100 / numberOfEvents}% - ${EVENT_GAP}px)`,
      }}
    >
      {children}
    </div>
  )
}

export default EventContainer
