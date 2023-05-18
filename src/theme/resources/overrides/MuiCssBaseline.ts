import { Theme } from '@mui/system'

const MuiCssBaseline = {
  styleOverrides: {
    body: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.text.primary,
      fontSize: '16px',
    }),
    ul: {
      margin: 0,
    },
  },
}

export default MuiCssBaseline
