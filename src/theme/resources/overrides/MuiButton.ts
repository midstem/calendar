import {
  ButtonPropsVariantOverrides,
  ButtonPropsSizeOverrides,
} from '@mui/material/Button'
import { Theme } from '@mui/system'

const MuiButton = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      textTransform: 'uppercase',
      fontSize: 16,
      height: 44,
      padding: '13px 10px',
      lineHeight: 1.2,
      fontFamily: ['Byrd', 'Manrope'].join(','),
      borderRadius: 4, //TODO: should be in common theme value
      borderWidth: 2,
      borderStyle: 'solid',
      fontWeight: 'bold',
      backgroundColor: theme.palette.common.white,
      borderColor: 'transparent',
      '&:hover': {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'transparent',
      },
      '&:disabled': {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'transparent',
      },
      svg: {
        width: 20,
        height: 20,
      },
      '& .MuiButton-startIcon': {
        marginRight: '10px',
      },
    }),
    sizeMedium: {
      padding: '8px 10px',
      fontSize: 14,
      lineHeight: 1.05,
      height: 31,
      svg: {
        width: 17,
        height: 17,
      },
    },
    sizeSmall: {
      padding: '5px 10px',
      fontSize: 12,
      lineHeight: 0.9,
      letterSpacing: '0.35px',
      height: 24,
      svg: {
        width: 14,
        height: 14,
      },
    },
    text: {
      textTransform: 'uppercase',
      '> a': {
        textDecoration: 'none',
      },
    },
    // CONTAINED
    contained: {
      '> a': {
        textDecoration: 'none',
      },
    },
    containedPrimary: ({ theme }: { theme: Theme }) => ({
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      '> a': {
        color: theme.palette.common.white,
      },
      '&:hover': {
        backgroundColor: theme.palette.grey[900],
      },
      '&:active': {
        backgroundColor: theme.palette.grey[900],
      },
      '&:disabled': {
        backgroundColor: theme.palette.grey[700],
        color: theme.palette.common.white,
      },
    }),
    // OUTLINED
    outlined: ({ theme }: { theme: Theme }) => ({
      backgroundColor: theme.palette.white,
      borderColor: theme.palette.secondary.main,
      '&:disabled': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.grey[700],
        borderColor: theme.palette.grey[700],
      },
    }),
    outlinedPrimary: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.lighter,
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
      },
    }),
    outlinedSecondary: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.text.secondary,
      borderColor: theme.palette.grey[800],
      '&:hover': {
        backgroundColor: theme.palette.grey[600],
        color: theme.palette.text.primary,
        borderColor: theme.palette.text.primary,
      },
    }),
    // TEXT
    textPrimary: ({ theme }: { theme: Theme }) => ({
      backgroundColor: 'transparent',
      textDecoration: 'none',
      color: theme.palette.secondary.main,
      '&:hover': {
        color: theme.palette.text.primary,
      },
      '&:disabled': {
        color: theme.palette.text.disabled,
      },
    }),
    textSecondary: ({ theme }: { theme: Theme }) => ({
      backgroundColor: 'transparent',
      textDecoration: 'none',
      color: theme.palette.grey[800],
      '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
      },
    }),
  },
} as ButtonPropsVariantOverrides | ButtonPropsSizeOverrides

export default MuiButton
