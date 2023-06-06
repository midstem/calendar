import { Stack, Box } from '@mui/material'
import { format } from 'date-fns'

import { dateFormat } from '../constants'
import { EventComponentProps } from '../types'
import { applyOpacity, isClientEvent } from '../helpers'
import Text from '../../../UI/Text'

const EventItem = ({
  event,
  isSelected,
  onClick = () => {}
}: EventComponentProps): JSX.Element => {
  return (
    <Stack
      onClick={() => onClick(event.id)}
      className={`slot  ${isSelected && 'selected'}`}
      sx={{
        backgroundColor: applyOpacity(
          event?.color ?? '',
          isSelected ? 1 : event?.opacity ?? 1
        ),
        color: event.textColor
      }}
    >
      {event.markerColor && (
        <Stack>
          <Box
            sx={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: event.markerColor
            }}
          />
        </Stack>
      )}
      <Stack direction="row" flexWrap="wrap">
        <Text variant="caption">
          {isClientEvent(event?.type) ? event.title : ''}
        </Text>
      </Stack>
      {isClientEvent(event.type) ? (
        <Text variant="caption" sx={{ fontWeight: 'bold', marginTop: 8 }}>
          {format(new Date(event.start), dateFormat.MERIDIEM_TIME)} -{' '}
          {format(new Date(event.end), dateFormat.MERIDIEM_TIME)}
        </Text>
      ) : null}
    </Stack>
  )
}

export default EventItem
