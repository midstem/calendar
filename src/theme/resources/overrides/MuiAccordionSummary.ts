import { Theme } from '@mui/system'

const MuiAccordionSummary = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      background: theme.palette.secondary.main,
      padding: 0,
    }),
    content: {
      margin: 0,
      '&.Mui-expanded': {
        margin: 0,
      },
    },
  },
}

export default MuiAccordionSummary
