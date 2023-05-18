import { FormLabelPropsColorOverrides } from '@mui/material/FormLabel'
import { Theme } from '@mui/system'

const MuiFormLabel = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.text.primary,
      fontSize: 14,
      marginBottom: 14,
      zIndex: 'auto',
      '&.Mui-focused': {
        color: theme.palette.secondary.main,
      },
      '&.MuiInputLabel-root': {
        transform: 'none',
        margin: 0,
        position: 'relative',
      },
    }),
  },
} as FormLabelPropsColorOverrides

export default MuiFormLabel
