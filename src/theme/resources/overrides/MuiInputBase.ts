import {
  InputBasePropsColorOverrides,
  InputBasePropsSizeOverrides,
} from '@mui/material/InputBase'
import { Theme } from '@mui/system'

const MuiInputBase = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      fontSize: 14,
      color: theme.palette.text.secondary,
      marginTop: 4,
      '&.Mui-focused': {
        input: {
          borderColor: theme.palette.secondary.light,
          color: theme.palette.secondary.main,
        },
        textarea: {
          borderColor: theme.palette.secondary.light,
          color: theme.palette.secondary.main,
        },
        svg: {
          color: theme.palette.secondary.main,
        },
      },
      '&.MuiInputBase-colorSuccess': {
        input: {
          borderColor: theme.palette.success.main,
        },
        textarea: {
          borderColor: theme.palette.success.main,
        },
        svg: {
          color: theme.palette.secondary.main,
        },
      },
      '&.Mui-disabled': {
        input: {
          borderColor: theme.palette.grey[700],
          backgroundColor: theme.palette.grey[600],
        },
        textarea: {
          borderColor: theme.palette.grey[700],
          backgroundColor: theme.palette.grey[600],
        },
        svg: {
          color: theme.palette.text.secondary,
        },
      },
      '&.Mui-error': {
        input: {
          color: theme.palette.error.main,
          borderColor: theme.palette.error.light,
        },
        textarea: {
          color: theme.palette.error.main,
          borderColor: theme.palette.error.light,
        },
        svg: {
          color: theme.palette.error.main,
        },
      },
    }),
    input: ({ theme }: { theme: Theme }) => ({
      padding: 10,
      position: 'relative',
      borderRadius: 10,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: theme.palette.grey[700],
      background: 'white',
      '&:active': {
        borderColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
      },
      '&::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
      '&::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
      '&[type=number]': {
        MozAppearance: 'textfield',
      },
    }),
    inputMultiline: ({ theme }: { theme: Theme }) => ({
      padding: '9px 10px',
      position: 'relative',
      borderRadius: 10,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: theme.palette.grey[700],
      '&:active': {
        borderColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
      },
      '&::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
      '&::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
      '&[type=number]': {
        MozAppearance: 'textfield',
      },
    }),
  },
} as InputBasePropsColorOverrides | InputBasePropsSizeOverrides

export default MuiInputBase
