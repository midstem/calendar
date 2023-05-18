import { makeStyles } from '@mui/styles'

import { CELL_HEIGHT } from './constants'
import { MUITheme } from './types'

const borderStyles = '1px solid #dadce0'

export const useStyles = makeStyles(({ breakpoints, palette }: MUITheme) => ({
  calendar: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    overflowX: 'auto'
  },
  header: {
    display: 'flex',
    flexDirection: 'row'
  },
  day: {
    flexGrow: 0,
    flexBasis: '20%',
    textAlign: 'center',
    padding: '10px',
    borderBottom: borderStyles,
    minWidth: '80px',
    '&:first-child': {
      borderLeft: 'none'
    }
  },
  body: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  cell: {
    flexGrow: 0,
    flexBasis: '20%',
    borderRight: borderStyles,
    borderBottom: borderStyles,
    minWidth: '80px',
    height: `${CELL_HEIGHT}px`,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row'
  },
  time: {
    display: 'flex',
    borderLeft: borderStyles,
    maxWidth: '40px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  monthCell: { flexBasis: 'auto' },
  slotContainer: {
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: palette.common.white
  },
  slot: {
    height: 'inherit',
    borderRadius: '4px',
    padding: '5px',
    boxSizing: 'border-box',
    zIndex: 1,
    border: 'solid 1px white',
    overflow: 'hidden',
    cursor: 'pointer'
  },
  slotLeft: {
    left: 0
  },
  slotRight: {
    right: 0
  },
  selected: { opacity: 1, zIndex: 20, overflow: 'hidden' }
}))
