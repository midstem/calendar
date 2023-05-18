import { Theme } from '@mui/system'

const MuiSelect = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      fontSize: 14,
      color: theme.palette.text.secondary,
      '&.Mui-focused': {
        '.MuiSelect-select': {
          backgroundColor: theme.palette.common.white,
          borderColor: theme.palette.secondary.light,
          color: theme.palette.secondary.main,
        },
        svg: {
          color: theme.palette.secondary.main,
        },
      },
      '&.MuiInputBase-colorSuccess': {
        '.MuiSelect-select': {
          borderColor: theme.palette.success.main,
        },
        svg: {
          color: theme.palette.secondary.main,
        },
      },
      '&.Mui-disabled': {
        '.MuiInputBase-input.MuiInput-input': {
          backgroundColor: theme.palette.grey[600],
          borderColor: 'transparent',
        },
        svg: {
          color: theme.palette.text.secondary,
        },
      },
      '&.Mui-error': {
        '.MuiSelect-select': {
          color: theme.palette.error.main,
          borderColor: theme.palette.error.light,
        },
        svg: {
          color: theme.palette.error.main,
        },
      },
    }),
    select: ({ theme }: { theme: Theme }) => ({
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
      // TODO: need to find better solution (margin should be 4px)
      '&.MuiInputBase-input.MuiInput-input': {
        marginTop: -12,
        background: 'white',
        borderRadius: 10,
      },
    }),
    icon: {
      width: 20,
      right: 12,
      top: -5,
    },
  },
}

export default MuiSelect
