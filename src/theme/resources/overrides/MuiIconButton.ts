import {
  IconButtonPropsColorOverrides,
  IconButtonPropsSizeOverrides,
} from '@mui/material/IconButton'
import { Theme } from '@mui/system'

const MuiIconButton = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: 'transparent',
        '& polygon:last-child': {
          fill: theme.palette.secondary.main,
        },
      },
    }),
    colorSecondary: ({ theme }: { theme: Theme }) => ({
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette.success.light}`,
      '&:hover': {
        backgroundColor: theme.palette.success.light,
      },
    }),
  },
} as IconButtonPropsColorOverrides | IconButtonPropsSizeOverrides

export default MuiIconButton
