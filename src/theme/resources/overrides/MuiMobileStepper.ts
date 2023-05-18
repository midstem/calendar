import { Theme } from '@mui/system'

const MuiMobileStepper = {
  styleOverrides: {
    root: {
      padding: 0,
    },
    progress: ({ theme }: { theme: Theme }) => ({
      width: '100%',
      height: '4px',
      backgroundColor: theme.palette.success.light,
      [theme.breakpoints.up('sm')]: {
        height: '8px',
      },
      '& .MuiLinearProgress-bar': {
        backgroundColor: theme.palette.success.main,
      },
    }),
  },
}

export default MuiMobileStepper
