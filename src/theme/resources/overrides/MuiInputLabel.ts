import {
  TextFieldPropsColorOverrides,
  TextFieldPropsSizeOverrides,
} from '@mui/material/TextField'
import { Theme } from '@mui/system'

const MuiInputLabel = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      fontSize: 14,
      lineHeight: '19px',
      fontWeight: 'bold',
      transformOrigin: 'left top 0px',
      transform: 'translate(0px, -1.5px) scale(0.75)',
      zIndex: 'auto',
      color: 'text.primary',
      '&.Mui-focused': {
        color: theme.palette.secondary.primary,
      },
      '&.MuiFormLabel-colorSuccess': {
        color: theme.palette.success.main,
      },
      '&.Mui-disabled': {
        color: theme.palette.text.secondary,
      },
      '&.Mui-error': {
        color: theme.palette.error.main,
      },
    }),
  },
} as TextFieldPropsColorOverrides | TextFieldPropsSizeOverrides

export default MuiInputLabel
