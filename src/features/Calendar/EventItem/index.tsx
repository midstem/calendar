import { Stack, Typography, Box } from '@mui/material'
import { format } from 'date-fns'

import { dateFormat } from '../constants'
import { EventComponentProps } from '../types'
import { applyOpacity, isClientEvent } from '../helpers'

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
        <Typography variant="caption">
          {isClientEvent(event?.type) ? event.title : ''}
        </Typography>
      </Stack>
      {isClientEvent(event.type) ? (
        <Typography variant="caption" fontWeight="bold" mt={1}>
          {format(new Date(event.start), dateFormat.MERIDIEM_TIME)} -{' '}
          {format(new Date(event.end), dateFormat.MERIDIEM_TIME)}
        </Typography>
      ) : null}
    </Stack>
  )
}

export default EventItem
