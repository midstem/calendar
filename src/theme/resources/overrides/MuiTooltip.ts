import { Theme } from '@mui/system'

const MuiTooltip = {
  styleOverrides: {
    tooltip: ({ theme }: { theme: Theme }) => ({
      borderRadius: 8,
      background: theme.palette.grey[900],
      padding: 16,
    }),
    arrow: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.grey[900],
    }),
  },
}

export default MuiTooltip
