import { Theme } from '@mui/system'

const MuiLink = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.text.primary,
      textDecoration: 'underline',
      textTransform: 'uppercase',
      fontWeight: 700,
      fontSize: 12,
      lineHeight: '1.02rem',
      '&:active': {
        color: theme.palette.text.secondary,
      },
      '&:disabled': {
        color: theme.palette.text.disabled,
      },
    }),
  },
}

export default MuiLink
