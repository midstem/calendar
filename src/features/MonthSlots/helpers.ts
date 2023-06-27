import { format } from 'date-fns'

import { DateFormat } from '../../constants'

import { GetSlotAttributes, SlotAttributes } from './types'
import { MAX_DISPLAYED_SLOTS } from './constants'

export const getSlotAttributes = ({
  slot,
  index,
  length,
}: GetSlotAttributes): SlotAttributes => {
  const isCollapsedSlot =
    index >= MAX_DISPLAYED_SLOTS && length > MAX_DISPLAYED_SLOTS

  const slotTitle = isCollapsedSlot
    ? `${length - MAX_DISPLAYED_SLOTS} more`
    : slot.title

  const slotTime = isCollapsedSlot
    ? ''
    : format(new Date(slot.start), DateFormat.HOUR_MERIDIEM)

  return { isCollapsedSlot, slotTitle, slotTime }
}
