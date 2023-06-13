import { memo } from 'react'
import { format } from 'date-fns'

import colors from '../../theme/colors'
import { DateFormat } from '../../constants'
import Text from '../../components/Text'
import IconButton from '../../components/IconButton'
import Flex from '../../components/Flex'

type DayHeaderProps = {
  day: Date
  formatOfDay?: string
}

const DayHeader = ({
  day,
  formatOfDay = DateFormat.DAY_LONG,
}: DayHeaderProps): JSX.Element => {
  return (
    <>
      <Flex
        className="day"
        spacing={20}
        align="center"
        sx={{ flexBasis: '100%' }}
        key={day.toLocaleString()}
      >
        <IconButton
          sx={{
            width: 50,
            height: 50,
            fontSize: '2rem',
            backgroundColor: colors.powderBlue,
          }}
          hoverBG={colors.powderBlue}
          activeColor={colors.powderBlue}
        >
          {format(day, DateFormat.DAY_NUMBER)}
        </IconButton>
        <Text variant="h4">{format(day, formatOfDay)}</Text>
      </Flex>
    </>
  )
}

export default memo(DayHeader)
