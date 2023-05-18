import { Theme } from '@mui/system'

const MuiFormHelperText = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      fontSize: 10,
      marginLeft: 0,
      color: theme.palette.text.primary,
      '.MuiInputBase-colorSuccess + &': {
        color: theme.palette.success.main,
      },
    }),
  },
}

export default MuiFormHelperText
