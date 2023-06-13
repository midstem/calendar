import { format } from 'date-fns'

import { EventComponentProps } from '../../types'
import { DateFormat } from '../../constants'
import Text from '../../components/Text'
import Flex from '../../components/Flex'

import { applyOpacity, isClientEvent } from './helpers'

const EventItem = ({
  event,
  isSelected,
  onClick = () => {},
}: EventComponentProps): JSX.Element => {
  return (
    <Flex
      direction="column"
      onClick={() => onClick(event.id)}
      className={`slot  ${isSelected && 'selected'}`}
      sx={{
        backgroundColor: applyOpacity(
          event?.color ?? '',
          isSelected ? 1 : event?.opacity ?? 1,
        ),
        color: event.textColor,
      }}
    >
      <Flex sx={{ flexWrap: 'wrap' }}>
        <Text variant="caption">
          {isClientEvent(event?.type) ? event.title : ''}
        </Text>
      </Flex>
      {isClientEvent(event.type) ? (
        <Text variant="caption" sx={{ fontWeight: 'bold', marginTop: 8 }}>
          {format(new Date(event.start), DateFormat.MERIDIEM_TIME)} -{' '}
          {format(new Date(event.end), DateFormat.MERIDIEM_TIME)}
        </Text>
      ) : null}
    </Flex>
  )
}

export default EventItem
