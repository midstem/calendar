import { Theme } from '@mui/system'
import { BadgePropsColorOverrides } from '@mui/material/Badge'

const MuiBadge: BadgePropsColorOverrides = {
  styleOverrides: {
    colorPrimary: ({ theme }: { theme: Theme }) => ({
      backgroundColor: theme.palette.grey[900],
    }),
    colorSuccess: ({ theme }: { theme: Theme }) => ({
      backgroundColor: theme.palette.success.lighter,
    }),
  },
}

export default MuiBadge
