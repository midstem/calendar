import { Theme } from '@mui/system'

const MuiDialogActions = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      display: 'flex',
      padding: '24px 40px',
      justifyContent: 'center',
      [theme.breakpoints.up('tablet')]: {
        justifyContent: 'flex-end',
      },
      '& > button:not(:first-of-type)': {
        margin: 0,
        [theme.breakpoints.up('sm')]: {
          marginLeft: 40,
        },
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
        alignItems: 'stretch',
        gap: theme.spacing(2.5),
        padding: `${theme.spacing(3)} ${theme.spacing(2.5)}`,
      },
    }),
  },
}

export default MuiDialogActions
