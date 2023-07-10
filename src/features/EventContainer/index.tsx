import { getBlockHeight, getStartPosition } from '../../helpers'

import { EventContainerProps } from './types'
import { EVENT_GAP } from './constants'

const EventContainer = ({
  duration,
  index,
  isSelected,
  overlapping,
  start,
  children,
  onClick,
}: EventContainerProps): JSX.Element => {
  return (
    <div
      onClick={e => onClick(e)}
      className={`event-container ${isSelected && 'selected'} `}
      style={{
        zIndex: (overlapping ? overlapping : index) + 1,
        top: `${getStartPosition(start)}px`,
        height: `${getBlockHeight(duration)}px`,
        width: `calc(100% - ${index * EVENT_GAP}px)`,
        right: 0,
      }}
    >
      {children}
    </div>
  )
}

export default EventContainer
