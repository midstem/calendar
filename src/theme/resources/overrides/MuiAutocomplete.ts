import { Theme } from '@mui/system'

const MuiAutocomplete = {
  styleOverrides: {
    hasClearIcon: {
      '.MuiAutocomplete-inputRoot': {
        paddingRight: '0px !important',
      },
    },
    input: {
      paddingRight: '45px',
    },
    clearIndicator: ({ theme }: { theme: Theme }) => ({
      width: 30,
      height: 30,
      marginRight: 8,
      marginTop: -1,
      background: 'transparent',
      transition: 0.3,
      '&:hover': {
        background: theme.palette.success.light,
      },
    }),
  },
}

export default MuiAutocomplete
