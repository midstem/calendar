import { Theme } from '@mui/system'

const MuiSlider = {
  styleOverrides: {
    rail: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.success.light,
    }),
    thumb: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.success.main,
      '&:hover': {
        boxShadow: '0px 0px 0px 8px rgba(185, 233, 224, 0.16)',
      },
      '&:active': {
        boxShadow: '0px 0px 0px 12px rgba(185, 233, 224, 0.16)',
      },
    }),
    track: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.secondary.main,
    }),
  },
}

export default MuiSlider
